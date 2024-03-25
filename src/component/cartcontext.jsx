import React, { createContext, useState } from "react";
import { PRODUCTS } from "../data/products";
export const CartContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < PRODUCTS.length + 1; i++) {
    cart[[i].id] = 0;
  }
  return cart;
};
const Cartcontext = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addToCart = (itemId) => {
    console.log("Item added to cart:", itemId);
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const contextValue={cartItems, addToCart,removeFromCart}
  return (
  <CartContext.Provider value={contextValue}>
    {props.children}
    </CartContext.Provider>
    );
};

export default Cartcontext;
