import React, { useContext, useRef } from 'react'
import ReactToPrint from 'react-to-print';
import { GetAllStudentIdCartPrint } from '../../ContextApi/ContextProvider';

export default function AllStudentIdCartPrint() {

    const {getAllStudentDataPrint}=useContext(GetAllStudentIdCartPrint)
      const componentRef = useRef();
  const formatName = (fullName) => {
    const words = fullName.trim().split(/\s+/);
    if (words.length > 2) {
      return words.slice(0, 2).join(" ");
    }
    return fullName;
  };


    const FatherNameFormat = (fullName) => {
    const words = fullName.trim().split(/\s+/);
    if (words.length > 2) {
      return words.slice(0, 3).join(" ");
    }
    return fullName;
  };
  return (
    <div className='flex justify-center'>
        <div className="">
                 <div className="mt-5 text-right">
      {getAllStudentDataPrint.length !== 0&&(
          <ReactToPrint
          trigger={() => <button className="button_primary  fixed right-10 bottom-10">Print Report</button>}
          content={() => componentRef.current}
          pageStyle={`
          @page {
            size: A4;
           margin: 10mm;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          /* Force 3 columns and 9 cards per page */
          .print-card-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 7px;
            width: 100%;
            margin: 0 auto;
          }

          .print-card {
            width: 230px !important;
            height: 330px !important;
            break-inside: avoid;
            page-break-inside: avoid;
          }

          .print-page-break {
            page-break-after: always;
          }

          
            // .cart-bg{
            // height:100px !important;
            //  width:
            //  350px !important;
            //   object-fit: cover !important;
            // }
        `}
        />
      )}

        <div
          ref={componentRef}
          className="grid grid-cols-3 gap-3 w-full max-w-[794px] mx-auto  print-card-container "
        >
          {getAllStudentDataPrint && getAllStudentDataPrint.length === 0 ? (
            <div>No Student Card found</div>
          ) : (
            getAllStudentDataPrint.map((item, index) => (
              <div
                key={index}
                className="bg-white   w-[250px] h-[350px] print-card border border-gray-600 relative"
              >
                {/* background image area */}
                <div
                  className="relative cart-bg "
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
                  <div className="flex justify-center mt-10">
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
                            item.student_photo ||
                            "https://t4.ftcdn.net/jpg/03/27/72/31/360_F_327723158_WmVOR5zIgpl3eLYtTu3khV1ONNCgqVBD.jpg"
                          }
                          alt="Student"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* info section */}
                <div className="text-center   mt-2 mb-8 text-black text-[12px] font-bold w-full px-3">
                  <h4 className="text-[#075C98] text-[15px] font-bold uppercase pb-2">
                    {formatName(item.student_name)}
                  </h4>

                  <div className="flex bg-white w-full">
                    <div className="w-1/2 text-left">Father</div>
                    <div className="w-1/2 text-left">: {FatherNameFormat(item.father_name)}</div>
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

                <div className="cursor-pointer absolute bottom-0 left-0 w-full h-[30px] bg-[#0e4e8f] flex justify-center items-center">
                  <p className="text-white text-[12px] m-0">
                    Valid For Academic Year: 2025
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
        </div>
    </div>
  )
}
