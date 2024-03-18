import React from "react";
import { products } from "../data/products.js";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";
const Cart = () => {
  return (
    <div>
      <div className="flex flex-col gap-10">
        {/**cart details */}
        <div className="flex justify-between">
          {/**product section i.e img, name & price */}
          <div className="flex flex-col w-full gap-2">
            <div>
              <h1 className="md:text-xl">Meal</h1>
            </div>
            <div className="flex gap-24 md:gap-40">
              {/**product image */}
              <div>img</div>
              {/**name & price */}
              <div>
                <h1>name</h1>
                <h1>price</h1>
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
                <IoTrashOutline size={20} className="cursor-pointer" />
              </div>
            </div>
            {/**amount  */}
            <div className="flex flex-col gap-2">
              <div>
                <h1 className="md:text-xl">Amount</h1>
              </div>
              <p className="text-center">ksh200</p>
            </div>
          </div>
        </div>
        {/**estimated amount section */}
        <div className="flex justify-end">
          <p className="text-center">
            Total amount <span>ksh 400</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
