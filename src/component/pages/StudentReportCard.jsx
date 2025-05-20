import React from "react";

export default function StudentReportCard() {
  return (
    <div>
      <div className="min-h-[11] bg-[#0000008e]  flex items-center justify-center py-6 ">
        <div className=" text-black bg-white shadow-lg border-black h-full border py-16  px-20 max-w-4xl font-serif ">
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
              <p className="text-sm">School Code: 481797, EMIS: 70302018</p>
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
                <tr>
                  <td className="border border-[gray] border-collapse px-1 font-semibold ">
                    80-100
                  </td>
                  <td className="border border-[gray] border-collapse px-1">
                    A+
                  </td>
                  <td className="border border-[gray] border-collapse px-1">
                    5.0
                  </td>
                </tr>
                <tr>
                  <td className="border border-[gray] border-collapse px-1 font-semibold ">
                    70-79
                  </td>
                  <td className="border border-[gray] border-collapse px-1">
                    A
                  </td>
                  <td className="border border-[gray] border-collapse px-1">
                    4.0
                  </td>
                </tr>
                <tr>
                  <td className="border border-[gray] border-collapse px-1 font-semibold ">
                    60-69
                  </td>
                  <td className="border border-[gray] border-collapse px-1">
                    A-
                  </td>
                  <td className="border border-[gray] border-collapse px-1">
                    305
                  </td>
                </tr>

                <tr>
                  <td className="border border-[gray] border-collapse px-1 font-semibold ">
                    50-59
                  </td>
                  <td className="border border-[gray] border-collapse px-1">
                    B
                  </td>
                  <td className="border border-[gray] border-collapse px-1">
                    3.0
                  </td>
                </tr>
                <tr>
                  <td className="border border-[gray] border-collapse px-1 font-semibold ">
                    40-49
                  </td>
                  <td className="border border-[gray] border-collapse px-1">
                    C
                  </td>
                  <td className="border border-[gray] border-collapse px-1">
                    2.0
                  </td>
                </tr>

                <tr>
                  <td className="border border-[gray] border-collapse px-1 font-semibold ">
                    33-39
                  </td>
                  <td className="border border-[gray] border-collapse px-1">
                    D
                  </td>
                  <td className="border border-[gray] border-collapse px-1">
                    1.0
                  </td>
                </tr>

                <tr>
                  <td className="border border-[gray] border-collapse px-1 font-semibold ">
                    00-32
                  </td>
                  <td className="border border-[gray] border-collapse px-1">
                    F
                  </td>
                  <td className="border border-[gray] border-collapse px-1">
                    0.0
                  </td>
                </tr>
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
                      MD ENAD IVRAN
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
                    <td className="border px-2 py-1 border-black">1</td>
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
                      2017-10-01
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
                      One (Venus)
                    </td>
                    <td className="border px-2 py-1 border-black">
                      <strong> Gender</strong>
                    </td>
                    <td className="border px-2 py-1 border-black">Male</td>
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
                <tr className="">
                  <th className="border border-black p-1">SUBJECTS</th>
                  <th className="border border-black p-1">Written</th>
                  <th className="border border-black p-1">TOTAL</th>
                  <th className="border border-black p-1">Grade</th>
                  <th className="border border-black p-1">Point</th>
                  <th className="border border-black p-1">SUBJECT POSITION</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="border border-black p-1 text-left">BANGLA</td>
                  <td className="border border-black p-1">100/100</td>
                  <td className="border border-black p-1">100/100</td>
                  <td className="border border-black p-1">A+</td>
                  <td className="border border-black p-1">5.00</td>
                  <td className="border border-black p-1">1st</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-black p-1 text-left">ENGLISH</td>
                  <td className="border border-black p-1">100/100</td>
                  <td className="border border-black p-1">100/100</td>
                  <td className="border border-black p-1">A+</td>
                  <td className="border border-black p-1">5.00</td>
                  <td className="border border-black p-1">1st</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-black p-1 text-left">MATH</td>
                  <td className="border border-black p-1">100/100</td>
                  <td className="border border-black p-1">100/100</td>
                  <td className="border border-black p-1">A+</td>
                  <td className="border border-black p-1">5.00</td>
                  <td className="border border-black p-1">1st</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-black p-1 text-left">
                    GENERAL KNOWLEDGE
                  </td>
                  <td className="border border-black p-1">50/50</td>
                  <td className="border border-black p-1">50/50</td>
                  <td className="border border-black p-1">A+</td>
                  <td className="border border-black p-1">5.00</td>
                  <td className="border border-black p-1">1st</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-black p-1 text-left">
                    ACTIVE ENGLISH + WORD BOOK
                  </td>
                  <td className="border border-black p-1">50/50</td>
                  <td className="border border-black p-1">50/50</td>
                  <td className="border border-black p-1">A+</td>
                  <td className="border border-black p-1">5.00</td>
                  <td className="border border-black p-1">1st</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-black p-1 text-left">
                    RELIGION
                  </td>
                  <td className="border border-black p-1">50/50</td>
                  <td className="border border-black p-1">50/50</td>
                  <td className="border border-black p-1">A+</td>
                  <td className="border border-black p-1">5.00</td>
                  <td className="border border-black p-1">1st</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-black p-1 text-left">DRAWING</td>
                  <td className="border border-black p-1">50/50</td>
                  <td className="border border-black p-1">50/50</td>
                  <td className="border border-black p-1">A+</td>
                  <td className="border border-black p-1">5.00</td>
                  <td className="border border-black p-1">1st</td>
                </tr>
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
                    <strong>Pass</strong>
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
                    <strong>1</strong>
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
                  Has an impressive understanding a depth of knowledge about the
                  interests.
                </td>
              </tr>
            </table>
          </div>
          <div className="border-t border-[#0e0d0d3a] mt-8"></div>
          {/* Signature Section */}
          <div className="mt-5 flex  justify-between  text-sm">
            <div className="w-40  text-center pt-1">
              <p> Class Teacher Signature</p>
            </div>
            <div className="w-40  text-center pt-1">
              <p> Class Teacher Signature</p>
              <p className="border-t border-[gray] mt-10"></p>
            </div>

            <div className="w-40  text-center pt-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
