import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";

export default function TransferCertificate() {
  const [formData, setFormData] = useState({
    session_year_id: "",
    classname_id: "",
    section_id: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {};

  const componentRef=useRef()
  return (
    <div className="overflow-y-auto h-[calc(100vh-52px)] text-black">
      <div className="min-h-[calc(100vh-140px)]">
        <div className=" ">
          <div className="bg-blue-500 text-white text-center py-[48px] px-[15px]">
            <h1 className="text-text_40px">Transfer-certificate</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg mx-auto py-8 px-8 shadow-lg rounded-lg bg-white mt-10 space-y-6 border border-blue-300"
          >
            <h2 className="text-2xl font-bold text-center text-blue-700 ">
              Transfer Certificate Request
            </h2>

            {/* Roll */}
            <div>
              <label
                htmlFor="roll"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Student Roll Number
              </label>
              <input
                type="text"
                name="roll"
                id="roll"
                placeholder="Enter Roll Number"
                value={formData.roll}
                onChange={handleChange}
                className="w-full border p-2 rounded border-blue-500 outline-none focus:ring-2 focus:ring-blue-300 transition bg-transparent"
                required
              />
            </div>

            {/* Class */}
            <div>
              <label
                htmlFor="studentClass"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Class
              </label>
              <input
                type="text"
                name="studentClass"
                id="studentClass"
                placeholder="Enter Class"
                value={formData.studentClass}
                onChange={handleChange}
                className="w-full border p-2 rounded border-blue-500 outline-none focus:ring-2 focus:ring-blue-300 transition bg-transparent"
                required
              />
            </div>

            {/* Group */}
            <div>
              <label
                htmlFor="group"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Group (Optional)
              </label>
              <input
                type="text"
                name="group"
                id="group"
                placeholder="Enter Group"
                value={formData.group}
                onChange={handleChange}
                className="w-full border p-2 rounded border-blue-500 outline-none focus:ring-2 focus:ring-blue-300 transition bg-transparent"
              />
            </div>

            {/* Session */}
            <div>
              <label
                htmlFor="session"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Session
              </label>
              <input
                type="text"
                name="session"
                id="session"
                placeholder="e.g. 2022-2023"
                value={formData.session}
                onChange={handleChange}
                className="w-full border p-2 rounded border-blue-500 outline-none focus:ring-2 focus:ring-blue-300 transition bg-transparent"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition  "
            >
              Generate Transfer Certificate
            </button>
          </form>

          {/* certificate */}

          
                      <div className="my-3 text-end mr-5">
                        <ReactToPrint
                          trigger={() => <button className="button_primary !bg-blue-500">Print Report</button>}
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
         <div ref={componentRef} className="">

         <div className="w-[768px] relative mx-auto border p-8 mt-5 bg-white text-[16px] leading-7 font-sans">
            <div className="absolute inset-0 h-full w-full">
              <img src="/image/tc-image.jpg" className="h-full w-full" alt="" />
            </div>

            <div className="relative w-[700px] mx-auto px-10 py-5">
              <div className="text-center mb-4">
                <h2 className="text-3xl font-bold uppercase">
                  Government High School
                </h2>
                <p className="text-sm">
                  123, Main Road, Dhaka, Bangladesh | EIIN: 123456
                </p>
                <p className="text-sm">
                  Phone: 0123456789 | Email: wbsofware@school.edu.bd
                </p>
                <h3 className="text-lg font-semibold mt-4 underline">
                  Transfer Certificate
                </h3>
              </div>

              <div className="flex justify-between text-sm mb-4">
                <p className="font-semibold">
                  <strong>TC No:</strong> #545215
                </p>
                <p className="font-semibold">
                  <strong>Date:</strong> 02-02-2025
                </p>
              </div>

              <p className="mb-6">
                This is to certify that{" "}
                <span className="parisienne-regular">Md. badhon Mia</span>,
                son/daughter of{" "}
                <span className="parisienne-regular">Md. abdul khalek</span> and{" "}
                <span className="parisienne-regular">Mst Sajeda begum</span>,
                born on <span className="parisienne-regular">07-04-2003</span>,
                was a student of this institution.
              </p>

              <div className="space-y-1">
                <div className="flex">
                  <strong className="w-60">Student ID / Roll No :</strong>
                  <span>0152454</span>
                </div>
                <div className="flex">
                  <strong className="w-60">Class Studied :</strong>
                  <span>Class 12</span>
                </div>
                <div className="flex">
                  <strong className="w-60">Section / Group :</strong>
                  <span>Science</span>
                </div>
                <div className="flex">
                  <strong className="w-60">Session :</strong>
                  <span>2022</span>
                </div>
                <div className="flex">
                  <strong className="w-60">Date of Admission :</strong>
                  <span>02-05-2014</span>
                </div>
                <div className="flex">
                  <strong className="w-60">Date of Leaving :</strong>
                  <span>02-05-2016</span>
                </div>
                <div className="flex">
                  <strong className="w-60">Reason for Leaving :</strong>
                  <span>Nothing</span>
                </div>
                <div className="flex">
                  <strong className="w-60">Conduct :</strong>
                  <span>Good</span>
                </div>
                <div className="flex">
                  <strong className="w-60">Academic Performance :</strong>
                  <span>Good</span>
                </div>
              </div>

              <p className="mt-6">
                All dues to the school have been cleared. This certificate is
                issued on the request of the student/guardian.
              </p>

              <p className="mt-3">
                We wish him/her every success in future endeavors.
              </p>

              <div className="flex justify-between items-end mt-8 text-sm">
                <div className="text-center">
                  <p>_______________________</p>
                  <p>Class Teacher</p>
                </div>
                <div className="text-center">
                  <img
                    src="/image/sing.png"
                    className="w-[120px] mx-auto"
                    alt=""
                  />

                  <p>Principal / Headmaster</p>
                </div>
              </div>
            </div>
          </div>

         </div>

          {/* end */}
        </div>
      </div>

      <div className="border-2 py-5 bg_primary_footer px-2 lg:px-0 mx-2 rounded-sm">
        <div className="max-w-7xl mx-auto flex items-center flex-col lg:flex-row justify-between">
          <p className="text-center">
            © 2025 All right reserved by Greater Chittagong Association. |
            Design &amp; Developed by Dhrubo Joyti Das.
          </p>
          <p>Sitemap | Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}
