"use client";

import { motion } from "framer-motion";
import Button from "../buttons/Button";

const cardVariants = {
  hidden: { x: 0, y: 0, opacity: 0, scale: 0.5 },
  visible: (custom) => ({
    x: custom.x,
    y: custom.y,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative bg-white">
      {/* Hero Content */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-6 py-12">
        <span className="text-xs uppercase bg-gray-100 text-gray-600 px-3 py-1 rounded-full mb-4">
          See what’s new on Diet AI
        </span>
        <h1 className="hero-heading leading-16">
          Track Your Nutrition Smarter <br /> And Simpler With AI.
        </h1>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Simply take a photo of your meal and let our advanced AI analyze the
          nutritional content. Track calories, macros, and achieve your health
          goals effortlessly.
        </p>
        <div className="max-w-2xl">
          <Button>{"Download on App Store"}</Button>
        </div>
      </div>

      {/* Phone + Floating Cards */}
      <div className="relative flex justify-center items-center mt-16 w-full">
        {/* Phone Placeholder */}
        <div className="relative w-64 h-96 bg-gradient-to-br from-white to-black/26 rounded-3xl shadow-lg flex items-center justify-center text-gray-500 z-10 overflow-hidden ">
          Phone
          {/* Fade Gradient at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Floating Cards */}
        <motion.div
          className="absolute w-28 h-16 bg-yellow-100 rounded-lg shadow flex items-center justify-center text-xs"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={{ x: -200, y: -120 }}
        >
          Calories
        </motion.div>

        <motion.div
          className="absolute w-32 h-20 bg-white border rounded-lg shadow flex items-center justify-center text-xs"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={{ x: -240, y: 40 }}
        >
          Daily Goals
        </motion.div>

        <motion.div
          className="absolute w-28 h-12 bg-green-100 rounded-lg shadow flex items-center justify-center text-xs z-20"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={{ x: -120, y: 160 }}
        >
          Carbs
        </motion.div>

        <motion.div
          className="absolute w-40 h-24 bg-white border rounded-lg shadow flex items-center justify-center text-xs"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={{ x: 220, y: -60 }}
        >
          Nutrition
        </motion.div>

        <motion.div
          className="absolute w-40 h-14 bg-orange-100 rounded-lg shadow flex items-center justify-center text-xs z-10"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={{ x: 160, y: 160 }}
        >
          Pancake Info
        </motion.div>
      </div>
    </section>
  );
}
