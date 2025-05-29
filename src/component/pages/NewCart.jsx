import React, { useContext } from "react";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import { LoginUser } from "../../ContextApi/ContextProvider";

export default function NewCart() {
  const componentRef = useRef();

  const {User,setUser}=useContext(LoginUser)
  console.log(User);
  return (
    <div className="w-full">
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
         gap: 10px !important;
         justify-content: center !important;
        width: fit-content !important;
         margin: auto !important;
         margin-top: 55px !important;
         }

        .print-card {
         width: 255px !important;
         height: 350px !important;
        break-inside: avoid;
        page-break-inside: avoid;
       }

       .print-card img.bg {
        width: 202px !important;
        height: 340px !important;
        }

        .print-img {
         position: absolute !important;
         top: 95px !important;
         height: 120px !important;
         width: 120px !important;
         border-radius: 100% !important;
         right: 30px !important;
         }


         .print-img-1 {
         height: 80px !important;
         width: 80px !important;
         }

 

           .grate{
            font-size: 10px !important;
           position: absolute !important;
           top: 160px !important;
           }


          .address{
           font-size: 10px !important;
           position: absolute !important;
           bottom: 30px !important;
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
              className="relative w-[288px] h-[413px]   border border-gray-600 overflow-hidden print-card "
            >
              <div className=" absolute w-full h-full ">
                <img
                  src="/image/new.jfif"
                  className="h-full w-full object-contain"
                  alt=""
                />
              </div>

              <div className="absolute top-[10px] right-[100px]  text-center text-sm  bg-green-800 h-20 w-20 rounded-full print-img-1 ">
                <img
                  src="/image/Capture.PNG"
                  className="h-full w-full rounded-full object-cover"
                  alt=""
                />
              </div>

              <div className="absolute top-[190px] left-[29px] text-center text-[12px] font-semibold text-gray-800 grate ">
                <p className="font-semibold">GRADE</p>
                <p className="text-2xl leading-5 ">{index + 1}</p>
              </div>

              <div className="absolute top-[116px] right-[28px] text-center text-sm  bg-gray-800 h-36 w-36 rounded-full print-img ">
                <img
                  src="https://pbs.twimg.com/media/FFq_7ccVQAAmI9-.png"
                  className="h-full w-full rounded-full object-cover"
                  alt=""
                />
              </div>

              <div className="absolute bottom-[55px] left-[28px] text-black text-sm space-y-1 leading-4 address">
                <p>
                  <span className="font-semibold">
                    Name: <br />
                  </span>{" "}
                  Marsha Williams
                </p>
                <p>
                  <span className="font-semibold">
                    Father Name: <br />
                  </span>{" "}
                  James Williams
                </p>
                <p>
                  <span className="font-semibold">
                    ID Number: <br />
                  </span>{" "}
                  SCH-1234-567
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="h-[734px] w-[1029px] relative flex">
        <div className="absolute inset-0  h-full w-full ">
          <img src="/image/bg.jpg" className="h-full w-full" alt="" />
        </div>
        <div className="absolute inset-0   flex items-center justify-center ">
          <img src="/image/Capture.PNG" className=" w-[50%] opacity-20 object-contain" alt="" />
        </div>
        <div className="w-[920px]  h-[584px] mt-16 mx-auto  p-1 relative">
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
                className="h-[90px] w-[90px]"
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

      
          <div className="mt-2 text-black text-[18px] ml-1">
            <h2 className="ml-10">
              This is certify that <span className=" parisienne-regular text-[black] text-2xl">raja mia</span>
            </h2>

            <h2 className="my-1">
              daughter of <span className=" parisienne-regular text-[black] text-2xl">raja mia</span> and{" "}
              <span className=" parisienne-regular text-[black] text-2xl">raja mia</span>
            </h2>

            <h2 className="">
              student of{" "}
              <span className=" parisienne-regular text-[black] text-2xl">Pakutia bgrg degree college</span>
            </h2>

            <h2 className="">
              bearing Student ID <span className=" parisienne-regular text-[black] text-2xl">10251,</span>{" "}
              Roll No. <span className=" parisienne-regular text-[black] text-2xl">1007,</span> and studying
              Class <span className=" parisienne-regular text-[black] text-2xl">Seven</span> passed the{" "}
              <span className=" parisienne-regular text-[black] text-2xl">Half Yearly Examination</span> of{" "}
              <span className=" parisienne-regular text-[black] text-2xl">2025,</span> in{" "}
              <span className=" parisienne-regular text-[black] text-2xl">Science,</span> Groupe and obtained
              a G.P.A <span className=" parisienne-regular text-[black] text-2xl">3.25</span> in the scale of
              5.00
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
      </div> */}
    </div>
  );
}
