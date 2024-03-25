import React, { createContext, useState } from 'react'
import {PRODUCTS} from '../data/products'
export const cartContext= createContext(null)
const Cartcontext = (props) => {
  const [cartItems, setCartItems] = useState()
  return (
    <cartContext.Provider>
      {props.children}
    </cartContext.Provider>
  );
}

export default Cartcontext