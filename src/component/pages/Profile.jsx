import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const navigate=useNavigate()
    const LogOUt = () => {
    localStorage.setItem("access_token", " ");
    toast.success("Log-Out Successfully");
     navigate("/")
     window.location.reload()
  };

  

  useEffect(() => {
    // LocalStorage থেকে ইউজার ডাটা ও টোকেন নিয়ে আসা
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  if (!userData) {
    return <div className="text-center mt-10 text-gray-500">Loading profile...</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-md rounded-xl p-6">
      <div className="flex items-center justify-center">
        <img
          src={
            userData.image ||
            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-blue-500 shadow"
        />
      </div>
      <h2 className="text-2xl font-bold text-center mt-4 text-[#075C98] capitalize">
        {userData.name}
      </h2>
      <p className="text-center text-sm text-gray-600">{userData.email}</p>

      <div className="mt-6 space-y-3">
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Mobile:</span>
          <span className="text-gray-800">{userData.mobile}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Role:</span>
          <span className="capitalize text-gray-800">{userData.role}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Login ID:</span>
          <span className="text-gray-800">{userData.login_id}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Admin ID:</span>
          <span className="text-gray-800">{userData.admin_id}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">SMS Balance:</span>
          <span className="text-gray-800">{userData.sms_balance}</span>
        </div>
      </div>

          <a
              className="block cursor-pointer px-4 py-2 button_primary mt-5 w-fit  text-black hover:text-white"
              onClick={() => LogOUt()}
            >
              Log out{" "}
            </a>
    </div>
  );
};

export default Profile;
