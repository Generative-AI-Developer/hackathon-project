import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Our Services
            </h1>

            <div className="flex mt-6 justify-center">
              <div className="w-20 h-1 rounded-full bg-myOrange inline-flex" />
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 mx-auto flex flex-col text-center items-center">
              <Image
                alt="Delivery Image"
                width={100}
                height={100}
                src={"/pictures/delivery-van.png"}
              />
              <div className="flex-grow">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Money Back Guarantee
                </h2>
                <p className="leading-relaxed text-base">
                  Get money back on damage projucts{" "}
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 mx-auto flex flex-col text-center items-center">
              <Image
                alt="moneyback"
                width={100}
                height={100}
                src={"/pictures/moneyback.png"}
              />
              <div className="flex-grow">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Free Delivery
                </h2>
                <p className="leading-relaxed text-base">
                  Free Delivery on more than $100
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 mx-auto flex flex-col text-center items-center">
              <Image
                alt="24/7-img"
                width={100}
                height={100}
                src={"/pictures/24-7.png"}
              />
              <div className="flex-grow">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  24/7 Customer Service
                </h2>
                <p className="leading-relaxed text-base">
                  For Queries and Question feel free to contact
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
