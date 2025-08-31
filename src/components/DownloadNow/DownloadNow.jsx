import Image from "next/image";
import phone1 from "../../assets/iPhone1.svg";
import phone2 from "../../assets/iPhone2.svg";
import Button from "../buttons/Button";
export default function DownloadNow() {
  return (
    <section className="mb-6">
      <div className="container grid md:grid-cols-2 gap-10 items-center overflow-hidden card_dropShadow px-0 lg:!px-10 bg-[#FCFCFC] rounded-md drop-shadow-[rgba(237, 237, 237, 20)] backdrop-blur-[160px]">
        {/* Left Content */}
        <div
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
        </div>

        {/* Right Image (mockup phones) */}
        <div
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
        </div>
      </div>
    </section>
  );
}
