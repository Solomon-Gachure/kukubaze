import React from "react";
import Navbar from "./navbar";
import { GiChickenOven, GiFullPizza } from "react-icons/gi";
import { FaCocktail } from "react-icons/fa";

const Hero = () => {
  return (
    <div name="home" className=" font-mono h-full bg-black pb-2">
      <div className="relative h-screen "></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/professional-chef-prepares-vegetable-food-frying-pan-with-flame-fire_192985-3003.jpg?w=996)",
        }}
      >
        <div className="flex flex-col md:flex-row  justify-center items-center gap-4 pt-96">
          <div className="border border-white/30 rounded-sm w-[350px] md:w-[250px] md:h-[200px] p-1 text-white z-50 bg-opacity-20 backdrop-blur-sm backdrop-filter:blur(8px) bg-clip-padding">
            <div className="flex justify-center p-2">
              <GiChickenOven size={40} className="text-orange-500 font-bold" />
            </div>
            <h1 className="text-center text-xl font-semibold pb-2">
              Best Chicken
            </h1>
            <p className="text-center font-semibold">
              We boast of taste rich chef hands that make the best chicken meals
              in town
            </p>
          </div>
          <div className="border border-white/30 rounded-sm w-[350px] md:w-[250px] md:h-[200px] p-1 text-white z-50 bg-opacity-20 backdrop-blur-sm backdrop-filter:blur(8px) bg-clip-padding">
            <div className="flex justify-center p-2">
              <FaCocktail size={40} className="text-orange-500 font-bold" />
            </div>
            <h1 className="text-center text-xl font-semibold pb-2">
              Elegant Cocktails
            </h1>
            <p className="text-center font-semibold">
              Our mixologist have a rich drinks taste and blend some of the best
              drinks for your taste buds
            </p>
          </div>
          <div className="border border-white/30 rounded-sm w-[350px] md:w-[250px] md:h-[200px] p-1 text-white z-50 bg-opacity-20 backdrop-blur-sm backdrop-filter:blur(8px) bg-clip-padding">
            <div className="flex justify-center p-2">
              <GiFullPizza size={40} className="text-orange-500 font-bold" />
            </div>
            <h1 className="text-center text-xl font-semibold pb-2">
              Heavenly pizza
            </h1>
            <p className="text-center font-semibold">
              Our pizzaiolo crafts and creates mouth watering pizza to suite
              your pizza hunger
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0">
        <Navbar />
      </div>
    </div>
  );
};

export default Hero;
