import React, { useContext, useRef } from 'react'
import { getAllStudentResult } from '../../ContextApi/ContextProvider'
import ReactToPrint from 'react-to-print';

export default function AllStudentResultTable() {
    const {getAllResult}=useContext(getAllStudentResult)
    console.log(getAllResult);
    const componentRef=useRef()
  return (
    <div className=' flex justify-center p-5 w-full '>
         <div className="my-3 text-end mr-5 fixed bottom-10  right-10">
              <ReactToPrint
                trigger={() => <button className="button_primary">Print Report</button>}
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
              {getAllResult.students?.map((student, index) => (
                <div key={index} className=" my-10  ">
                  <div className=" avoid-break  min-h-[1200px] w-[894px]  relative text-black bg-white  border-gray-500  border  p-10 font-serif ">
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
                          {getAllResult.grading_scale?.map(
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
                                <strong> class</strong>
                              </td>
                              <td className="border px-2 py-1 border-black">
                              {student.class_name}
                              </td>
                              <td className="border px-2 py-1 border-black">
                                <strong> Roll</strong>
                              </td>
                              <td className="border px-2 py-1 border-black">
                                1
                              </td>
                            </tr>
                            <tr>
                              <td className="border px-2 py-1 border-black">
                                <strong> Father </strong>
                              </td>
                              <td className="border px-2 py-1 border-black">
                                MD MASHIUR RAHMAN
                              </td>
                              <td className="border px-2 py-1 border-black">
                                <strong>Section</strong>
                              </td>
                              <td className="border px-2 py-1 border-black">
                                2024-01-01
                              </td>
                              <td className="border px-2 py-1 border-black">
                            <strong> Gender</strong>
                              </td>
                              <td className="border px-2 py-1 border-black">
                            male
                              </td>
                            </tr>
                            <tr>
                              <td className="border px-2 py-1 border-black">
                                <strong> Mother </strong>
                              </td>
                              <td className="border px-2 py-1 border-black">
                                MST NURNAHER AKTER
                              </td>
                              <td className="border px-2 py-1 border-black">
                                <strong> Id</strong>
                              </td>
                              <td className="border px-2 py-1 border-black">
                               
                              </td>
                              <td className="border px-2 py-1 border-black">
                                    <strong> DOB</strong>
                              </td>
                              <td className="border px-2 py-1 border-black">
                                   {student.date_of_birth}
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
                                {item.obtained_mark}
                              </td>
                              <td className="border border-black p-1">
                                {item.total_mark}
                              </td>

                              <td className="border border-black p-1">
                                {item.letter_grade}
                              </td>
                              <td className="border border-black p-1">
                                {item.obtained_markss|| "5.0"}
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
                    <div className="border-t border-[#0e0d0d3a] mt-10"></div>
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
  )
}
