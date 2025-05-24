import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

export default function Card() {
  const componentRef = useRef();

  return (
    <div>
      <div className="text-end">
        <ReactToPrint
          trigger={() => <button className="btn my-3">Print Report</button>}
          content={() => componentRef.current}
          pageStyle={`
            @page {
              size: A4;
              margin: 10mm;
            }
            @media print {
              body {
                -webkit-print-color-adjust: exact;
              }

              .print-grid {
                display: grid !important;
                grid-template-columns: repeat(3, 1fr) !important;
                gap: 10px;
              }

              .print-card {
                width: 205px !important;
                height: 340px !important;
                break-inside: avoid;
                page-break-inside: avoid;
              }

              .print-card img.bg {
                width: 205px !important;
                height: 340px !important;
              }

              .print-img {
                height: 80px !important;
                width: 80px !important;
              }

              .print-name {
                font-size: 18px !important;
                 margin-top: 5px !important;
                  line-height: 20px !important;
              }

              .print-role {
                font-size: 16px !important;
                 margin-top: 12px !important; 
              }
                .observant{
                 font-size: 27px !important; 
                   margin-top: 13px !important; 
                }
                 .collage-name{
                 font-size: 10px !important; 
                 }
                .cart-contact{
                 font-size: 12px !important; 
                }
                 .cart-contact-div{
                  margin-top: -5px !important;
                 } 
            }
          `}
        />
      </div>

      <div
        ref={componentRef}
        className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 print-grid w-[90%] mx-auto"
      >
        {/* {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="print-card relative w-[297px] h-[500px] bg-white border border-gray-600 text-center text-black overflow-hidden mx-auto my-2"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="/image/file.svg"
                alt="Background"
                className="bg w-[297px] h-[500px] object-contain"
              />
            </div>

            <div className="relative z-10">
              <h1 className="observant text-[40px] uppercase font-bold tracking-[3px] mt-5">
                observant
              </h1>
              <h2 className="font-bold uppercase text-[12px] tracking-[1px]">
                residential public school & college
              </h2>

              <div className="mt-3 w-full flex justify-center">
                <img
                  src="https://png.pngtree.com/png-vector/20240208/ourmid/pngtree-red-shirt-with-ash-tie-suit-for-mens-passport-size-photo-png-image_11732068.png"
                  className="print-img h-[120px] w-[120px] rounded-full border-2 object-cover border-[blue]"
                  alt=""
                />
              </div>

              <h1 className="print-name text-[30px] w-[150px] mx-auto leading-[35px] uppercase font-semibold mt-5">
                mashiur rahman
              </h1>

              <h1 className="print-role uppercase text-[25px] font-semibold mt-5">
                Principal
              </h1>

              <div className="w-full text-white py-2">
                <p className="text-gray-200">ID : 000{index + 1}</p>
                <p className="text-gray-200">PHONE : 01306286660</p>
                <p className="text-gray-200">email: mashiurn@gmail.com</p>
                <p className="uppercase mt-1 text-gray-200">
                  KHANSAMA DINAJPUR
                </p>
              </div>
            </div>
          </div>
        ))} */}

           {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="print-card relative w-[297px] h-[500px] bg-white border border-gray-600 text-center text-black overflow-hidden mx-auto my-2"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="/image/file.svg"
                alt="Background"
                className="bg w-[297px] h-[500px] object-contain"
              />
            </div>

            <div className="relative z-10">
              <h1 className="observant text-[40px] uppercase font-bold tracking-[3px] mt-5">
                observant
              </h1>
              <h2 className="font-bold collage-name uppercase text-[12px] tracking-[1px]">
                residential public school & college
              </h2>

              <div className="mt-3 w-full flex justify-center">
                <img
                  src="https://png.pngtree.com/png-vector/20240208/ourmid/pngtree-red-shirt-with-ash-tie-suit-for-mens-passport-size-photo-png-image_11732068.png"
                  className="print-img h-[120px] w-[120px] rounded-full border-2 object-cover border-[blue]"
                  alt=""
                />
              </div>

              <h1 className="print-name text-[30px] w-[150px] mx-auto leading-[35px] uppercase font-semibold mt-5">
                mashiur rahman
              </h1>

              <h1 className="print-role uppercase text-[25px] font-semibold mt-5">
                Principal
              </h1>

              <div className="w-full text-white cart-contact-div py-2">
                <p className="text-gray-200 cart-contact">ID : 000{index + 1}</p>
                <p className="text-gray-200 cart-contact">PHONE : 01306286660</p>
                <p className="text-gray-200 cart-contact">email: mashiurn@gmail.com</p>
                <p className="uppercase mt-1 text-gray-200 cart-contact">
                  KHANSAMA DINAJPUR
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
