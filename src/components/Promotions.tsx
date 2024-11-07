import React from "react";

const Promotions = () => {
  return (
    <>
      <div className="my-[50px]">
        <div className="text-center mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Our Promotions
          </h1>

          <div className="flex mt-6 justify-center">
            <div className="w-20 h-1 rounded-full bg-myOrange inline-flex" />
          </div>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-4">
        {/* start protion here */}

        {/* 1st child */}
        <div className="hero h-[25rem] promo-1">
          <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-2xl font-bold uppercase">
                get upto <span className="text-myOrange">60% </span> off
              </h1>
              <p className="mb-5">
                Flash sale get upto 60% off on seeson variant.
              </p>
            </div>
          </div>
        </div>

        {/* 2nd child */}
        <div className="hero h-[25rem] promo-2">
          <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-2xl font-bold uppercase">
                get upto <span className="text-myOrange">60% </span> off
              </h1>
              <p className="mb-5">
                Flash sale get upto 50% off on seeson variant.
              </p>
            </div>
          </div>
        </div>
        {/* 3rd child */}
        <div className="hero h-[25rem] promo-3">
          <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-2xl font-bold uppercase">
                get upto <span className="text-myOrange">60% </span> off
              </h1>
              <p className="mb-5">
                Flash sale get upto 40% off on seeson variant.
              </p>
            </div>
          </div>
        </div>
        {/* 4th child */}
        <div className="hero h-[25rem] promo-4">
          <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-2xl font-bold uppercase">
                get upto <span className="text-myOrange">60% </span> off
              </h1>
              <p className="mb-5">
                Flash sale get upto 30% off on seeson variant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promotions;
