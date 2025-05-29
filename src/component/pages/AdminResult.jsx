import React, { useContext, useEffect, useRef, useState } from "react";
import { baseURL } from "../../App";
import axios from "axios";
import ReactToPrint from "react-to-print";
import { getAllStudentResult } from "../../ContextApi/ContextProvider";
import { useNavigate } from "react-router-dom";


export default function AdminResult() {
  const [sessionYear, setSessionYear] = useState([]);
  const [markSheetData, setMarkSheetData] = useState([]);
  const [allStudentResult, setAllStudentResult] = useState([]);
const navigator=useNavigate()
const {setGetAllResult}=useContext(getAllStudentResult)


  console.log(allStudentResult, "");
  const [formData, setFormData] = useState({
    session_year_id: "",
    classname_id: "",
    marksheet_id: "",
    invoice_format: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sessions = ["2021-2022", "2022-2023", "2023-2024"];
  const classes = ["Class 6", "Class 7", "Class 8"];
  const sections = ["A", "B", "C"];

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      alert("Please Login now");
    }

    const FetchedSessionData = async () => {
      try {
        const response = await axios.get(
          `${baseURL}/api/all-student-result`,

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

  const handleSubmit = async (e) => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      alert("Please Login now");
    }
    e.preventDefault();

    const StudentAllResult = await axios.post(
      `${baseURL}/api/all-student-result-invoice`,
      {
        session_year_id: formData.session_year_id,
        classname_id: formData.classname_id,
        marksheet_id: formData.marksheet_id,
        invoice_format: formData.invoice_format,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(StudentAllResult.data.data);
    setAllStudentResult(StudentAllResult.data.data);
    setGetAllResult(StudentAllResult.data.data);
   navigator('/all-student')

  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      alert("Please Login now");
    }
    const postClassname = async () => {
      if (formData.classname_id) {
        try {
          const res = await axios.post(
            `${baseURL}/api/get-all-marksheet-with-class-session-id`,
            {
              classname_id: formData.classname_id,
              session_year_id: formData.session_year_id,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );

          setMarkSheetData(res.data);
          console.log(res.data);
        } catch (err) {
          console.error(err);
        }
      }
    };

    postClassname();
  }, [formData.classname_id]);

  const componentRef = useRef();
  return (
    <div>
      <div className="overflow-y-auto h-[calc(100vh-52px)] text-black">
        <div className="min-h-[calc(100vh-140px)]">
          <div className=" ">
            <div className="bg-blue-500 text-white text-center py-[48px] px-[15px]">
              <h1 className="text-text_40px"> Student Result</h1>
            </div>
            <div className="flex gap-x-2 ">
              <form
                onSubmit={handleSubmit}
                className="w-[90%] md:w-full h-[60vh] mx-auto py-5 px-8 shadow-lg rounded-lg bg-white mt-10 space-y-6 border border-blue-300"
              >
                <h2 className="text-2xl font-bold text-center text-blue-700 ">
                  Single Student Result
                </h2>

                {/* Roll */}
                <div>
                  <label
                    htmlFor="session_year_id"
                    className="block font-medium text-gray-700 mb-1"
                  >
                    Session year{" "}
                    <span className="text-red-500 text-2xl">*</span>
                  </label>
                  <select
                    name="session_year_id"
                    id="session_year_id"
                    value={formData.session_year_id}
                    onChange={handleChange}
                    className="w-full border p-2 rounded border-blue-500 outline-none focus:ring-2 focus:ring-blue-300 transition bg-transparent"
                    required
                  >
                    <option value="">Select Session</option>
                    {sessions.map((session, idx) => (
                      <option key={idx} value={session}>
                        {session}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Class */}
                <div>
                  <label
                    htmlFor="classname_id"
                    className="block  font-medium text-gray-700 mb-1"
                  >
                    Class <span className="text-red-500 text-2xl">*</span>
                  </label>
                  <select
                    name="classname_id"
                    id="classname_id"
                    value={formData.classname_id}
                    onChange={handleChange}
                    className="w-full border p-2 rounded border-blue-500 outline-none focus:ring-2 focus:ring-blue-300 transition bg-transparent"
                    required
                  >
                    <option value="">Select Class</option>
                    {classes.map((cls, idx) => (
                      <option key={idx} value={cls}>
                        {cls}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Section */}
                <div>
                  <label
                    htmlFor="section_id"
                    className="block  font-medium text-gray-700 mb-1"
                  >
                    Section <span className="text-red-500 text-2xl">*</span>
                  </label>
                  <select
                    name="section_id"
                    id="section_id"
                    value={formData.section_id}
                    onChange={handleChange}
                    className="w-full border p-2 rounded border-blue-500 outline-none focus:ring-2 focus:ring-blue-300 transition bg-transparent"
                    required
                  >
                    <option value="">Select Section</option>
                    {sections.map((sec, idx) => (
                      <option key={idx} value={sec}>
                        {sec}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
                >
                  Show Result
                </button>
              </form>

              {/* second */}

              <form
                onSubmit={handleSubmit}
                className="w-[90%] md:w-full h-[60vh] mx-auto py-5 px-8 shadow-lg rounded-lg bg-white mt-10 space-y-6 border border-blue-300"
              >
                <h2 className="text-2xl font-bold text-center text-blue-700 ">
                  Class wise student result
                </h2>
                {/* Session Year */}
                <div>
                  <label
                    htmlFor="session_year_id"
                    className="block  font-medium text-gray-700 mb-1 "
                  >
                    Session year{" "}
                    <span className="text-red-600 text-2xl">*</span>
                  </label>
                  <select
                    name="session_year_id"
                    id="session_year_id"
                    value={formData.session_year_id}
                    onChange={handleChange}
                    className="w-full border p-2 rounded border-blue-500 outline-none focus:ring-2 focus:ring-blue-300 transition bg-transparent"
                    required
                  >
                    <option value="">Select Session</option>
                    {sessionYear?.sessionYearData?.map((session, idx) => (
                      <option key={idx} value={session.id}>
                        {session.session_year}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Class */}
                <div>
                  <label
                    htmlFor="classname_id"
                    className="block  font-medium text-gray-700 mb-1"
                  >
                    Class <span className="text-red-600 text-2xl">*</span>
                  </label>
                  <select
                    name="classname_id"
                    id="classname_id"
                    value={formData.classname_id}
                    onChange={handleChange}
                    className="w-full border p-2 rounded border-blue-500 outline-none focus:ring-2 focus:ring-blue-300 transition bg-transparent"
                    required
                  >
                    <option value="">Select Class</option>
                    {sessionYear.classData?.map((sec, idx) => (
                      <option key={idx} value={sec.id}>
                        {sec.class_name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Section */}
                <div>
                  <label
                    htmlFor="marksheet_id"
                    className="block  font-medium text-gray-700 mb-1"
                  >
                    Marksheet<span className="text-red-600 text-2xl">*</span>
                  </label>
                  <select
                    name="marksheet_id"
                    id="marksheet_id"
                    value={formData.marksheet_id}
                    onChange={handleChange}
                    className="w-full border p-2 rounded border-blue-500 outline-none focus:ring-2 focus:ring-blue-300 transition bg-transparent"
                    required
                  >
                    <option value="">Select Marksheet</option>
                    {markSheetData.marksheetData?.map((sec, idx) => (
                      <option key={idx} value={sec.id}>
                        {sec.marksheet_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="invoice_format"
                    className="block  font-medium text-gray-700 mb-1"
                  >
                    Invoice <span className="text-red-600 text-2xl">*</span>
                  </label>
                  <select
                    name="invoice_format"
                    id="invoice_format"
                    value={formData.invoice_format}
                    onChange={handleChange}
                    className="w-full border p-2 rounded border-blue-500 outline-none focus:ring-2 focus:ring-blue-300 transition bg-transparent"
                    required
                  >
                    <option value="">Select Section</option>

                    <option value="1">Invoice 1</option>

                    <option value="1">Invoice 2</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
                >
                  Show Result
                </button>
              </form>
            </div>

            {/* result */}

           
          </div>
        </div>

        <div className="border-2 py-5 bg_primary_footer mt-3  px-2 lg:px-0 mx-2 rounded-sm">
          <div className="max-w-7xl mx-auto flex items-center flex-col lg:flex-row justify-between">
            <p className="text-center">
              © 2025 All right reserved by Greater Chittagong Association. |
              Design &amp; Developed by Dhrubo Joyti Das.
            </p>
            <p>Sitemap | Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
