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

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="bg-white dark:bg-black relative">
      <div className="bg-vpblue dark:bg-cyan z-0 h-100 sm:h-112.5 rounded-bl-full"></div>
      <div className="absolute top-5 right-5 flex items-center">
        <span className="text-base text-[#848EAD] font-semibold mx-3">
          Dark Mode
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={!isDark}
            onChange={() => {
              setIsDark((prev) => !prev);
            }}
          />
          <div className="w-[43px] h-[22px] bg-[#CFD8EF] peer-focus:outline-none rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:bottom-[2px] after:left-[3px] after:bg-white after:dark:bg-black after:rounded-full after:h-[18px] after:w-[18px] after:transition-all"></div>
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
