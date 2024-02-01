import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiFillTag, AiOutlineClose } from "react-icons/ai"
import { BsFillCartFill } from 'react-icons/bs'
import { Link } from 'react-scroll';
const Navbar = () => {
    const [nav,setNav]=useState(false)
  return (
    <div className='font-mono max-w-[1640px] flex items-center justify-between mx-auto p-4 '>
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
                  <ul className='flex flex-col pt-10 p-4 gap-8 text-2xl md:text-4xl text-orange-500'>
                     <Link activeClass="active" to="home"  smooth={true} offset={50} duration={500} >
                        <li className='hover:text-cyan-700 z-40 cursor-pointer font-semibold'>Home</li>
                    </Link>
                    <Link activeClass="active" to="drinks"  smooth={true} offset={50} duration={500} >
                        <li className='hover:text-cyan-700 z-40 cursor-pointer font-semibold'>Drinks</li>
                    </Link>
                    <Link activeClass="active" to="menu"  smooth={true} offset={50} duration={500} >
                        <li className='hover:text-cyan-700 z-40 cursor-pointer font-semibold'>Menu</li>
                    </Link>
                    <Link activeClass="active" to="contact"  smooth={true} offset={50} duration={500} >
                        <li className='hover:text-cyan-700 z-40 cursor-pointer font-semibold'>Contact</li>
                    </Link>

                  </ul>
              </nav>
          </div>
    </div>
  )
}

export default Navbar