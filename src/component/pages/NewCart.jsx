import React from "react";
import { useRef } from "react";
import ReactToPrint from "react-to-print";

export default function NewCart() {
  const componentRef = useRef();
  return (
    <div className="w-full">
      {/* <div className="text-end">
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
      gap: 10px !important;
      justify-content: center !important;
      width: fit-content !important;
      margin: auto !important;
      margin-top: 55px !important;
    }

    .print-card {
      width: 205px !important;
      height: 300px !important;
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

    .observant {
      font-size: 27px !important;
      margin-top: 13px !important;
    }

    .collage-name {
      font-size: 10px !important;
    }

    .cart-contact {
      font-size: 12px !important;
    }

    .cart-contact-div {
      margin-top: -5px !important;
    }
  }
`}
        />
      </div>

      <div className="flex justify-center items-center">
        <div
          ref={componentRef}
          className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 print-grid w-[90%] mx-auto"
        >
          {[...Array(10)].map((item, index) => (
            <div
              key={index}
              className="relative w-[290px] h-[415px]   border border-gray-600 overflow-hidden print-card "
            >
              <div className=" absolute w-full h-full ">
                <img
                  src="/image/cart-22.jfif"
                  className="h-full w-full object-contain"
                  alt=""
                />
              </div>

              <div className="absolute top-[6px] right-[100px]  text-center text-sm font-bold bg-green-800 h-20 w-20 rounded-full print-img ">
                <img src="" alt="" />
              </div>

              <div className="absolute top-[180px] left-[26px] text-center text-sm font-bold text-gray-800 ">
                <p className="">GRADE</p>
                <p className="text-3xl ">3</p>
              </div>

              <div className="absolute top-[126px] right-[30px] text-center text-sm font-bold bg-gray-800 h-36 w-36 rounded-full print-img ">
                <img src="" alt="" />
              </div>

              <div className="absolute bottom-[70px] left-[28px] text-black text-sm space-y-1 leading-5">
                <p>
                  <span className="font-bold">Name:</span> Marsha Williams
                </p>
                <p>
                  <span className="font-bold">Father Name:</span> James Williams
                </p>
                <p>
                  <span className="font-bold">ID Number:</span> SCH-1234-567
                </p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <div className="w-[920px] h-[584px] mx-auto border border-gray-400 p-1">
        <div className="flex justify-between mt-2 px-2">
          <div className="">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Government_Seal_of_Bangladesh.svg/2048px-Government_Seal_of_Bangladesh.svg.png"
              className="h-[80px] w-[80px]"
              alt=""
            />
          </div>

          <div className="">
            <img
              src="https://png.pngtree.com/png-vector/20230306/ourmid/pngtree-scool-college-logo-victor-vector-png-image_6634445.png"
              className="h-[80px] w-[80px]"
              alt=""
            />
          </div>

          <div className="">
            <img
              src="https://images.seeklogo.com/logo-png/52/1/seal-of-bangladesh-ordnance-factory-logo-png_seeklogo-520253.png"
              className="h-[80px] w-[80px]"
              alt=""
            />
          </div>
        </div>

        {/* Text part */}
        <div className="flex justify-between mt-2 text-black">
          <div className="">
            <span className="text-[14px] mt-10 inline-block">
              Memorial No : 100824
            </span>
            <img src="/image/qr.PNG" className="ml-10 mt-2" alt="" />
          </div>

          <div className="text-black text-center">
            <h1 className="text-[25px] text-black font-semibold">
              Premium College
            </h1>
            <h2 className="">Dumuria,Khulna</h2>
            <p className="text-red-400 font-semibold mt-4">Estd:1973</p>
            <a
              href="https://bdschool.my/ "
              className="text-[14px] mt-2 text-center inline-block text-blue-500 font-semibold"
            >
              https://bdschool.my/
            </a>
            <h2 className="bg-green-800 mt-2 py-1.5 w-[300px] text-white font-semibold rounded-3xl text-2xl ">
              Certificate
            </h2>
            <h3 className="mt-2 text-[18px] font-semibold">
              Half Yearly Examination 2025
            </h3>
          </div>

          <div className="">
            <div className="w-full text-right">
              <h5 className="text-[14px] mt-10  mr-0 w-full bg">
                EIN : 100824
              </h5>
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCF6NzolOdlU0gJg7GqWa6bgL5yH_CF8eWiw&s"
              className="w-[114px] mt-2 mr-10 object-contain h-[116]"
              alt=""
            />
          </div>
        </div>

        {/* Certificate body */}
        <div className="mt-2 text-black text-[18px] ml-1">
          <h2 className="ml-10">
            This is certify that <span className=" font-serif">raja mia</span>
          </h2>

          <h2 className="my-1">
            daughter of <span className=" font-serif">raja mia</span> and{" "}
            <span className=" font-serif">raja mia</span>
          </h2>

          <h2 className="">
            student of{" "}
            <span className=" font-serif">Pakutia bgrg degree college</span>
          </h2>

          <h2 className="">
            bearing Student ID <span className=" font-serif">10251,</span> Roll
            No. <span className=" font-serif">1007,</span> and studying Class{" "}
            <span className=" font-serif">Seven</span> passed the{" "}
            <span className=" font-serif">Half Yearly Examination</span> of{" "}
            <span className=" font-serif">2025,</span> in{" "}
            <span className=" font-serif">Science,</span> Groupe and obtained a
            G.P.A <span className=" font-serif">3.25</span> in the scale of 5.00
          </h2>
        </div>

        <div className="flex justify-between  w-full mt-14  text-black">
          <div className="ml-20 text-center">
            <h5 className="font-semibold">Professor</h5>
            <h5 className="text-red-900 font-semibold">Exam Conner</h5>
          </div>

          <div className="mr-20 text-center">
            <h5 className="font-semibold">Principal</h5>
            <h5 className="text-red-900 font-semibold">
              Principal (in Charge)
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
