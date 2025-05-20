import React from "react";
import { motion } from "framer-motion";
export default function Home() {
  const fadeRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className="text-black overflow-y-auto h-[calc(100vh-50px)]">
      <div className="min-h-[calc(100vh-140px)]">
        <div className=" flex flex-col md:flex-row justify-center  ">
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded bg-white text-text_18px md:flex-1 p-4 border-2  shadow-md aos-init aos-animate"
          >
            <div className="">
              <h1 className="font-bold text-text_xl md:text-text_30px">
                Welcome to Greater Chattogram Association UK{" "}
              </h1>
              <p className="text-text_sm2 md:text-text_18px pb-4">
                Welcome to the Greater Chattogram Association (UK) is a
                non-governmental, non-profiting, non-political organisation
                working for the vast welfare of the greater Chattogramians in
                Bangladesh and in the United Kingdom without any discriminations
                of casts, className, creed, culture, sect, religion and
                community discriminations.
              </p>
              <a className="button_primary" href="/memberShip">
                Become a Member
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded bg-white text-text_18px md:ml-mt_medium w-full md:flex-1 border-2 shadow-md p-1 aos-init aos-animate"
          >
            <div className="h-full w-full">
              <iframe
                className="h-full w-full object-contain"
                src="https://www.youtube.com/embed/ISwnqW5d9mA?si=Dfnv0oZR7oglmrRm"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </motion.div>
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
