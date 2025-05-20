import React from "react";

export default function RegistrationMejban() {
  return (
    <div>
      <div className="overflow-y-auto h-[calc(100vh-52px)] text-black">
        <div className="min-h-[calc(100vh-140px)]">
          <div className=" ">
            <div className="bg-blue-500 text-white text-center py-[48px] px-[15px]">
              <h1 className="text-text_40px">Registration for Mejban</h1>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-2 mt-3">
              {/* Left Column: Event Info */}
              <div className="text-center rounded border-2 border-bg_lightSlate shadow-md  p-4 md:w-full flex flex-col items-center justify-center relative bg-white">
                <h1 className="font-bold text-text_xl md:text-3xl lg:text-4xl">
                  Registration for Mejban
                </h1>
                <p className="text-text_sm2 mt-4">
                  <span className="font-bold">Date:</span> SUNDAY 7 July 2024
                  (11.00 am to 11.00 pm)
                </p>
                <p className="text-text_sm2">
                  <span className="font-bold">Venue:</span> Mayfair Venue
                  Chadwell Health 1078-1082 High Rd Romford, RM6 4BD
                </p>
                <p className="text-text_sm2">
                  <span className="font-bold">Entry Fee:</span> £10 (10 Years to
                  Adult) £5 (6 to 9 years), under 6 years free
                </p>
                <p className="text-xl font-medium mt-4">
                  Already have registered?
                </p>
                <button className="bg-bg_selected text-_white px-2 py-[2px] rounded-sm mt-1 z-40">
                  See Invitation
                </button>

                <div className="max-h-0 duration-500 ease-linear overflow-hidden absolute bottom-0 w-full text-left">
                  <div className="bg-bg_selected text-white py-10 px-3">
                    <label className="text_color text_font">Phone Number</label>
                    <input
                         autoComplete="on"
                      type="number"
                      name="phone"
                      className="border h-10 text-bg_selected bg-gray-100 px-4 w-full outline-none"
                      placeholder="Type Here"
                    />
                    <button type="button" className="button_primary mt-2">
                      Submit
                    </button>
                  </div>
                </div>
              </div>

              {/* Middle Column: Registration Form */}
              <div className="text-center lg:text-left card rounded border-2 border-bg_lightSlate shadow-md  p-2 relative bg-white">
                <form>
                  <div className="form-control">
                    <label className="label font-semibold">
                      Full Name <span className="text-red-500">*</span>
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

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-gap_primary">
                    <div className="form-control">
                      <label className="label font-semibold">
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
                      <label className="label font-semibold">
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

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-gap_primary mt-4">
                    <div className="form-control">
                      <label className="label font-semibold">
                        Guest (10+) <span className="text-red-500">*</span>
                      </label>
                      <select
                           autoComplete="on"
                        name="guest_up_10"
                        className="border-2 rounded-md p-2 w-full bg-transparent"
                        required
                      >
                        <option value="">Guest (10+)</option>
                        {[...Array(11).keys()].map((i) => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-control">
                      <label className="label font-semibold">Guest (6+)</label>
                      <select
                           autoComplete="on"
                        name="guest_up_6"
                        className="border-2 rounded-md p-2 w-full bg-transparent"
                      >
                        <option value="">Guest (6+)</option>
                        {[...Array(6).keys()].map((i) => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-control">
                      <label className="label font-semibold">Guest (-6)</label>
                      <select
                           autoComplete="on"
                        name="guest_bellow_6"
                        className="border-2 rounded-md p-2 w-full bg-transparent"
                      >
                        <option value="">Guest (Below 6)</option>
                        {[...Array(6).keys()].map((i) => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label font-semibold">
                      Address in UK <span className="text-red-500">*</span>
                    </label>
                    <textarea
                       
                      name="address_in_uk"
                      rows="2"
                      placeholder="Address in UK"
                      className="border-2 rounded-md p-2 w-full bg-transparent"
                      required
                    ></textarea>
                  </div>

                  <div className="form-control">
                    <label className="label font-semibold">
                      Your District of origin in Bangladesh
                    </label>
                    <textarea
                        
                      name="address_in_ctg"
                      rows="2"
                      placeholder="Your district of origin in BD"
                      className="border-2 rounded-md p-2 w-full bg-transparent"
                    ></textarea>
                  </div>

                  <div className="flex justify-between mt-3">
                    <table className="border w-full">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="w-5/12 text-start p-1 border-r">
                            Age
                          </th>
                          <th className="w-2/12 text-center p-1">Fee</th>
                          <th className="w-2/12 text-center p-1 border-l border-r">
                            Qty
                          </th>
                          <th className="w-3/12 text-center p-1">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border">
                          <td className="p-1 border-r">
                            Guest above 10 years:
                          </td>
                          <td className="p-1 text-center">£10</td>
                          <td className="p-1 text-center border-r border-l">
                            0
                          </td>
                          <td className="p-1 text-center border-r border-l">
                            £0
                          </td>
                        </tr>
                        <tr className="border">
                          <td className="p-1 border-r">Guest 6 to 9 years:</td>
                          <td className="p-1 text-center">£5</td>
                          <td className="p-1 text-center border-r border-l">
                            0
                          </td>
                          <td className="p-1 text-center border-r border-l">
                            £0
                          </td>
                        </tr>
                        <tr className="border">
                          <td className="p-1 border-r">Guest below 6 years:</td>
                          <td className="p-1 text-center">Free</td>
                          <td className="p-1 text-center border-r border-l">
                            0
                          </td>
                          <td className="p-1 text-center border-r border-l">
                            £0
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="flex justify-between mt-3">
                    <div className="flex justify-center px-4 py-2 bg-green-600 text-white font-semibold rounded-full">
                      <h1>Total Member: 0</h1>
                    </div>
                    <div className="flex justify-center px-4 py-2 bg-green-600 text-white font-semibold rounded-full w-16">
                      <h1>£0</h1>
                    </div>
                  </div>

                  <div className="form-control mt-3">
                    <button className="button_primary">Submit</button>
                  </div>
                </form>
              </div>

              {/* Right Column: Image */}
              <div className="text-center lg:text-left rounded border-2 border-bg_lightSlate shadow-md  p-2 h-full w-full overflow-hidden md:w-full flex items-center bg-white">
                <img
                  className="w-full h-full object-cover"
                  src="https://gcauk.co.uk/assets/image-2-min-BJbS5Orr.jpg"
                  alt="Event"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 py-5 bg_primary_footer mt-3  px-2 lg:px-0 mx-2 rounded-sm">
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
