import React, { useEffect, useState } from "react";

import StudentReportCard from "./component/pages/StudentReportCard";
import Header from "./component/Layout/Header";

import SideBarComponent from "./component/Layout/SideBar";
import Home from "./component/pages/Home";
import About from "./component/pages/MyResult";
import Fhotos from "./component/pages/Attendance";
import Video from "./component/pages/Video";
import Contact from "./component/pages/Contact";
import RegistrationMejban from "./component/pages/AdminResult";
import BeComeAMember from "./component/pages/TransferCertificate";
import Login from "./component/pages/Login";
import StudentMarkSheetFillter from "./component/pages/StudentMarkSheetFillter";
import { Route, Routes } from "react-router-dom";
import StudentIdCard from "./component/pages/StudentIdCard";
import Profile from "./component/pages/Profile";
import ProtectedRoute from "./component/Protected/ProtectedRoute";
import Card from "./component/pages/Card";
import NewCart from "./component/pages/NewCart";
import Attendance from "./component/pages/Attendance";
import MyResult from "./component/pages/MyResult";
import InstituteSettings from "./component/settings/InstituteSettings";
import TransferCertificate from "./component/pages/TransferCertificate";
import AdminResult from "./component/pages/AdminResult";

export const baseURL = "https://creativeexam.com";

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
            <Route path="/my-result" element={<MyResult />} />
            <Route path="/attendance" element={<Attendance />} />
            {/* <Route path="/videos" element={<Video />} />
            <Route path="/contact" element={<Contact />} /> */}
            <Route
              path="/registration"
              element={
                <ProtectedRoute>
                  <AdminResult />
                </ProtectedRoute>
              }
            />
            <Route
              path="/transfer-certificate"
              element={
                <ProtectedRoute>
                  <TransferCertificate />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student-report"
              element={
                <ProtectedRoute>
                  <StudentReportCard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/mark-sheet"
              element={
                <ProtectedRoute>
                  <StudentMarkSheetFillter />
                </ProtectedRoute>
              }
            />
            <Route
              path="/report"
              element={
                <ProtectedRoute>
                  <StudentReportCard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/teacher-id-cart"
              element={
                <ProtectedRoute>
                  <Card />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <InstituteSettings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/student-id-card" element={
               <ProtectedRoute>
                    <StudentIdCard />
               </ProtectedRoute>
          
              
              } />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
