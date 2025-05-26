import React, { useEffect, useState } from "react";

import StudentReportCard from "./component/pages/StudentReportCard";
import Header from "./component/Layout/Header";

import SideBarComponent from "./component/Layout/SideBar";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Fhotos from "./component/pages/Fhotos";
import Video from "./component/pages/Video";
import Contact from "./component/pages/Contact";
import RegistrationMejban from "./component/pages/RegistrationMejban";
import BeComeAMember from "./component/pages/BeComeAMember";
import Login from "./component/pages/Login";
import StudentMarkSheetFillter from "./component/pages/StudentMarkSheetFillter";
import { Route, Routes } from "react-router-dom";
import StudentIdCard from "./component/pages/StudentIdCard";
import Profile from "./component/pages/Profile";
import ProtectedRoute from "./component/Protected/ProtectedRoute";
import Card from "./component/pages/Card";
import NewCart from "./component/pages/NewCart";

export default function App() {

  const [sideBar, setSideBar] = useState(true);
  const [active, setActive] = useState();

  useEffect(() => {
    // Function to check screen width and update sidebar state
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSideBar(true); 
      } else {
        setSideBar(false); 
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="bg-[#F3F4F6]">
      <div className="sticky top-0 z-50">
        <Header setSideBar={setSideBar} sideBar={sideBar} />
      </div>
      <div className="">
        {/* Sidebar */}
        <SideBarComponent
          sideBar={sideBar}
          setSideBar={setSideBar}
          active={active}
          setActive={setActive}
        />
        <div className="md:ml-[280px] min-h-[95vh] p-3 mt-[5px] ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/fhotos" element={<Fhotos />} />
            <Route path="/videos" element={<Video />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/registration" element={<RegistrationMejban />} />
            <Route path="/member" element={<BeComeAMember />} />
            <Route path="/student-report" element={<StudentReportCard />} />
            <Route path="/mark-sheet" element={<StudentMarkSheetFillter />} />
            <Route path="/report" element={<StudentReportCard />} />
            <Route path="/card" element={<Card />} />
            <Route path="/cart-2" element={<NewCart />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/student-id-card" element={<StudentIdCard />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
