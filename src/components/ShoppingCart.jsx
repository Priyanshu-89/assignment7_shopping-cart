import React, { useState } from "react";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import CartSummary from "./CardSummary";

const products = [
  { id: 1, name: "Laptop", price: 999, image:"htthhh" },
  { id: 2, name: "Phone", price: 599 },
  { id: 3, name: "Headphones", price: 199 }
];

function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
          : item
      )
    );
  };

  return (
    <div>
      <ProductList products={products} addToCart={addToCart} />

      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        ))
      )}

      <CartSummary cart={cart} />
    </div>
  );
}

export default ShoppingCart;
