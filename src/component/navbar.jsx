import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiFillTag, AiOutlineClose } from "react-icons/ai"
import { BsFillCartFill } from 'react-icons/bs'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { TbTruckDelivery } from "react-icons/tb"
import { MdFavorite, MdHelp } from 'react-icons/md'
const Navbar = () => {
    const [nav,setNav]=useState(false)
  return (
    <div className='max-w-[1640px] flex items-center justify-between mx-auto p-4 '>
        <div className='flex items-center'>
            <div className='cursor-pointer' onClick={()=>setNav(!nav)}>
                <AiOutlineMenu size={30}/>
            </div>
            <h1 className='text-orange-500 font-bold text-2xl lg:text-4xl sm:text-3xl px-2 lg:ml-10 '>Kuku Jamboo </h1>
              <div className='rounded-full h-full w-10 hidden lg:flex '>
                  <img className=' rounded-full' src='https://t4.ftcdn.net/jpg/06/35/42/23/240_F_635422353_itHNBmILkvoY339f8vcxfF6WYb6uI90O.jpg' alt='chicken' />
              </div>
                  <div className='flex items-center px-2 bg-gray-200 rounded-full  w-[200px] sm:w-[400px] lg:w-[500px] lg:ml-12 '>
                    <AiOutlineSearch className='mr-2 ' size={20}/>
                    <input className='bg-transparent  focus:outline-none w-full p-2' type='text' placeholder='Enter Your Food'/>
                  </div>
                  <button className='hidden md:flex items-center p-4 border-orange-600 py-2 text-orange-500 rounded-full lg:ml-10 cursor-pointer hover:bg-orange-500 hover:text-white'>
                  <BsFillCartFill className='mr-2' size={20}/>
                    <h1>Cart</h1>
                  </button>
        </div>
          <div className={nav ? 'bg-white fixed top-0 left-0 w-[250px] h-screen z-10 duration-300' : 'bg-white fixed top-0 left-[-100%] w-[250px] h-screen z-10 duration-300'}>
              <AiOutlineClose
                  onClick={() => setNav(!nav)}
                  className='absolute right-4 top-4 cursor-pointer' size={30} />
              <h1 className='text-2xl p-4 font-bold text-orange-500'>Kuku Jamboo</h1>
              <nav>
                  <ul className='flex flex-col p-4 text-gray-800'>
                      <li className='text-xl py-4 flex'><TbTruckDelivery className='mr-2' size={25} />Delivery</li>
                      <li className='text-xl py-4 flex'><MdFavorite className='mr-2' size={25} />Favorites</li>
                      <li className='text-xl py-4 flex'><FaWallet className='mr-2' size={25} />Wallet</li>
                      <li className='text-xl py-4 flex'><MdHelp className='mr-2' size={25} />Help</li>
                      <li className='text-xl py-4 flex'><AiFillTag className='mr-2' size={25} />Promos</li>
                      <li className='text-xl py-4 flex'><FaUserFriends className='mr-2' size={25} />Location</li>

                  </ul>
              </nav>
          </div>
    </div>
  )
}

export default Navbar