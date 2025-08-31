import * as motion from "motion/react-client";
import Image from "next/image";
import phone1 from "../../assets/iPhone1.svg";
import phone2 from "../../assets/iPhone2.svg";
import { FaArrowRight } from "react-icons/fa6";
import Button from "../buttons/Button";
export default function DownloadNow() {
  return (
    <section className="mb-6">
      <div className="container grid md:grid-cols-2 gap-10 items-center overflow-hidden card_dropShadow px-0 lg:!px-10 bg-[#FCFCFC] rounded-md drop-shadow-[rgba(237, 237, 237, 20)] backdrop-blur-[160px]">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6 "
        >
          <h2 className="sub-heading">
            Ready to transform your nutrition? Download Now.
          </h2>
          <p className="paraText">
            Join thousands of users who are already achieving their health goals
            with AI-powered nutrition tracking.
          </p>
          <Button text={"Download on App Store"} />
        </motion.div>

        {/* Right Image (mockup phones) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end lg:space-x-5 flex-col md:flex-row lg:space-y-0 space-y-6 items-center"
        >
          <Image
            src={phone1}
            alt="App Mockup"
            width={275}
            height={400}
            className="rounded-xl shadow-lg"
          />
          <Image
            src={phone2}
            alt="App Mockup"
            width={285}
            height={580}
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
