import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductCard from "../components/ProductCard";

describe("Productcard", () => {
  // Mock product data for testing
  const mockProduct = {
    id: 1,
    name: "Orange Juice",
    type: "Juice",
    description: "Fresh squeezed orange juice packed with vitamin C",
    origin: "Kenya",
    healthBenefits: "Boosts immunity, improves skin health",
    image: "https://example.com/orange-juice.jpg",
  };

  // Test 1: Component returns null when product prop is null
  it("should render nothing when product prop is null", () => {
    const { container } = render(<ProductCard product={null} />);
    expect(container.firstChild).toBeNull();
  });

  // Test 2: Component returns null when product prop is undefined
  it("should render nothing when product prop is undefined", () => {
    const { container } = render(<ProductCard product={undefined} />);
    expect(container.firstChild).toBeNull();
  });

  // Test 3: Renders product name correctly
  it("should render product name", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("Orange Juice")).toBeInTheDocument();
  });

  // Test 4: Renders product description correctly
  it("should render product description", () => {
    render(<ProductCard product={mockProduct} />);
    expect(
      screen.getByText("Fresh squeezed orange juice packed with vitamin C")
    ).toBeInTheDocument();
  });

  // Test 5: Renders type badge when type exists
  it("should render type badge when type is provided", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("Juice")).toBeInTheDocument();
    // Type badge should have uppercase tracking
    const typeBadge = screen.getByText("Juice");
    expect(typeBadge).toHaveClass("uppercase");
  });

  // Test 6: Does not render type badge when type is missing
  it("should not render type badge when type is not provided", () => {
    const productWithoutType = { ...mockProduct, type: null };
    render(<ProductCard product={productWithoutType} />);
    expect(screen.getByText("Orange Juice")).toBeInTheDocument()
  });

  // Test 7: Renders origin badge when origin exists
  it("should render origin badge when origin is provided", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("Kenya")).toBeInTheDocument();
  });

  // Test 8: Does not render origin badge when origin is missing
  it("should not render origin badge when origin is not provided", () => {
    const productWithoutOrigin = { ...mockProduct, origin: null };
    render(<ProductCard product={productWithoutOrigin} />);
    expect(screen.getByText("Orange Juice")).toBeInTheDocument();
  });

  // Test 9: Renders health benefits section when provided
  it("should render health benefits section when healthBenefits is provided", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("Health Benefits")).toBeInTheDocument();
    expect(
      screen.getByText("Boosts immunity, improves skin health")
    ).toBeInTheDocument();
  });

  it("should not render health benefits section when healthBenefits is not provided", () => {
    const productWithoutBenefits = { ...mockProduct, healthBenefits: null };
    render(<ProductCard product={productWithoutBenefits} />);
    expect(screen.queryByText("Health Benefits")).not.toBeInTheDocument();
  });


  it("should render product image with correct src", () => {
    render(<ProductCard product={mockProduct} />);
    const image = screen.getByAltText("Orange Juice");
    expect(image).toHaveAttribute("src", mockProduct.image);
  });

  
  it("should use placeholder image when image is empty string", () => {
    const productWithEmptyImage = { ...mockProduct, image: "" };
    render(<ProductCard product={productWithEmptyImage} />);
    const image = screen.getByAltText("Orange Juice");
    expect(image).toHaveAttribute(
      "src",
      "https://via.placeholder.com/400x250?text=No+Image+Available"
    );
  });


  it("should use placeholder image when image is whitespace", () => {
    const productWithWhitespaceImage = { ...mockProduct, image: "   " };
    render(<ProductCard product={productWithWhitespaceImage} />);
    const image = screen.getByAltText("Orange Juice");
    expect(image).toHaveAttribute(
      "src",
      "https://via.placeholder.com/400x250?text=No+Image+Available"
    );
  });

 
  it("should use error placeholder when image fails to load", () => {
    render(<ProductCard product={mockProduct} />);
    const image = screen.getByAltText("Orange Juice");

    const errorEvent = new Event("error");
    Object.defineProperty(errorEvent, "target", {
      value: image,
      enumerable: true,
    });
    image.dispatchEvent(errorEvent);

    expect(image).toHaveAttribute(
      "src",
      "https://via.placeholder.com/400x250?text=Image+Error"
    );
  });

  it("should render delete button when onDelete callback is provided", () => {
    const mockOnDelete = vi.fn();
    render(<ProductCard product={mockProduct} onDelete={mockOnDelete} />);
    expect(screen.getByRole("button", { name: /Delete Product/i })).toBeInTheDocument();
  });

  it("should not render delete button when onDelete callback is not provided", () => {
    render(<ProductCard product={mockProduct} />);
    expect(
      screen.queryByRole("button", { name: /Delete Product/i })
    ).not.toBeInTheDocument();
  });

  it("should call onDelete with product id when delete button is clicked", async () => {
    const mockOnDelete = vi.fn();
    const user = userEvent.setup();
    
    render(<ProductCard product={mockProduct} onDelete={mockOnDelete} />);
    
    const deleteButton = screen.getByRole("button", { name: /Delete Product/i });
    await user.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledWith(mockProduct.id);
    expect(mockOnDelete).toHaveBeenCalledTimes(1);
  });

 
  it("should use fallback alt text when product name is missing", () => {
    const productWithoutName = { ...mockProduct, name: null };
    render(<ProductCard product={productWithoutName} />);
    expect(screen.getByAltText("Product")).toBeInTheDocument();
  });

  it("should render card with correct styling classes", () => {
    const { container } = render(<ProductCard product={mockProduct} />);
    const card = container.firstChild;
    
    expect(card).toHaveClass("bg-white");
    expect(card).toHaveClass("rounded-lg");
    expect(card).toHaveClass("shadow-md");
    expect(card).toHaveClass("flex");
    expect(card).toHaveClass("flex-col");
  });

  it("should render multiple ProductCard instances independently", () => {
    const product1 = { ...mockProduct, id: 1, name: "Product 1" };
    const product2 = { ...mockProduct, id: 2, name: "Product 2" };

    const { rerender } = render(<ProductCard product={product1} />);
    expect(screen.getByText("Product 1")).toBeInTheDocument();

    rerender(<ProductCard product={product2} />);
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.queryByText("Product 1")).not.toBeInTheDocument();
  });
});
