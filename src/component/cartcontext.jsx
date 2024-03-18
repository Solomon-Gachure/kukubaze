import React, { createContext } from 'react'

export const cartContext= createContext(null)
const Cartcontext = () => {
  return (
    <cartContext.Provider>
      <div>
        <p className="p-2 font-bold">cartcontext</p>
      </div>
    </cartContext.Provider>
  );
}

export default Cartcontext