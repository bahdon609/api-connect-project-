import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseURL } from "../../App";

export default function Login() {
  const [login_id, setLogin_id] = useState("202510001");
  const [role, setRole] = useState("admin");
  const [password, setPassword] = useState("admin#123");
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    const data = {
      login_id,
      role,
      password,
    };

    try {
      const response = await axios.post(
        `${baseURL}/api/login`,

        data,

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Login Success:", response.data);
     toast.success("Login Successfully")

      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("userData", JSON.stringify(response.data.userData));

      navigate('/')
   
  window.location.reload();


    } catch (error) {
      if (error.response) {
        console.error("Login Failed:", error.response.data);
        alert(error.response.data.message);
      } else {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center w-full px-4">
      <div className="w-full">
        <div className="relative w-full shadow-xl bg-white rounded-xl">
          <div className="flex justify-center absolute -top-16 w-full">
            <img
              src="https://gcauk.co.uk/assets/Logo-Bz2Y_Asy.png"
              alt="Logo"
              className="w-[120px] h-[120px] rounded-full border-4 border-white shadow-md object-cover"
            />
          </div>

          <h1 className="text-2xl text-center pt-16 pb-4 rounded-t-xl bg-gray-200 text-blue-700 lg:text-3xl font-semibold">
            Welcome to <br /> Greater Chattogram Association UK
          </h1>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">

                {/* Role */}
            <div className="form-control">
              <label
                htmlFor="role"
                className="block mb-1 font-semibold text-black"
              >
                Role *
              </label>
              <select
                id="role"
                name="role"
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full h-12 px-4 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              >
                <option value="">Select your role</option>
                <option value="admin">Admin</option>
                {/* Add more roles as needed */}
              </select>
            </div>
            <div className="form-control">
              <label
                htmlFor="phone"
                className="block mb-1 font-semibold text-black"
              >
                Login id *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={login_id}
                onChange={(e) => setLogin_id(e.target.value)}
                placeholder="Enter your phone number"
                autoComplete="on"
                className="w-full h-12 px-4 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              />
            </div>

        

            {/* Password */}
            <div className="form-control">
              <label
                htmlFor="password"
                className="block mb-1 font-semibold text-black"
              >
                Password *
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete="on"
                className="w-full h-12 px-4 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-4">
              <button
                type="submit"
                className="w-full h-12 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition "
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
