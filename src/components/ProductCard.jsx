// Yakin's Business

// import beverages from "../data";
// import ProductList from "./ProductList";

// export default function ProductCard() {
    
// };

import ProductList from "./ProductList"
import { useProductContext } from "../contexts/ProductContext"

function ProductCard({Product}){
    const {addToCart} = useCartContext()

    function onAddToCart(e) {
        e.preventDefault()
        addToCart(product)
    }

    return <div className="product-card">
        <div className="product-image">
            <img src={product.image} alt={product.name}/>
        </div>
        <div className="product-info">
            <h3>{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <button className="add-to-cart-btn" onClick={onAddToCart}>
                Add to Cart
            </button>
        </div>
    </div>
}

export default ProductCard