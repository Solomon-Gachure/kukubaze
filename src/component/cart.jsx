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
            <div key={cartItem.id}>
              {/**product section i.e img, name & price */}
              <table className="w-full gap-2">
                <thead>
                  <tbody className="flex justify-between gap-2">
                    <tbody>
                      <th>Meal</th>
                      <tr>
                        {/**image section */}
                        <td>
                          <div className="w-[60px] h-[70px] md:w-[200px] md:h-[150px]">
                            <img
                              src={cartItem.image}
                              alt={cartItem.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </td>
                        {/**details section; type of meal + price */}
                        <td>
                          <div className="ml-4">
                            <h1>{cartItem.name}</h1>
                            <h1>{cartItem.price && <p>{cartItem.price}</p>}</h1>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <th>Quantity</th>
                      <tr>
                        {/**quantity section */}
                        <td>
                          <div className="flex gap-4 md:gap-20">
                            {/**quantity of the products */}
                            <div className="flex flex-col gap-2 md:w-[150px]">
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
                          </div>
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <th>Amount</th>
                      <tr>
                        {/**total amount section */}
                        <td>
                          <div className="flex flex-col gap-2">
                            <p className="text-center">{cartItem.price}</p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </tbody>
                </thead>
              </table>
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
      <div className="flex flex-col md:flex-row p-2 gap-4">
        <div className="flex flex-col gap-2">
          <p>Additional Information</p>
          <textarea
            name=""
            id=""
            cols="40"
            rows="5"
            className="bg-transparent border outline-none p-2"
          ></textarea>
        </div>
        <div className="flex flex-col justify-center">
          <p>
            Tax & Shipping fee inclusive in the total amount.
            <br />
            Proceed to checkout.
          </p>
          <div className="py-2">
            <button className="border w-full rounded-none bg-orange-500 text-xl font-bold p-2">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
