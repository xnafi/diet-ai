import * as motion from "motion/react-client";
import Image from "next/image";
import phone1 from "../../assets/iphone2.png";
import phone2 from "../../assets/iphone1.png";
import { FaArrowRight } from "react-icons/fa6";
export default function DownloadNow() {
  return (
    <section className="bg-[#FCFCFC]">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="sub-heading">
            Ready to transform your nutrition? Download Now.
          </h2>
          <p className="paraText">
            Join thousands of users who are already achieving their health goals
            with AI-powered nutrition tracking.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            className="secondaryColorBg text-black font-semibold px-6 py-3 rounded-md shadow-md transition flex justify-center items-center"
          >
            Download on App Store <FaArrowRight className="ml-2" />
          </motion.button>
        </motion.div>

        {/* Right Image (mockup phones) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end space-x-5 flex-col md:flex-row md:space-y-0 space-y-6"
        >
          <Image
            src={phone2}
            alt="App Mockup"
            width={285}
            height={580}
            className="rounded-xl shadow-lg"
          />
          <Image
            src={phone1}
            alt="App Mockup"
            width={275}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
