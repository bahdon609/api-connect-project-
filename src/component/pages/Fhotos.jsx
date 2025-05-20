import React from "react";

export default function Fhotos() {
  return (
    <div className="text-black">
      <div className="overflow-y-auto h-[calc(100vh-50px)]">
        <div className="min-h-[calc(100vh-140px)]">
          <div className="bg_primary_header">
            <h1 className="primari_header_text">Fhotos</h1>
            <h5 className="">Memorable moments of our association</h5>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
            <div className="bg-_white border-2 border-bg_lightSlate rounded-md p-4 mx-auto w-full hover:border-green-500 duration-500">
              <div>
                <div className="h-60 w-full overflow-hidden">
                  <img
                    src="https://member.gcauk.co.uk/uploads/gallery/1731715610-6737e21a332f1.jpg"
                    className="h-full w-full object-cover"
                    alt="Mejban and Cultural Show 2024"
                  />
                </div>

                <div className="mt-2">
                  <p className="mb-2 text-gray-500 text-center">
                    <strong>Mejban and Cultural Show 2024</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-_white border-2 border-bg_lightSlate rounded-md p-4 mx-auto w-full hover:border-green-500 duration-500">
              <div>
                <div className="h-60 w-full overflow-hidden">
                  <img
                    src="https://member.gcauk.co.uk/uploads/gallery/1731715610-6737e21a332f1.jpg"
                    className="h-full w-full object-cover"
                    alt="Mejban and Cultural Show 2024"
                  />
                </div>

                <div className="mt-2">
                  <p className="mb-2 text-gray-500 text-center">
                    <strong>Mejban and Cultural Show 2024</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-_white border-2 border-bg_lightSlate rounded-md p-4 mx-auto w-full hover:border-green-500 duration-500">
              <div>
                <div className="h-60 w-full overflow-hidden">
                  <img
                    src="https://member.gcauk.co.uk/uploads/gallery/1731715610-6737e21a332f1.jpg"
                    className="h-full w-full object-cover"
                    alt="Mejban and Cultural Show 2024"
                  />
                </div>

                <div className="mt-2">
                  <p className="mb-2 text-gray-500 text-center">
                    <strong>Mejban and Cultural Show 2024</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-_white border-2 border-bg_lightSlate rounded-md p-4 mx-auto w-full hover:border-green-500 duration-500">
              <div>
                <div className="h-60 w-full overflow-hidden">
                  <img
                    src="https://member.gcauk.co.uk/uploads/gallery/1731715610-6737e21a332f1.jpg"
                    className="h-full w-full object-cover"
                    alt="Mejban and Cultural Show 2024"
                  />
                </div>

                <div className="mt-2">
                  <p className="mb-2 text-gray-500 text-center">
                    <strong>Mejban and Cultural Show 2024</strong>
                  </p>
                </div>
              </div>
            </div>
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
    </div>
  );
}
