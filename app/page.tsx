"use client";
import { useEffect, useState } from "react";
import { Intro } from "@/components/Intro";
import Subscription from "@/components/Subscription";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  // Check the user's theme preference on initial load
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDark(true);
    }
  }, []);

  useEffect(()=>{
    if(isDark){
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }else{
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");

    }

  },[isDark])

  return (
    <div className="bg-[#FFFFFF] dark:bg-cyan relative">
      <div className="bg-[#F1F5FE] z-0 h-100 sm:h-112.5 rounded-bl-full"></div>

      <div className="absolute top-5 right-5 flex items-center">
        <span className="text-base text-[#848EAD] font-semibold mx-3">
          Dark Mode
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isDark}
            onChange={()=>{setIsDark((prev) => !prev)}}
          />
          <div className="w-[43px] h-[22px] bg-[#CFD8EF] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:bottom-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[18px] after:w-[18px] after:transition-all peer-checked:bg-green-600"></div>
        </label>
      </div>

      <div className="-translate-y-100 z-10 bg-transparent flex flex-col items-center justify-center">
        <div className="-translate-y-5">
          <Intro />
        </div>
        <div className="translate-y-5">
          <Subscription />
        </div>
      </div>
    </div>
  );
}
