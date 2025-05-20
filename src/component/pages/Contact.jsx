import React from "react";

export default function Contact() {
  return (
    <div className="text-black">
      <div className="overflow-y-auto h-[calc(100vh-52px)] text-black">
        <div className="min-h-[calc(100vh-140px)]">
          <div className="">
            <div className="bg_primary_header">
              <h1 className="primari_header_text">Contact Us</h1>
              <h5 className="mt-3">Get in Touch With us</h5>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mt-3">
              {/* Contact Info */}
              <div className="flex items-center justify-center rounded bg-white border-2 border-bg_lightSlate shadow-md px-p_12px py-p_12px mx-auto w-full md:w-[50%]">
                <div className="text-text_18px mx-auto text-center">
                  <h1 className="font-bold text-3xl">Contact Information</h1>
                  <p>
                    <span className="font-bold">Email:</span>{" "}
                    infogcauk@gmail.com
                  </p>
                  <p>
                    <span className="font-bold">Phone:</span> +447799946311,
                    +447550448928, +447932612667
                  </p>
                  <p>
                    <span className="font-bold">Address:</span> Chattogram
                    Centre, 113 New Road, Whitechapel, London E1 1HJ
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="rounded bg-white text-text_18px mx-auto flex-1 border-2  shadow-md px-p_12px py-p_12px w-full md:w-[50%]">
                <h1 className="font-bold text-xl mb-4">Contact Form</h1>
                <form>
                  <div className="form-control w-full mb-4">
                    <label className="label">
                      <span className="label-text font-bold">
                        Full Name <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <input
                         autoComplete="on"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="border border-gray-500 rounded-md p-3 h-10 w-full bg-transparent"
                      required
                    />
                  </div>

                  <div className="form-control w-full mb-4">
                    <label className="label">
                      <span className="label-text font-bold">
                        Email <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <input
                         autoComplete="on"
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="border border-gray-500 rounded-md p-3 h-10 w-full bg-transparent"
                      required
                    />
                  </div>

                  <div className="form-control w-full mb-4">
                    <label className="label">
                      <span className="label-text font-bold">
                        Phone <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <input
                         autoComplete="on"
                      type="number"
                      name="phone"
                      placeholder="Phone"
                      className="border border-gray-500 rounded-md p-3 h-10 w-full bg-transparent"
                      required
                    />
                  </div>

                  <div className="form-control w-full mb-4">
                    <label className="label">
                      <span className="label-text font-bold">
                        Message <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <textarea
                         autoComplete="on"
                       
                      rows="4"
                      name="message"
                      placeholder="Message"
                      className="border border-gray-500 rounded-md p-3 w-full bg-transparent"
                      required
                    ></textarea>
                  </div>

                  <div className="form-control mt-4 prima">
                    <button type="submit" className="button_primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 py-5 bg_primary_footer  px-2 lg:px-0 mx-2 rounded-sm">
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
