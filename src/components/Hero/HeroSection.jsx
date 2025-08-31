import Image from "next/image";
import Button from "../buttons/Button";
import phone from "../../assets/phone.svg";
import Nutrition from "../../assets/Nutrition.svg";
import calories from "../../assets/calories.svg";
import Carbohydrate from "../../assets/Carbohydrates.svg";
import goals from "../../assets/goals.svg";
import syrup from "../../assets/syrup.svg";

import CardAnimate, { cardVariants } from "@/utils/CardAnimate";

export default function HeroSection() {
  return (
    <section className="relative bg-white">
      {/* Hero Content */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4 pt-12 space-y-4">
        <span className="text-xs uppercase bg-gray-100 text-gray-600 px-3 py-1 rounded-full mb-4">
          See what’s new on Diet AI
        </span>
        <h1 className="hero-heading  lg:leading-16">
          Track Your Nutrition Smarter <br /> And Simpler With AI.
        </h1>
        <p className="paraText">
          Simply take a photo of your meal and let our advanced AI analyze the
          nutritional content. Track calories, macros, and achieve your health
          goals effortlessly.
        </p>
        <div className="max-w-2xl">
          <Button text={"Download on App Store"} />
        </div>
      </div>

      {/* Phone + Floating Cards */}
      <div className="bgWrap">
        <div className="flex justify-center items-center w-full px-4 overflow-hidden bgText pt-[15%] lg:mt-0  xl:pt-[10%] md:pt-[10%] lg:pt-[17%]">
          {/* Phone Placeholder */}
          <div className="w-full h-full flex items-center justify-center text-gray-500 !z-20">
            <Image src={phone} height={770} width={500} alt="phone" quality={25}/>
            {/* Fade Gradient at Bottom */}
          </div>

          {/* Floating Card Nutation */}
          <CardAnimate x={420} y={-20}>
            <Image src={Nutrition} alt="nutation" height={320} width={320} />
          </CardAnimate>
          {/* Floating Card daily goals*/}
          <CardAnimate x={-400} y={40}>
            <Image src={goals} alt="daily goals" height={262} width={300} />
          </CardAnimate>
          {/* Floating Card calories*/}
          <CardAnimate x={-330} y={-160}>
            <Image src={calories} alt="calories" height={125} width={136} />
          </CardAnimate>
          {/* Floating Card Carbohydrate*/}
          <CardAnimate x={-250} y={260}>
            <Image
              src={Carbohydrate}
              alt="Carbohydrate"
              height={129}
              width={140}
            />
          </CardAnimate>
          {/* Floating Card syrup*/}
          <CardAnimate x={250} y={260}>
            <Image src={syrup} alt="syrup" height={136} width={312} />
          </CardAnimate>
        </div>
      </div>
    </section>
  );
}
