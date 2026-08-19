import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

// About.jsx pulls in an image asset directly; mock it so the test
// doesn't depend on that file existing on disk.
vi.mock("../assets/tea.jpg", () => ({ default: "tea-mock.jpg" }));

function renderApp(initialRoute = "/") {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <App />
    </MemoryRouter>
  );
}

describe("App", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders the header, brand name, and footer on every route", () => {
    renderApp("/");

    expect(screen.getByText(/powerhouse beverages/i)).toBeInTheDocument();
    expect(
      screen.getByText(/all rights reserved/i)
    ).toBeInTheDocument();
  });

  it("renders all four nav links", () => {
    renderApp("/");

    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Our Products" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Add Product" })
    ).toBeInTheDocument();
  });

  it("renders Home content at the root route", () => {
    renderApp("/");
    expect(
      screen.getByText(/fuel your day with/i)
    ).toBeInTheDocument();
  });

  it("renders About content at /about", () => {
    renderApp("/about");
    expect(
      screen.getByText(/we refresh the world\./i)
    ).toBeInTheDocument();
  });

  it("renders ProductForm content at /productform", () => {
    renderApp("/productform");
    expect(
      screen.getByRole("heading", { name: /add new beverage/i })
    ).toBeInTheDocument();
  });

  it("renders ProductList content at /products, fetching from the API", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });

    renderApp("/products");

    await waitFor(() => {
      expect(
        screen.getByText(/no beverages available/i)
      ).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:3001/beverages"
    );
  });

  it("navigates between pages when nav links are clicked", async () => {
    renderApp("/");

    expect(
      screen.getByText(/fuel your day with/i)
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("link", { name: "About" }));
    await waitFor(() => {
      expect(
        screen.getByText(/we refresh the world\./i)
      ).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole("link", { name: "Add Product" }));
    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /add new beverage/i })
      ).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole("link", { name: "Home" }));
    await waitFor(() => {
      expect(
        screen.getByText(/fuel your day with/i)
      ).toBeInTheDocument();
    });
  });

  it("applies the active nav link style to the current route", () => {
    renderApp("/about");

    const aboutLink = screen.getByRole("link", { name: "About" });
    const homeLink = screen.getByRole("link", { name: "Home" });

    expect(aboutLink.className).toContain("bg-sky-500");
    expect(homeLink.className).not.toContain("bg-sky-500");
  });
});
