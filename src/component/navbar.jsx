import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { LuShoppingBag } from "react-icons/lu";
import { Link } from "react-scroll";
import Cart from "./cart";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClose = () => {
    setNav(false);
  };
  const [cart, setCart] = useState(false);
  const cartOpen = () => {
    setCart(true);
  };
  const cartClose = () => {
    setCart(false);
  };
  return (
    <div className="font-mono  flex items-center justify-center mx-auto p-6 ">
      <div className="flex items-center gap-3 p-2">
        <div className="cursor-pointer" onClick={() => setNav(!nav)}>
          <AiOutlineMenu className="text-white" size={30} />
        </div>
        <h1 className="text-orange-500 font-bold text-2xl lg:text-4xl sm:text-3xl px-2 lg:ml-10 hidden md:flex  ">
          Kuku Jamboo{" "}
        </h1>

        <div className="flex items-center px-2 bg-transparent border border-white/30 text-white rounded-full bg-opacity-20 backdrop-blur-lg backdrop-filter:blur(8px) bg-clip-padding  w-[200px] md:w-[400px] sm:w-[300px] lg:ml-12 ">
          <AiOutlineSearch className="mr-2 bg-transparent " size={25} />
          <input
            className="bg-transparent  focus:outline-none w-full p-2 lg:text-xl"
            type="text"
            placeholder="Enter Your Food"
          />
        </div>
        <button
          onClick={cartOpen}
          className="flex items-center p-2 border-orange-600 text-orange-500 rounded-full lg:ml-10 cursor-pointer hover:bg-orange-500 hover:text-white"
        >
          <LuShoppingBag className="mr-2" size={25} />
          <h1>Cart</h1>
        </button>
      </div>
      {/**cart section */}
      {cart && (
        <div className="bg-stone-950 text-white p-2 md:p-4 h-screen w-full md:w-[900px] fixed right-0 top-0 z-50 gap-4 flex flex-col">
          <div className="border-b p-2 md:p-4">
            <AiOutlineClose
              onClick={cartClose}
              className="cursor-pointer left-0"
            />
            <h1 className="text-center text-lg md:text-xl">
              You have amazing taste buds!
            </h1>
            <h1 className="py-2 text-lg md:text-xl">Your plate</h1>
            <div>
              <Cart />
            </div>
          </div>
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
      )}
      <div
        className={
          nav
            ? "bg-transparent bg-opacity-60 backdrop-blur-2xl backdrop-filter:blur(8px) bg-clip-padding fixed top-0 left-0 w-[350px] h-screen z-50 duration-300"
            : "bg-white fixed top-0 left-[-100%] w-[250px] h-screen z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={handleClose}
          className="absolute text-orange-500 right-4 top-4 cursor-pointer"
          size={30}
        />
        <h1 className="text-2xl p-4 font-bold text-orange-500">Kuku Jamboo</h1>
        <nav>
          <ul className="flex flex-col pt-10 p-4 gap-8 text-2xl md:text-2xl text-orange-500">
            <Link
              activeClass="active"
              to="home"
              smooth={true}
              offset={50}
              duration={500}
            >
              <li
                className="hover:text-cyan-700 z-40 cursor-pointer font-semibold"
                onClick={handleClose}
              >
                Home
              </li>
            </Link>
            <Link
              activeClass="active"
              to="drinks"
              smooth={true}
              offset={50}
              duration={500}
            >
              <li
                className="hover:text-cyan-700 z-40 cursor-pointer font-semibold"
                onClick={handleClose}
              >
                Drinks
              </li>
            </Link>
            <Link
              activeClass="active"
              to="menu"
              smooth={true}
              offset={50}
              duration={500}
            >
              <li
                className="hover:text-cyan-700 z-40 cursor-pointer font-semibold"
                onClick={handleClose}
              >
                Menu
              </li>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              smooth={true}
              offset={50}
              duration={500}
            >
              <li
                className="hover:text-cyan-700 z-40 cursor-pointer font-semibold"
                onClick={handleClose}
              >
                Contact
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
