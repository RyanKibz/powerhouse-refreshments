import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import ProductForm from "../components/ProductForm";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));


global.fetch = vi.fn();

describe("ProductForm Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  
  it("renders form elements correctly", () => {
    render(<ProductForm />);
  });

  
  it("updates input fields on user typing", () => {
    render(<ProductForm />);
    const nameInput = screen.getByLabelText(/name/i);

    fireEvent.change(nameInput, { target: { name: "name", value: "Matcha Latte" } });

    expect(nameInput.value).toBe("Matcha Latte");
  })

  it("submits form data and navigates to /products on success", async () => {
    global.fetch.mockResolvedValueOnce({ ok: true });

    render(<ProductForm />);

    
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { name: "name", value: "Green Tea" },
    });

    
    fireEvent.click(screen.getByRole("button", { name: /Add beverage/i }));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "http://localhost:3001/beverages",
        expect.objectContaining({
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: "Green Tea",
            type: "",
            description: "",
            origin: "",
            healthBenefits: "",
            image: "",
          }),
        })
      );
      expect(mockNavigate).toHaveBeenCalledWith("/products");
    });
  });

  
  it("handles server error response gracefully", async () => {
    global.fetch.mockResolvedValueOnce({ ok: false });
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

    render(<ProductForm />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { name: "name", value: "Smoothie" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Add beverage/i }));

    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith("Failed to submit product.");
    });
  });

  
  it("prevents submission when required Name field is empty", () => {
    render(<ProductForm />);
    const submitBtn = screen.getByRole("button", { name: /Add beverage/i });

    fireEvent.click(submitBtn);

    
    expect(global.fetch).not.toHaveBeenCalled();
  });
});