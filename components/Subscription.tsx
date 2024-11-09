"use client";

import React, { useState, useEffect, useRef } from "react";

export default function PricingSlider() {
  const [sliderValue, setSliderValue] = useState(913); // The slider value represents a range from 100 to 2000
  const [price, setPrice] = useState(15.98); // Initial price starts at $5
  const [isYearly, setIsYearly] = useState(false);
  const sliderRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Price should range from $5 to $50, scaled based on the slider value
    const priceRange = 32 - 4; // Price range from $5 to 50$
    const priceFactor = (sliderValue - 100) / (2000 - 100); // Normalize the slider value
    let calculatedPrice = 4 + priceFactor * priceRange; // Calculate price between $5 and $50

    const formattedPrice = (isYearly ? calculatedPrice * 0.75 : calculatedPrice).toFixed(2);
    setPrice(parseFloat(formattedPrice));
    updateSliderBackground();
  }, [sliderValue, isYearly]);

  const updateSliderBackground = () => {
    if (sliderRef.current) {
      const percentage = ((sliderValue - 100) / (2000 - 100)) * 100;
      sliderRef.current.style.background = `linear-gradient(to right, #A4F3EB 0%, #A4F3EB ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`;
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
  };

  return (
    <>
      <div className="w-[327px] sm:w-[540px] bg-white dark:bg-dgreenblue rounded-lg shadow-lg ">
        <div className="space-y-8 p-6 pt-8 sm:px-12">
          <div className="text-center">
            <div className="text-sm sm:text-base text-lightgrey font-semibold mb-6 sm:flex sm:flex-row sm:justify-between sm:items-center ">
              <div className="font-extrabold">100K PAGEVIEWS</div>
              <div className="hidden sm:flex text-4xl sm:text-5xl font-bold text-cyan dark:text-vpblue">
                ${price}{" "}
                <span className="text-base sm:text-lg text-lightgrey font-semibold mt-6">
                  /month
                </span>
              </div>
            </div>
            <div className="relative w-full sm:mt-10">
              <input
                ref={sliderRef}
                type="range"
                min="100"
                max="2000"
                value={sliderValue}
                onChange={handleSliderChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div
                className="absolute top-[-6px] w-10 h-10 bg-neongreen rounded-full shadow-md transition-all duration-150 flex items-center justify-center"
                style={{
                  left: `calc(${
                    ((sliderValue - 100) / (2000 - 100)) * 100
                  }% - 12px)`,
                  backgroundColor:'neongreen',
                  boxShadow: "0 13px 25px rgba(16, 216, 196, 0.70)",
                }}
              >
                <img src="/img/icon-slider.svg" alt="" />
              </div>
            </div>
            <div className=" sm:hidden mt-8 text-3xl font-bold text-cyan dark:text-vpblue">
              ${price}{" "}
              <span className="text-sm text-lightgrey font-semibold">
                / month
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-5 pr-0 sm:px-12">
          <span className="text-xs text-lightgrey font-normal mx-3">
            Monthly Billing
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <div className="w-[43px] h-[22px] bg-grayblue peer-focus:outline-none rounded-full peer-checked:bg-neongreen peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:bottom-[2px] after:left-[3px] after:bg-white after:dark:bg-black after:rounded-full after:h-[18px] after:w-[18px] after:transition-all"></div>
          </label>
          <span className="text-xs text-lightgrey font-normal flex flex-row mx-2 p-2 ">
            Yearly Billing
            <div className="text-orange text-xs font-semibold ml-1 p-2 h-[20px] bg-greyred rounded-[10px] flex justify-center items-center align-middle">
              -25% <span className="hidden sm:block">discount </span>
            </div>
          </span>
        </div>
        <div className="mt-5 py-5 border-t border-lightgrey flex flex-col justify-center items-center sm:flex-row  sm:justify-between sm:items-center px-6 sm:px-12">
          <div className=" flex flex-col sm:justify-start sm:items-start">
            <div className="flex flex-row justify-center text-xs my-2">
              <div className="pt-[6px] mr-4">
                <img
                  className="h-[7px] w-[10px]"
                  src="/img/icon-check.svg"
                  alt=""
                />
              </div>
              <p className="text-lightgrey text-bold">Unlimited Websites</p>
            </div>
            <div className="flex flex-row justify-center text-xs my-2">
              <div className="pt-[6px] mr-4">
                <img
                  className="h-[7px] w-[10px]"
                  src="/img/icon-check.svg"
                  alt=""
                />
              </div>
              <p className="text-lightgrey text-bold">100% data ownership</p>
            </div>
            <div className="flex flex-row justify-center text-xs my-2">
              <div className="pt-[6px] mr-4">
                <img
                  className="h-[7px] w-[10px]"
                  src="/img/icon-check.svg"
                  alt=""
                />
              </div>
              <p className="text-lightgrey text-bold">Email reports</p>
            </div>
          </div>

          <button className="rounded-full bg-cyan dark:bg-vpblue h-10 w-44 mt-7 mb-4 text-lightpurple dark:text-cyan font-bold text-xs flex justify-center items-center transition duration-300">
            Start my trial
          </button>
        </div>
      </div>
    </>
  );
}
