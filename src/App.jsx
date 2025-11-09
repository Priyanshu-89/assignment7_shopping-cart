import React, { useState } from "react";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsCartCheck } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const products = [
    { id: 1, name: "Laptop", price: 999, image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=932" },
    { id: 2, name: "Phone", price: 599, image:"https://images.unsplash.com/photo-1507955987999-df4864ee80d4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171" },
    { id: 3, name: "Headphones", price: 199, image:"https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000" },
  ];

  // Add item to cart with toast
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 1500,
    });
  };

  //  Remove item with toast
  const handleRemoveFromCart = (id) => {
    const removedItem = cart.find((item) => item.id === id);
    setCart(cart.filter((item) => item.id !== id));
    toast.error(`${removedItem.name} removed from cart!`, {
      position: "top-right",
      autoClose: 1500,
    });
  };

  return (
    <div className="app">
      <header>
        <h2><BsCartCheck /> Shopping Cart</h2>
        <button className="add-btn" onClick={() => setShowCart(!showCart)}>
          {showCart ?(<><FaArrowLeftLong /> Back to Shop</>) :( <> <BsCartCheck />({cart.length})</>)}
        </button>
      </header>

      {!showCart ? (
        <ProductList products={products} onAdd={handleAddToCart} />
      ) : (
        <CartPage cart={cart} onRemove={handleRemoveFromCart} />
      )}

      {/* Toastify Container */}
      <ToastContainer />
    </div>
  );
}

export default App;
