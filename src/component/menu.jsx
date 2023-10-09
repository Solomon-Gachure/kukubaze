import React, { useState } from 'react'
import { data } from "../data/data.js"
const Menu = () => {
    const [foods, setFoods] = useState(data);
    const filterType = ((category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        );
    });
    const filterPrice = ((price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        );
    });
    return (
        <div className='max-w-[1640px] m-auto py-2 px-4'>
            <h1 className='text-2xl md:text-4xl text-orange-500 font-bold flex justify-center'>Our Top Rated Menu</h1>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div>
                    <p className='text-xl'>Filter Type:</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={()=>setFoods(data)} className='m-1 text-orange-500 border-orange-500 font-bold hover:text-white hover:bg-orange-500'>All</button>
                        <button onClick={()=>filterType('chicken')} className='m-1 text-orange-500 border-orange-500 font-bold hover:text-white hover:bg-orange-500'>Chicken</button>
                        <button onClick={()=>filterType("burger")} className='m-1 text-orange-500 border-orange-500 font-bold hover:text-white hover:bg-orange-500'>Burgers</button>
                        <button onClick={()=>filterType("salad")} className='m-1 text-orange-500 border-orange-500 font-bold hover:text-white hover:bg-orange-500'>Salad</button>
                        <button onClick={()=>filterType("pizza")} className='m-1 text-orange-500 border-orange-500 font-bold hover:text-white hover:bg-orange-500'>Pizza</button>

                    </div>
                </div>
                <div>
                    <div>
                        <p className='text-xl'>Filter Prices:</p>
                        <div>
                            <button onClick={()=> filterPrice("$")} className='m-1 text-orange-500 border-orange-500 font-bold hover:text-white hover:bg-orange-500'>$</button>
                            <button onClick={()=> filterPrice("$$")} className='m-1 text-orange-500 border-orange-500 font-bold hover:text-white hover:bg-orange-500'>$$</button>
                            <button onClick={()=> filterPrice("$$$")} className='m-1 text-orange-500 border-orange-500 font-bold hover:text-white hover:bg-orange-500'>$$$</button>
                            <button onClick={()=> filterPrice("$$$$")} className='m-1 text-orange-500 border-orange-500 font-bold hover:text-white hover:bg-orange-500'>$$$$</button>

                        </div>
                    </div>
                </div>
                
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {foods.map((items, index) => (
                    <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
                        <img src={items.image} alt={items.name} className='w-full h-[200px] object-cover rounded-t-lg' />
                        <div className='px-2 py-2'>
                            <p className='font-bold'>{items.name}</p>
                            <p>
                                <span className='font-bold text-green-500'>{items.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu