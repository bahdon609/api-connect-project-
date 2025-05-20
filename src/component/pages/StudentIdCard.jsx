import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";

export default function StudentIdCard() {
  const [studentIdCard, setStudentIdCard] = useState([]);
  console.log("idcartdata", studentIdCard);
  const [sessionYear, setSessionYear] = useState([]);
  const [sectionName, setSectionName] = useState([]);

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
          "https://school.bdtravel.net/api/student-id-card",

          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Working:", response);
        setSessionYear(response.data);
      } catch (err) {
        console.error("Error:", err);
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
        "https://school.bdtravel.net/api/class-wise-section",
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
        "https://school.bdtravel.net/api/student-id-card-generate",
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
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const componentRef = useRef();

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
                    <option key={index} value={item.classname_id}>
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

      <div className="mt-5 text-right ">
        {/* <ReactToPrint
           trigger={() => <button className="btn">Print Report</button>}
           content={() => componentRef.current}
           pageStyle="@page { size: auto; margin: 20mm; } body { -webkit-print-color-adjust: exact; }"
         />
     */}
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full ">
          {studentIdCard &&
            (studentIdCard?.length === 0 ? (
              <div>No Student Card found</div>
            ) : (
              studentIdCard?.map((item, index) => (
                <div key={index} className="w-[250px] bg-white m-2">
                  <div
                    className="relative"
                    style={{
                      backgroundImage:
                        "url('https://wallpapers.com/images/hd/business-card-background-1920-x-1080-oymkoctsc1dedk2u.jpg')",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center top",
                      backgroundSize: "contain",
                      border: "1px solid #0000000d",
                      boxSizing: "border-box",
                    }}
                  >
                    <div className="flex justify-center mt-20">
                      <div className="relative w-[100px] h-[100px]">
                        <div
                          className="absolute -top-[2px] -left-[2px] bg-blue-600"
                          style={{
                            width: "104px",
                            height: "108px",
                            clipPath:
                              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                          }}
                        />
                        <div
                          className="relative overflow-hidden bg-blue-600 rounded-[10%]"
                          style={{
                            width: "100px",
                            height: "100px",
                            clipPath:
                              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                          }}
                        >
                          <img
                            src={
                              item.image ||
                              "https://t4.ftcdn.net/jpg/03/27/72/31/360_F_327723158_WmVOR5zIgpl3eLYtTu3khV1ONNCgqVBD.jpg"
                            }
                            alt="Student"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-3 text-black text-[12px] font-bold w-full p-5">
                    <h4 className="text-[#075C98] text-[15px] font-bold uppercase pb-2">
                      {item.student_name}
                    </h4>

                    <div className="flex bg-white w-full">
                      <div className="w-1/2 text-left">Father's Name</div>
                      <div className="w-1/2 text-left">
                        : {item.father_name}
                      </div>
                    </div>

                    <div className="flex">
                      <div className="w-1/2 text-left">Class</div>
                      <div className="w-1/2 text-left">: {item.class_name}</div>
                    </div>

                    <div className="flex">
                      <div className="w-1/2 text-left">Roll</div>
                      <div className="w-1/2 text-left">: {item.roll_no}</div>
                    </div>

                    <div className="flex">
                      <div className="w-1/2 text-left">Mobile</div>
                      <div className="w-1/2 text-left">: {item.mobile}</div>
                    </div>

                    <div className="flex">
                      <div className="w-1/2 text-left">Blood Group</div>
                      <div className="w-1/2 text-left">
                        : {item.blood_group || "N/A"}
                      </div>
                    </div>
                  </div>

                  <div className="cursor-pointer w-full h-[30px] bg-[#0e4e8f] flex justify-center items-center">
                    <p className="text-white text-[12px] m-0">
                      Valid For Academic Year: 2025
                    </p>
                  </div>
                </div>
              ))
            ))}
        </div>
      </div>
    </div>
  );
}
