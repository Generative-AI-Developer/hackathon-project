import React from "react";
import { Button } from "./ui/button";
import { AiFillShopping } from "react-icons/ai";

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-[80vh] custom-img bg-fixed bg-center bg-no-repeat">
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Futuristic <span className="text-myOrange">clothes</span>
            </h1>
            <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight">
              upgrade your wardrobe sleek and stylish apparels and top notch
            </p>
            <Button className="outline outline-offset-2 outline-1 rounded-3xl hover:outline-myOrange duration-300">
              <AiFillShopping /> Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
