import React from 'react';

export default function MyResult() {
  return (
    <div>
      <div className="overflow-y-auto h-[calc(100vh-52px)] text-black">
        <div className="min-h-[calc(100vh-140px)]">
          <div className=" ">
            <div className="bg_primary_header">
              <h1 className="primari_header_text">My Result</h1>
            </div>

            <div className="border-2 bg-white shadow-md bg-_white p-5 text-justify mt-4 hover:border-green-500 group relative duration-500">
              Greater Chattogram Association (UK) is a social organisation formed for the welfare of Chattogramians living &amp; working in the United Kingdom as well as for assisting the development of Greater Chattogram in social and economic sectors. The aim of the organisation is to assist the very needy in health, education and shelter in the Greater Chattogram Area and also to assist the Chattogramians living and working in the UK to promote the Bengali culture while integrating within the British Culture. We hope to achieve this by way of engaging ourselves in diverse range of activities within the framework of charitable, cultural, educational, training, sporting, seminars, exhibitions and presentations.

              <div className="flex items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <img
                  src="https://gcauk.co.uk/assets/Logo-Bz2Y_Asy.png"
                  className="opacity-0 group-hover:opacity-20 duration-500 w-2/12"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 py-5  px-2 lg:px-0 mx-2 rounded-sm bg_primary_footer">
          <div className="max-w-7xl mx-auto flex items-center flex-col lg:flex-row justify-between">
            <p className="text-center">
              © 2025 All right reserved by Greater Chittagong Association. | Design &amp; Developed by Dhrubo Joyti Das.
            </p>
            <p>Sitemap | Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
