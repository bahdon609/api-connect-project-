import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { baseURL } from "../../App";
import { useNavigate } from "react-router-dom";
import { GetAllStudentIdCartPrint } from "../../ContextApi/ContextProvider";

export default function StudentIdCard() {
  const {setgetAllStudentDataPrint}=useContext(GetAllStudentIdCartPrint)
  const [studentIdCard, setStudentIdCard] = useState([]);
  const [sessionYear, setSessionYear] = useState([]);
  const [sectionName, setSectionName] = useState([]);
const Navigator=useNavigate()
  const [formData, setFormData] = useState({
    session_year_id: "",
    classname_id: "",
    section_id: "",
  });

  console.log(formData);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      alert("Please Login now");
    }

    const FetchedSessionData = async () => {
      try {
        const response = await axios.get(
          `${baseURL}/api/student-id-card`,

          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // console.log("Working:", response);
        setSessionYear(response.data);
      } catch (err) {
        console.error("");
      }
    };

    FetchedSessionData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("access_token");
    if (!token) {
      alert("Please Login now");
    }

    try {
      const response = await axios.post(
        `${baseURL}/api/class-wise-section`,
        { classname_id: formData.classname_id },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Working badhon:", response.data);
      setSectionName(response.data.data);
      setFormData((pre)=>({...pre, section_id:""}))
    } catch (err) {
      //   console.error("Error:", err);
    }
  };

  const handleSubmitStudentIdCart = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("access_token");
    if (!token) {
      alert("Please Login now");
    }

    try {
      const response = await axios.post(
        `${baseURL}/api/student-id-card-generate`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Working badhon:", response.data);
      const studentsObj = response.data.data.students;
      const studentsArray = Object.values(studentsObj);

      setStudentIdCard(studentsArray);
      setgetAllStudentDataPrint(studentsArray)
       Navigator("/all-student-id-cart-print")
    } catch (err) {
      console.error("Error:", err);
    }
  };


  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmitStudentIdCart}>
          <div className="flex gap-x-3 items-center justify-between w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              <div>
                <label
                  htmlFor="session_year_id"
                  className="block font-medium mb-1 text-black"
                >
                  Session Year <span className="text-red-600">*</span>
                </label>
                <select
                  name="session_year_id"
                  id="session_year_id"
                  value={formData.session_year_id}
                  onChange={handleChange}
                  required
                  className="w-full text-black border border-gray-300 rounded px-3 py-2 bg-transparent"
                >
                  <option value="" disabled>
                    Select Session
                  </option>

                  {sessionYear?.sessionYearData?.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.session_year}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="classname_id"
                  className="block font-medium mb-1 text-black"
                >
                  Class <span className="text-red-600">*</span>
                </label>
                <select
                  onClick={handleSubmit}
                  name="classname_id"
                  id="classname_id"
                  value={formData.classname_id}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-transparent text-black"
                >
                  <option value="" disabled>
                    Select Class
                  </option>
                  {sessionYear?.classData?.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.class_name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="section_id"
                  className="block font-medium mb-1 text-black"
                >
                  Section <span className="text-red-600">*</span>
                </label>
                <select
                  name="section_id"
                  id="section_id"
                  value={formData.section_id}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-transparent text-black"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {sectionName?.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.section_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="w-[200px]  mt-6">
              <button type="submit" className=" button_primary">
                <span>Genarate Id Card</span>
              </button>
            </div>
          </div>
        </form>
      </div>

 
    </div>
  );
}
