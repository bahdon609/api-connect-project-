import React, { useState } from "react";
import { RxAvatar, RxCross1, RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoMdPhotos } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
export default function SideBarComponent({active,setActive ,sideBar,setSideBar}) {
  return (
    <AnimatePresence>
    {sideBar && (
      <motion.aside
      
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "tween", duration: 0.3 }}

      className={  `fixed md:block top-0 left-0 h-screen w-[280px] bg-white z-50`} >
        <div className="w-full p-4">
          <div className="w-full relative cursor-pointer ">
            <img
              src="https://gcauk.co.uk/assets/Logo-Bz2Y_Asy.png"
              className="mx-auto  mb-[18px] rounded-full h-20 object-contain "
              alt=""
            />
            <div className="absolute top-0 right-0 cursor-pointer md:hidden">
                <RxCross2 size={25} color="black" onClick={()=>setSideBar(!sideBar)}/>
            </div>
          </div>

          <p className="text-gray-400 text-sm font-semibold my-3">Overview</p>

          <Link
          to="/"
            onClick={() => setActive(0)}
            className={`${
              active === 0 ? "sidebar-active-bg" : "custom-button-hover"
            } custom-button`}
          >
            <div className="h-[30px] w-[30px] sidebar-active-bg flex justify-center items-center rounded-md">
              <FaPeopleGroup size={20} />
            </div>
            <h1
              className={`${
                active === 0 ? "text-white " : "text-black "
              } font-semibold `}
            >
              Home
            </h1>
          </Link>

          <Link to="/about"
            onClick={() => setActive(1)}
            className={`${
              active === 1 ? "sidebar-active-bg" : "custom-button-hover"
            } custom-button`}
          >
            <div className="h-[30px] w-[30px] sidebar-active-bg flex justify-center items-center rounded-md">
              <IoNewspaperOutline size={20} />
            </div>

            <h1
              className={`${
                active === 1 ? "text-white " : "text-black"
              } font-semibold `}
            >
              About
            </h1>
          </Link>

          <Link to="/fhotos"
            onClick={() => setActive(3)}
            className={`${
              active === 3 ? "sidebar-active-bg" : "custom-button-hover"
            } custom-button`}
          >
            <div className="h-[30px] w-[30px] sidebar-active-bg flex justify-center items-center rounded-md">
              <IoMdPhotos size={20} />
            </div>

            <h1
              className={`${
                active === 3 ? "text-white " : "text-black"
              } font-semibold `}
            >
              Photos
            </h1>
          </Link>

          <Link to="/videos"
            onClick={() => setActive(4)}
            className={`${
              active === 4 ? "sidebar-active-bg" : "custom-button-hover"
            } custom-button`}
          >
            <div className="h-[30px] w-[30px] sidebar-active-bg flex justify-center items-center rounded-md">
              <IoMdPhotos size={20} />
            </div>

            <h1
              className={`${
                active === 4 ? "text-white " : "text-black"
              } font-semibold `}
            >
              Videos
            </h1>
          </Link>


          <Link to="/contact"
            onClick={() => setActive(5)}
            className={`${
              active === 5 ? "sidebar-active-bg" : "custom-button-hover"
            } custom-button`}
          >
            <div className="h-[30px] w-[30px] sidebar-active-bg flex justify-center items-center rounded-md">
              <IoMdPhotos size={20} />
            </div>

            <h1
              className={`${
                active === 5 ? "text-white " : "text-black"
              } font-semibold `}
            >
              Contact
            </h1>
          </Link>

          <p className="text-gray-400 text-sm font-semibold my-3">Registration </p>

          <Link to="/registration"
            onClick={() => setActive(6)}
            className={`${
              active === 6 ? "sidebar-active-bg" : "custom-button-hover"
            } custom-button`}
          >
            <div className="h-[30px] w-[30px] sidebar-active-bg flex justify-center items-center rounded-md">
              <IoMdPhotos size={20} />
            </div>

            <h1
              className={`${
                active === 6 ? "text-white " : "text-black"
              } font-semibold `}
            >
              Registration for Mejban
            </h1>
          </Link>

          <Link to="/member"
            onClick={() => setActive(7)}
            className={`${
              active === 7 ? "sidebar-active-bg" : "custom-button-hover"
            } custom-button`}
          >
            <div className="h-[30px] w-[30px] sidebar-active-bg flex justify-center items-center rounded-md">
              <IoMdPhotos size={20} />
            </div>

            <h1
              className={`${
                active === 7 ? "text-white " : "text-black"
              } font-semibold `}
            >
              Become a Member
            </h1>
          </Link>

          {/* <div
            onClick={() => setActive(10)}
            className={`${
              active === 10 ? "sidebar-active-bg" : "custom-button-hover"
            } custom-button`}
          >
            <div className="h-[30px] w-[30px] sidebar-active-bg flex justify-center items-center rounded-md">
              <IoMdPhotos size={20} />
            </div>

            <h1
              className={`${
                active === 10 ? "text-white " : "text-black"
              } font-semibold `}
            >
            Student Report
            </h1>
          </div> */}




          <Link to="/mark-sheet"
            onClick={() => setActive(11)}
            className={`${
              active === 11 ? "sidebar-active-bg" : "custom-button-hover"
            } custom-button`}
          >
            <div className="h-[30px] w-[30px] sidebar-active-bg flex justify-center items-center rounded-md">
              <IoMdPhotos size={20} />
            </div>

            <h1
              className={`${
                active === 11 ? "text-white " : "text-black"
              } font-semibold `}
            >
              Student Marksheet
            </h1>
          </Link>


            <Link to="/student-id-card"
            onClick={() => setActive(12)}
            className={`${
              active === 12 ? "sidebar-active-bg" : "custom-button-hover"
            } custom-button`}
          >
            <div className="h-[30px] w-[30px] sidebar-active-bg flex justify-center items-center rounded-md">
              <IoMdPhotos size={20} />
            </div>

            <h1
              className={`${
                active === 12 ? "text-white " : "text-black"
              } font-semibold `}
            >
             Genarate Id Card
            </h1>
          </Link>

          <div
            onClick={() => setActive(8)}
            className={`${
              active === 8 ? "sidebar-active-bg" : "custom-button-hover"
            } custom-button`}
          >
            <div className="h-[30px] w-[30px] sidebar-active-bg flex justify-center items-center rounded-md">
              <IoMdPhotos size={20} />
            </div>

            <h1
              className={`${
                active === 8 ? "text-white " : "text-black"
              } font-semibold `}
            >
              Student seat plan
            </h1>
          </div>
        </div>
      </motion.aside>
    )}
    </AnimatePresence>
  )
}
