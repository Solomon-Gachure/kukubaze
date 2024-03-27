import React, {useContext} from "react";
import { CartContext } from "./cartcontext.jsx";
import { PRODUCTS } from "../data/products";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";
const Cart = () => {
  const { cartItems,removeFromCart } = useContext(CartContext);
  const cartItemsArray = Object.entries(cartItems).map(([itemId, quantity]) => {
    const product = PRODUCTS.find((product) => product.id === Number(itemId));
    return {
      ...product,
      quantity,
    };
  });
  const totalAmount = cartItemsArray.reduce((total, cartItem) => {
    // Convert price string to number by removing 'Ksh.' and parsing it as a float
    const price = cartItem.price ? parseFloat(cartItem.price.replace("Ksh.", "")) : 0;
    return total + price * cartItem.quantity;
  }, 0);


  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div key={cartItems.id} className="flex flex-col gap-10">
          {/**cart details */}
          {cartItemsArray.map((cartItem) => (
            <div key={cartItem.id} className="flex justify-between">
              {/**product section i.e img, name & price */}
              <div className="flex flex-col w-full gap-2">
                <div>
                  <h1 className="md:text-xl">Meal</h1>
                </div>
                <div className="flex gap-24 md:gap-40">
                  {/**product image */}
                  <div>
                    <img src={cartItem.image} alt={cartItem.name} />
                  </div>
                  {/**name & price */}
                  <div>
                    <h1>{cartItem.name}</h1>
                    <h1>{cartItem.price && <p>Ksh.{cartItem.price}</p>}</h1>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 md:gap-20">
                {/**quantity of the products */}
                <div className="flex flex-col gap-2 md:w-[150px]">
                  <div>
                    <h1 className="md:text-xl">Quantity</h1>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="border md:w-[120px] flex items-center gap-2 md:justify-evenly p-2">
                      <FaMinus className="cursor-pointer" />
                      <h1>2</h1>
                      <FaPlus className="cursor-pointer" />
                    </div>
                    <IoTrashOutline
                      onClick={removeFromCart}
                      size={20}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
                {/**amount  */}
                <div className="flex flex-col gap-2">
                  <div>
                    <h1 className="md:text-xl">Amount</h1>
                  </div>
                  <p className="text-center">{cartItem.price}</p>
                </div>
              </div>
            </div>
          ))}

          {/**estimated amount section */}
          <div className="flex justify-end">
            <p className="text-center">
              Total amount <span>{totalAmount}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
