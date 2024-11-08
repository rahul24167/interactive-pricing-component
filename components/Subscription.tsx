"use client";

import React, { useState, useEffect, useRef } from "react";

export default function PricingSlider() {
  const [sliderValue, setSliderValue] = useState(100); // The slider value represents a range from 100 to 2000
  const [price, setPrice] = useState(5); // Initial price starts at $5
  const [isYearly, setIsYearly] = useState(false);
  const sliderRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Price should range from $5 to $50, scaled based on the slider value
    const priceRange = 50 - 5; // Price range from $5 to $50
    const priceFactor = (sliderValue - 100) / (2000 - 100); // Normalize the slider value
    let calculatedPrice = 5 + priceFactor * priceRange; // Calculate price between $5 and $50

    // Round the price to an integer
    calculatedPrice = Math.round(calculatedPrice);

    setPrice(isYearly ? calculatedPrice * 0.75 : calculatedPrice); // Apply yearly discount if applicable
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
      <div className="w-[327px] sm:w-[540px] bg-[#FFFFFF] rounded-lg shadow-lg">
        <div className="space-y-8 p-6 pt-8 sm:px-12">
          <div className="text-center">
            <div className="text-sm sm:text-base text-[#848EAD] font-semibold mb-6 sm:flex sm:flex-row sm:justify-between sm:items-center ">
              <div>100K PAGEVIEWS</div>
              <div className="hidden sm:flex text-3xl sm:text-5xl font-bold text-[#293356]">
                ${price}{" "}
                <span className="text-base sm:text-lg text-[#848EAD] font-semibold mt-6">
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
                className="absolute top-[-6px] w-10 h-10 bg-[#10D8C4] rounded-full shadow-md transition-all duration-150 flex items-center justify-center"
                style={{
                  left: `calc(${
                    ((sliderValue - 100) / (2000 - 100)) * 100
                  }% - 12px)`,
                  backgroundColor: "#10D8C4",
                  boxShadow: "0 13px 25px rgba(16, 216, 196, 0.70)",
                }}
              >
                <img src="/img/icon-slider.svg" alt="" />
              </div>
            </div>
            <div className=" sm:hidden mt-8 text-3xl font-bold text-[#293356]">
              ${price}{" "}
              <span className="text-sm text-[#848EAD] font-semibold">
                / month
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-5 pr-0 sm:px-12">
          <span className="text-xs text-[#848EAD] font-normal mx-3">
            Monthly Billing
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <div className="w-[43px] h-[22px] bg-[#CFD8EF] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:bottom-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[18px] after:w-[18px] after:transition-all peer-checked:bg-green-600"></div>
          </label>
          <span className="text-xs text-[#848EAD] font-normal flex flex-row mx-2 p-2 ">
            Yearly Billing
            <div className="text-orange text-xs font-semibold ml-1 p-2 h-[20px] bg-[#FEEDE8] rounded-[10px] flex justify-center items-center align-middle">
              -25% <span className="hidden sm:block">discount </span>
            </div>
          </span>
        </div>
        <div className="mt-5 py-5 border-t border-[#ECF0FB] flex flex-col justify-center items-center sm:flex-row  sm:justify-between sm:items-center px-6 sm:px-12">
          <div className=" flex flex-col sm:justify-start sm:items-start">
            <div className="flex flex-row justify-center text-xs my-2">
              <div className="pt-[6px] mr-4">
                <img
                  className="h-[7px] w-[10px]"
                  src="/img/icon-check.svg"
                  alt=""
                />
              </div>
              <p className="text-[#848EAD] text-bold">Unlimited Websites</p>
            </div>
            <div className="flex flex-row justify-center text-xs my-2">
              <div className="pt-[6px] mr-4">
                <img
                  className="h-[7px] w-[10px]"
                  src="/img/icon-check.svg"
                  alt=""
                />
              </div>
              <p className="text-[#848EAD] text-bold">100% data ownership</p>
            </div>
            <div className="flex flex-row justify-center text-xs my-2">
              <div className="pt-[6px] mr-4">
                <img
                  className="h-[7px] w-[10px]"
                  src="/img/icon-check.svg"
                  alt=""
                />
              </div>
              <p className="text-[#848EAD] text-bold">Email reports</p>
            </div>
          </div>

          <button className="rounded-full bg-cyan h-10 w-44 mt-7 mb-4 text-[#BECDFF] font-bold text-xs flex justify-center items-center transition duration-300">
            Start my trial
          </button>
        </div>
      </div>
    </>
  );
}
