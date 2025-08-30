"use client";

import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

export default function InfoBar() {
  const [showInfo, setShowInfo] = useState(true);
  return (
    <div
      className={`secondaryColorBg h-28 md:h-20 lg:h-12 flex flex-col md:flex-row items-center justify-between px-4 lg:px-8 font-medium transition-all duration-500 overflow-hidden ${
        showInfo ? "max-h-28 lg:max-h-12 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <MdClose
        size={18}
        className="cursor-pointer self-end mt- block md:hidden mt-2"
        onClick={() => setShowInfo(false)}
      />
      {/* info text */}
      <div className="flex-1 flex justify-center items-center space-x-2 text-center flex-col md:flex-row">
        <span className="text-[14px] infoColor">
          New: Your personal diet buddy is here! Track meals, calories, and
          progress in seconds.
        </span>
        <Link
          href=""
          className="flex items-center space-x-1 cursor-pointer infoColor"
        >
          <span className="text-[14px] font-semibold underline underline-offset-4">
            Learn more
          </span>
          <FaArrowRight size={14} />
        </Link>
      </div>

      {/* close button */}
      <MdClose
        size={18}
        className="cursor-pointer ml-4 hidden md:block"
        onClick={() => setShowInfo(false)}
      />
    </div>
  );
}
