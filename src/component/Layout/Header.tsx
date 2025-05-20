import React, { useState } from "react";
import { RxAvatar, RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoMdPhotos } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
const navigation = [
  { name: "Menu", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

export default function Header({setSideBar ,sideBar}) {

  return (
    <header className="bg-white shadow-md h-[50px]  ">
      <div className=" flex justify-between items-center px-5 h-full">
        <div onClick={()=>setSideBar(!sideBar)} className="cursor-pointer">
         {
          sideBar ? <RxCross1 size={25} color="black"/>: <GiHamburgerMenu size={25} color="black"  />
         }
        </div>

        <div className="relative group inline-block">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 496 512"
            className="w-[40px] h-[40px] rounded-full text-black cursor-pointer"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
          </svg>

          <div className="absolute top-12 right-0 bg-white shadow-md rounded-sm overflow-hidden  w-48 z-10 scale-0 group-hover:scale-100 transition-transform duration-300 origin-top-right">
            <a
              className="block px-4 py-2 text-black hover:bg-gray-700 hover:text-white"
              href="/login"
            >
              Login
            </a>
          </div>
        </div>
      </div>

    </header>
  );
}
