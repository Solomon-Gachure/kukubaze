import React from 'react'
import { data } from "../data/data.js"
import { drinks } from '../data/drinks';
import { FaMinus,FaPlus  } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";
const Cart = () => {
  return (
    <div>
        <div className='flex justify-between'>
            {/**product section i.e img, name & price */}
            <div className='flex flex-col w-full gap-2'>
                <div className='border-b'><h1 className='md:text-xl'>Meal</h1></div>
                <div className='flex gap-24 md:gap-40'>
                    {/**product image */}
                    <div>img</div>
                    {/**name & price */}
                    <div>
                        <h1>name</h1>
                        <h1>price</h1>
                    </div>
                </div>
            </div>
            <div className='flex gap-4 md:gap-20'>
                {/**quantity of the products */}
            <div className='flex flex-col gap-2 md:w-[150px]'>
                <div className='border-b'><h1 className='md:text-xl'>Quantity</h1></div>
                <div className='flex items-center gap-2'>
                    <div className='border w-[120px] flex items-center gap-2 md:justify-evenly p-2'>
                    <FaMinus className='cursor-pointer' />
                    <h1>2</h1>
                    <FaPlus className='cursor-pointer' />
                    </div>
                    <IoTrashOutline size={20} className='cursor-pointer' />
                </div>
            </div>
            {/**amount  */}
            <div className='flex flex-col gap-2'>
                <div className='border-b'><h1 className='md:text-xl'>Amount</h1></div>
                <div>p</div>
            </div>
            </div>
        </div>
        
        </div>
  )
}

export default Cart