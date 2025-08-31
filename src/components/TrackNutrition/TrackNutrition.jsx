import Image from "next/image";
import CardAnimate from "@/utils/CardAnimate";
import NutritionCard from "./NutritionCard";
import photoRecognition from "../../assets/photoRecognition.svg";
import phone from "../../assets/iPhone.svg";
import currentWeight from "../../assets/currentWeight.svg";
import targetWeight from "../../assets/targetWeight.svg";
import startingWeight from "../../assets/startingWeight.svg";
import FoodDetail from "../../assets/FoodDetail.svg";
import calories from "../../assets/calories.svg";
import muscle from "../../assets/muscle.svg";
import abs from "../../assets/abs.svg";
import fats from "../../assets/fats.svg";
import carbs from "../../assets/carbs.svg";
import egg from "../../assets/egg.svg";
import protein from "../../assets/protein.svg";
import Carbohydrates from "../../assets/Carbohydrates.svg";
import proteinCard from "../../assets/proteinCard.svg";
import fatCard from "../../assets/fatCard.svg";
import { TbMeat } from "react-icons/tb";
import { PiBreadLight } from "react-icons/pi";
import { LiaBurnSolid } from "react-icons/lia";
import { FaInfoCircle } from "react-icons/fa";

export default function TrackNutrition() {
  return (
    <section className="container">
      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs uppercase bg-gray-100 text-gray-600 px-3 py-1 rounded-full mb-4">
          MORE FEATURES
        </span>
        <h2 className="sub-heading mt-2">
          Everything you need to track your nutrition
        </h2>
        <p className="peraText mt-4">
          Our AI technology makes nutrition tracking simple, <br /> accurate,
          and personalized to your goals.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Photo Recognition */}
        <NutritionCard
          title="Photo Recognition"
          description="Take a photo of your meal and our AI instantly identifies ingredients and calculates nutritional values."
        >
          <div className="relative flex justify-center items-center mt-2 lg:mt-2 w-full px-4 overflow-hidden">
            {/* Phone Placeholder */}
            <div className="relative w-full h-full flex items-center justify-center z-10 overflow-hidden mask-y-from-[80%] mask-y-to-[99%]">
              <Image
                src={photoRecognition}
                height={228}
                width={251}
                alt="photoRecognition"
              />
            </div>

            {/* Floating Card Fats */}
            <CardAnimate x={-150} y={-100}>
              <Image src={fats} alt="fats" height={48} width={157} />
            </CardAnimate>
            {/* Floating Card Carbs*/}
            <CardAnimate x={150} y={-100}>
              <Image src={carbs} alt="carbs" height={48} width={157} />
            </CardAnimate>
            {/* Floating Card Avocado*/}
            <CardAnimate x={-150} y={100}>
              <Image src={egg} alt="egg" height={99} width={232} />
            </CardAnimate>
            {/* Floating Card Protein*/}
            <CardAnimate x={150} y={100}>
              <Image src={protein} alt="protein" height={48} width={157} />
            </CardAnimate>
          </div>
        </NutritionCard>

        {/* Smart Tracking */}
        <NutritionCard
          title="Smart Tracking"
          description="Monitor your daily intake of calories, protein, carbs, and fats with intelligent goal setting."
        >
          <div className="relative flex justify-center items-center mt-2 lg:mt-2 w-full px-4 overflow-hidden">
            {/* Phone Placeholder */}
            <div className="relative w-full h-full flex items-center justify-center z-10 overflow-hidden">
              <Image src={phone} height={228} width={300} alt="phone" />
              {/* Fade Gradient at Bottom */}
            </div>

            {/* Floating Card tarting Weight */}
            <CardAnimate x={-150} y={-70}>
              <Image
                src={startingWeight}
                alt="starting Weight"
                height={68}
                width={192}
              />
            </CardAnimate>
            {/* Floating Card target Weight*/}
            <CardAnimate x={150} y={-40}>
              <Image
                src={targetWeight}
                alt="target Weight"
                height={42}
                width={167}
              />
            </CardAnimate>
            {/* Floating Card current weight*/}
            <CardAnimate x={0} y={100}>
              <div className="bg-white space-y-2 flex-col text-xs px-2 py-3 border rounded flex justify-center items-center peraText">
                <Image
                  src={currentWeight}
                  alt="current Weight"
                  height={272}
                  width={300}
                />
              </div>
            </CardAnimate>
          </div>
        </NutritionCard>

        {/* Progress Analysis */}
        <NutritionCard
          title="Progress Analysis"
          description="Visualize your nutrition journey with detailed charts to keep you motivated."
        >
          <div className="bg-gray-50 rounded-xl p-2 lg:p-4 text-center">
            <h4 className="font-semibold text-gray-800 mb-3 text-[20px]">
              Daily Weight Report
            </h4>
            <div className="space-y-4 w-full h-full">
              {/* card 1 */}
              <div className="flex flex-col space-y-2 bg-[#F8FAFB] rounded-lg shadow-md h-full w-full p-6">
                <div className="flex justify-between items-center flex-col lg:flex-row space-y-3 lg:space-y-0">
                  <div className="flex space-x-2">
                    <span className="p-4 rounded-full secondaryColorBg text-2xl">
                      <Image src={muscle} alt="muscle" height={33} width={33} />
                    </span>
                    <div className="flex flex-col space-y-1 text-left">
                      <span className="text-lg primaryColor font-medium">
                        Current Weight
                      </span>
                      <span className="font-bold text-xl">200 lbs</span>
                    </div>
                  </div>
                  <button className="text-lg font-medium rounded-2xl bg-[#37394A] text-white px-3 py-2">
                    Update
                  </button>
                </div>
                <div className="flex items-start bg-[#E9F5E0] justify-center p-4 rounded-md">
                  <FaInfoCircle size={30} className="self-center mr-2" />
                  <span className="primaryColor paraText text-left">
                    Remember to update this at least once a week so we can
                    adjust your plan to hit your goal
                  </span>
                </div>
              </div>
              {/* card 2 */}
              <div className="flex justify-between items-center bg-[#F8FAFB] p-4 rounded-md shadow-md flex-col lg:flex-row space-y-3 lg:space-y-0">
                <div className="flex space-x-2">
                  <span className="p-4 rounded-full secondaryColorBg text-2xl">
                    <Image src={abs} alt="abs" height={33} width={33} />
                  </span>
                  <div className="flex flex-col space-y-1 text-left">
                    <span className="text-lg primaryColor font-medium">
                      Target Weight
                    </span>
                    <span className="font-bold text-xl">320 lbs</span>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between paraText">
                    <span>272 lbs</span>
                    <span>88%</span>
                  </div>
                  <div>
                    {/* progress bar */}
                    <div className="h-2 rounded-full bg-amber-400 w-36 ">
                      <div className="h-2 rounded-full bg-[#8549FF] w-[88%] "></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NutritionCard>

        {/* AI Recommendations */}
        <NutritionCard
          title="AI Recommendations"
          description="Get personalized meal suggestions and nutrition advice to help you achieve your fitness goals."
        >
          <div className="relative flex justify-center items-center mt-2 lg:mt-2 w-full px-4 overflow-hidden">
            {/* Phone Placeholder */}
            <div className="relative w-full h-full flex items-end justify-end z-10 overflow-hidden">
              <Image
                src={FoodDetail}
                height={228}
                width={340}
                alt="Food Details"
              />
              {/* Fade Gradient at Bottom */}
            </div>

            {/* Floating Card calories */}
            <CardAnimate x={-170} y={-120}>
              <Image src={calories} alt="calories" height={112} width={122} />
            </CardAnimate>
            {/* Floating Card Carbohydrates*/}
            <CardAnimate x={-90} y={-50}>
              <Image
                src={Carbohydrates}
                alt="Carbohydrates"
                height={112}
                width={122}
              />
            </CardAnimate>
            {/* Floating protein Card*/}
            <CardAnimate x={-150} y={40}>
              <Image
                src={proteinCard}
                alt="protein Card"
                height={112}
                width={122}
              />
            </CardAnimate>
            {/* Floating fat card*/}
            <CardAnimate x={-90} y={120}>
              <Image src={fatCard} alt="fat Card" height={112} width={122} />
            </CardAnimate>
          </div>
        </NutritionCard>
      </div>
    </section>
  );
}
