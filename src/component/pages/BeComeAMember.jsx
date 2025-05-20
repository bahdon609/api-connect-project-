import React from "react";

export default function BeComeAMember() {
  return (
    <div className="overflow-y-auto h-[calc(100vh-52px)] text-black">
      <div className="min-h-[calc(100vh-140px)]">
        <div className=" ">
          <div className="bg-blue-500 text-white text-center py-[48px] px-[15px]">
            <h1 className="text-text_40px">Become a Member</h1>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-2 mt-3">
            {/* Left Column: Event Info */}
            <div className="text-center rounded border-2 shadow-md  p-4 md:w-full flex flex-col items-center justify-center relative bg-white">
              <h1 className="font-bold text-text_xl md:text-3xl lg:text-4xl">
                Become a Mejban
              </h1>
            </div>

            {/* Middle Column: Registration Form */}
            <div className="text-center lg:text-left card rounded border-2 shadow-md  p-2 relative bg-white">
              <form>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <div className="form-control">
                    <label className="label font-semibold block">
                      Full Name{" "}
                      <span className="text-red-500 text-left inline-block">
                        *
                      </span>
                    </label>
                    <input
                    autoComplete="on"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="border-2 rounded-md p-2 w-full bg-transparent"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label font-semibold block">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                         autoComplete="on"
                      type="number"
                      name="phone"
                      placeholder="Phone number"
                      className="border-2 rounded-md p-2 w-full bg-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <div className="form-control">
                    <label className="label font-semibold block">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                         autoComplete="on"
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className="border-2 rounded-md p-2 w-full bg-transparent"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label font-semibold block">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <select
                         autoComplete="on"
                      type="number"
                      name="phone"
                      placeholder="Phone number"
                      className="border-2 rounded-md p-2 w-full bg-transparent"
                      required
                    >
                        <option value="">Select Gender</option>
                        <option value="">Male</option>
                        <option value="">Female</option>
                        <option value="">Others</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-gap_primary mt-4"></div>

                <div className="form-control">
                  <label className="label font-semibold block">
                    Address in UK <span className="text-red-500">*</span>
                  </label>
                  <textarea
                       autoComplete="on"
                    name="address_in_uk"
                    rows="2"
                    placeholder="Address in UK"
                    className="border-2 rounded-md p-2 w-full bg-transparent"
                    required
                  ></textarea>
                </div>

                <div className="form-control">
                  <label className="label font-semibold block">
                    Address in CTG <span className="text-red-500">*</span>
                  </label>
                  <textarea
                       autoComplete="on"
                    name="address_in_ctg"
                    rows="2"
                    placeholder="Your district of origin in BD"
                    className="border-2 rounded-md p-2 w-full bg-transparent"
                  ></textarea>
                </div>

          

       

                <div className="form-control mt-3">
                  <button className=" button_primary">Submit</button>
                </div>
              </form>
            </div>

            {/* Right Column: Image */}
            <div className="text-center lg:text-left rounded border-2 shadow-md  p-2 h-full w-full overflow-hidden md:w-full flex items-center bg-white">
              <img
                className="w-full h-[500px] object-cover"
                src="https://gcauk.co.uk/assets/Screenshot-DtZjcFQ7.png"
                alt="Event"
              />
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
  );
}
