import React from "react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor, fireEvent, cleanup } from "@testing-library/react";
import ProductList from "./components/ProductList";

vi.mock("./components/ProductCard", () => ({
  default: ({ product, onDelete }) =>
    React.createElement(
      "div",
      { "data-testid": "product-card" },
      React.createElement("span", null, product.name),
      React.createElement(
        "button",
        { onClick: () => onDelete(product.id) },
        `Delete ${product.id}`
      )
    ),
}));

const API_URL = "http://localhost:3001/beverages";
const mockProducts = [
  { id: 1, name: "Cola", price: 2.5 },
  { id: 2, name: "Lemonade", price: 3.0 },
  { id: 3, name: "Iced Tea", price: 2.75 },
];

const ok = (data) => ({ ok: true, status: 200, json: async () => data });
const fail = (status = 500) => ({ ok: false, status, json: async () => ({}) });

beforeEach(() => {
  global.fetch = vi.fn();
  vi.spyOn(console, "error").mockImplementation(() => {});
  window.alert = vi.fn();
});

afterEach(() => {
  vi.restoreAllMocks();
  cleanup();
});

describe("ProductList", () => {

  it("1. shows loading, fetches correct URL, renders products, then empty state", async () => {
    global.fetch.mockReturnValueOnce(new Promise(() => {}));
    const { unmount } = render(<ProductList />);
    expect(screen.getByText("Loading beverages...")).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledWith(API_URL);
    unmount();

    global.fetch.mockResolvedValueOnce(ok(mockProducts));
    const { unmount: u2 } = render(<ProductList />);
    await screen.findByText("Cola");
    expect(screen.getAllByTestId("product-card")).toHaveLength(3);
    expect(screen.getByText("Showing 3 beverages")).toBeInTheDocument();
    u2();

    global.fetch.mockResolvedValueOnce(ok([]));
    render(<ProductList />);
    expect(await screen.findByText("No beverages available")).toBeInTheDocument();
  });

  it("2. handles HTTP error and network error", async () => {
    global.fetch.mockResolvedValueOnce(fail(404));
    render(<ProductList />);
    expect(await screen.findByText(/Status 404/i)).toBeInTheDocument();
    cleanup();

    global.fetch.mockRejectedValueOnce(new Error("Failed to fetch"));
    render(<ProductList />);
    expect(await screen.findByText("Failed to fetch")).toBeInTheDocument();
  });

  it("3. deletes a product: correct DELETE call, removes from UI, updates count", async () => {
    global.fetch.mockResolvedValueOnce(ok(mockProducts));
    render(<ProductList />);
    await screen.findByText("Cola");
    global.fetch.mockResolvedValueOnce({ ok: true, status: 200 });
    fireEvent.click(screen.getByText("Delete 1"));
    await waitFor(() =>
      expect(global.fetch).toHaveBeenLastCalledWith(`${API_URL}/1`, { method: "DELETE" })
    );
    await waitFor(() => expect(screen.queryByText("Cola")).not.toBeInTheDocument());
    expect(screen.getByText("Showing 2 beverages")).toBeInTheDocument();
  });

  it("4. shows alert and keeps product when delete fails", async () => {
    global.fetch.mockResolvedValueOnce(ok(mockProducts));
    render(<ProductList />);
    await screen.findByText("Cola");
    global.fetch.mockResolvedValueOnce({ ok: false, status: 500 });
    fireEvent.click(screen.getByText("Delete 1"));
    await waitFor(() => expect(window.alert).toHaveBeenCalled());
    expect(screen.getByText("Cola")).toBeInTheDocument();
  });
});