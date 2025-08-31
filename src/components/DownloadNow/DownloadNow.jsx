import Image from "next/image";
import phone1 from "../../assets/iPhone1.svg";
import phone2 from "../../assets/iPhone2.svg";
import Button from "../buttons/Button";
export default function DownloadNow() {
  return (
    <section className="bg-2">
      <section className="container !py-0">
        <div className="container bg-2 grid md:grid-cols-2 gap-10 items-center card_dropShadow !px-4 lg:mt-20 !py-0 bg-[#FCFCFC] rounded-md drop-shadow-[rgba(237, 237, 237, 20)] backdrop-blur-[160px]">
          {/* Left Content */}
          <div className="space-y-6 lg:p-6">
            <h2 className="sub-heading">
              Ready to transform your nutrition? Download Now.
            </h2>
            <p className="paraText">
              Join thousands of users who are already achieving their health
              goals with AI-powered nutrition tracking.
            </p>
            <Button text={"Download on App Store"} />
          </div>

          {/* Right Image (mockup phones) */}
          <div className="flex justify-center lg:justify-end space-x-5 flex-row  items-center lg:px-4 lg:h-[65vh]">
            <div className="self-end">
              <Image
                src={phone1}
                alt="App Mockup"
                width={275}
                height={400}
                className=""
              />
            </div>

            <div className="self-start">
              <Image
                src={phone2}
                alt="App Mockup"
                width={285}
                height={580}
                className=""
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
