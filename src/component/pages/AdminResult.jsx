import React, { useEffect, useRef, useState } from "react";
import { baseURL } from "../../App";
import axios from "axios";
import ReactToPrint from "react-to-print";

export default function AdminResult() {
  const [sessionYear, setSessionYear] = useState([]);
  const [markSheetData, setMarkSheetData] = useState([]);
  const [allStudentResult, setAllStudentResult] = useState([]);

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

            <div className="my-3 text-end mr-5">
              <ReactToPrint
                trigger={() => <button className="btn">Print Report</button>}
                content={() => componentRef.current}
                pageStyle={`
                        @page {
                          size: A4;
                 
                        }
                        body {
                          -webkit-print-color-adjust: exact;
                          print-color-adjust: exact;
                          font-family: serif;
                        }
                        .avoid-break {
                          break-inside: avoid;
                          page-break-inside: avoid;
                        }
                        .page-break {
                          page-break-after: always;
                          margin-top: 20px; 
                        }
                      `}
              />
            </div>
            <div
              ref={componentRef}
              className="text-black bg-white p-10 print:p-4"
            >
              {allStudentResult.students?.map((student, index) => (
                <div key={index} className=" my-10  ">
                  <div className=" avoid-break  min-h-[1000px] w-[894px]  relative text-black bg-white  border-gray-500  border  p-10 font-serif ">
                    <div className="absolute inset-0 opacity-10 h-full w-full">
                      <img
                        src="/image/Capture.PNG"
                        className=" h-full w-[70%] mx-auto object-contain"
                        alt=""
                      />
                    </div>
                    {/* Header Section */}
                    <div className="flex  mb-4 gap-x-5 mt-5">
                      <div className="flex justify-center  mb-2">
                        <div className="w-[100px] h-[100px]  rounded-full flex items-center justify-center">
                          <img
                            src="https://gcauk.co.uk/assets/Logo-Bz2Y_Asy.png"
                            className="text-xs text-gray-500"
                            alt="img not found"
                          />
                        </div>
                      </div>
                      <div className="text-center mt-0 pt-0">
                        <h1 className="font-bebas text-[28px]  tracking-tight text-center uppercase leading-8">
                          OBSERVANT RESIDENTIAL PUBLIC SCHOOL AND COLLEGE
                        </h1>
                        <p className="">
                          Post & Upazila: Khansama, District: Dinajpur - 5230
                        </p>
                        <p className="text-sm">
                          School Code: 481797, EMIS: 70302018
                        </p>
                        <div className="mt-2">
                          <h2 className="text-lg font-semibold border-4 px-10 border-black inline-block pb-y">
                            REPORT CARD
                          </h2>
                          <p className="text-base font-semibold mt-1">
                            FINAL EXAMINATION - 2024
                          </p>
                        </div>
                      </div>
                      <div className="text-[10px] text-center w-[180px]">
                        <table className="border border-[gray] border-collapse w-full">
                          <tr>
                            <td className="border border-[gray] border-collapse px-1 font-semibold">
                              Range
                            </td>
                            <td className="border border-[gray] border-collapse px-1 font-semibold">
                              Grade
                            </td>
                            <td className="border border-[gray] border-collapse px-1 font-semibold">
                              GPA
                            </td>
                          </tr>
                          {allStudentResult.grading_scale?.map(
                            (grate, grateIndex) => (
                              <tr key={grateIndex}>
                                <td className="border border-[gray] border-collapse px-1 font-semibold ">
                                  {grate.class_interval_100}
                                </td>
                                <td className="border border-[gray] border-collapse px-1">
                                  {grate.letter_grade}
                                </td>
                                <td className="border border-[gray] border-collapse px-1">
                                  {grate.grade_point}
                                </td>
                              </tr>
                            )
                          )}
                        </table>
                      </div>
                    </div>

                    {/* Student Info Section */}
                    <div className="mt-4 flex gap-x-5">
                      <div className="w-[600px]">
                        <table className="min-w-full text-sm border border-black border-collapse">
                          <tbody className="border border-black border-collapse">
                            <tr>
                              <td className="px-2 py-1 border border-black">
                                <strong>Name</strong>
                              </td>
                              <td className="border px-2 py-1 border-black">
                                {student.student_name}
                              </td>
                              <td className="border px-2 py-1 border-black">
                                <strong> Register No</strong>
                              </td>
                              <td className="border px-2 py-1 border-black">
                                ORPSC00000081
                              </td>
                              <td className="border px-2 py-1 border-black">
                                <strong> Roll Number</strong>
                              </td>
                              <td className="border px-2 py-1 border-black">
                                1
                              </td>
                            </tr>
                            <tr>
                              <td className="border px-2 py-1 border-black">
                                <strong> Father Name</strong>
                              </td>
                              <td className="border px-2 py-1 border-black">
                                MD MASHIUR RAHMAN
                              </td>
                              <td className="border px-2 py-1 border-black">
                                <strong> Admission Date</strong>
                              </td>
                              <td className="border px-2 py-1 border-black">
                                2024-01-01
                              </td>
                              <td className="border px-2 py-1 border-black">
                                <strong> Date of Birth</strong>
                              </td>
                              <td className="border px-2 py-1 border-black">
                                {student.date_of_birth}
                              </td>
                            </tr>
                            <tr>
                              <td className="border px-2 py-1 border-black">
                                <strong> Mother Name</strong>
                              </td>
                              <td className="border px-2 py-1 border-black">
                                MST NURNAHER AKTER
                              </td>
                              <td className="border px-2 py-1 border-black">
                                <strong> Class</strong>
                              </td>
                              <td className="border px-2 py-1 border-black">
                                {student.class_name}
                              </td>
                              <td className="border px-2 py-1 border-black">
                                <strong> Gender</strong>
                              </td>
                              <td className="border px-2 py-1 border-black">
                                Male
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className=" h-[130px] w-[100px]">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/3/33/Sajid_Hasan.jpg"
                          alt=""
                        />
                      </div>
                    </div>

                    {/* Table Section */}
                    <div className="mt-6">
                      <table className="w-full border-collapse border border-black text-sm">
                        <thead>
                          <tr className="text-sm">
                            <th className="border border-black p-1">
                              SUBJECTS
                            </th>
                            <th className="border border-black p-1">Written</th>
                            <th className="border border-black p-1">TOTAL</th>
                            <th className="border border-black p-1">Grade</th>
                            <th className="border border-black p-1">Point</th>
                            <th className="border border-black p-1">
                              SUBJECT POSITION
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {student.subjects.map((item, index) => (
                            <tr key={index} className="text-center">
                              <td className="border border-black p-1 text-left">
                                {item.subject_name}
                              </td>
                              <td className="border border-black p-1">
                                {item.total_marks}
                              </td>
                              <td className="border border-black p-1">
                                {item.total_mark}
                              </td>

                              <td className="border border-black p-1">
                                {item.letter_grade}
                              </td>
                              <td className="border border-black p-1">
                                {item.obtained_mark}
                              </td>
                              <td className="border border-black p-1">1st</td>
                            </tr>
                          ))}

                          <tr className="text-center">
                            <td className="border border-black p-1 text-left">
                              <strong> GRAND TOTAL</strong>
                            </td>
                            <td
                              className="border border-black p-1 text-start"
                              colSpan="5"
                            >
                              <strong> 500/500 , Average: 100.100%</strong>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td className="border border-black p-1 text-left">
                              <strong>RESULT</strong>
                            </td>
                            <td
                              className="border border-black p-1 text-start"
                              colSpan="5"
                            >
                              <strong>{student.total_grade}</strong>
                            </td>
                          </tr>
                          <tr className="text-center">
                            <td className="border border-black p-1 text-left">
                              <strong>Position</strong>
                            </td>
                            <td
                              className="border border-black p-1 text-start"
                              colSpan="5"
                            >
                              <strong>{student.position}</strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Comments Section */}
                    <div className="mt-4 text-sm ">
                      <table className=" border border-black border-collapse w-full">
                        <tr>
                          <td className="border border-black p-2">
                            {" "}
                            <strong>Principal Comments</strong>
                          </td>
                          <td className="border border-black p-2">
                            Has a well-developed sense of humor.
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-black p-2">
                            {" "}
                            <strong>Teacher Comments</strong>
                          </td>
                          <td className="border border-black p-2">
                            {" "}
                            Has an impressive understanding a depth of knowledge
                            about the interests.
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div className="border-t border-[#0e0d0d3a] mt-8"></div>
                    {/* Signature Section */}
                    <div className="mt-5 flex justify-between text-sm">
                      {/* Class Teacher */}
                      <div className="w-40 text-center">
                        <br />
                        <br />
                        <br />
                        <br />
                        <p>Class Teacher Signature</p>
                      </div>

                      {/* Principal */}
                      <div className="w-40 text-center">
                        <img
                          src="image/sing.png"
                          alt="Principal Signature"
                          className="mx-auto h-20"
                        />
                        <p>Principal Signature</p>
                      </div>

                      {/* School Seal */}
                      <div className="w-40 text-center">
                        <img
                          src="image/seal.png"
                          alt="School Seal"
                          className="mx-auto h-[100px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
