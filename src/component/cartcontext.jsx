import React, { createContext, useState } from 'react'
import {PRODUCTS} from '../data/products'
export const cartContext= createContext(null);
const getDefaultCart=()=>{
  let cart={};
  for(let i=1; i<PRODUCTS.length +1; i++){
    cart[i]=0;
  }
}
const Cartcontext = (props) => {
  const [cartItems, setCartItems] = useState()
  const addToCart=(itemId)=>{
    setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}));
  };
  const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev, [itemId]: prev[itemId] - 1}));
  };
  return (
    <cartContext.Provider>
      {props.children}
    </cartContext.Provider>
  );
}

export default Cartcontext