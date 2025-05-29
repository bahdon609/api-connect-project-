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
            <div className="p-1">
              <h1 className="font-bold text-text_xl md:text-text_30px">
            Welcome to the Online Result Portal
              </h1>
              <p className="text-text_sm2 md:text-text_18px pb-4">
        This online result platform allows students to quickly and securely check their academic results. Whether you're a school, college, or university student, you can view your detailed marksheet, grades, and overall performance in just a few clicks. Fast, reliable, and accessible from anywhere—your academic success is just one search away.

              </p>
              <a className="button_primary" href="/memberShip">
                See your result
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
    <div className="p-4">
  <h1 className="font-bold text-text_xl md:text-text_30px">
    Welcome to the Online Attendance Portal
  </h1>
  <p className="text-text_sm2 md:text-text_18px pb-4">
    This online attendance platform helps students and teachers track daily attendance records easily and accurately. Whether you are monitoring class presence, checking past attendance history, or managing student performance—this portal offers a fast, transparent, and secure way to stay updated on attendance status from anywhere, anytime.
  </p>
<div className="w-full text-end">
    <a className="button_primary" href="/attendance">
    Check Your Attendance
  </a>
</div>
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
