"use client"

import Image from "next/image";
import CustomButton from './CustomButton';
import { motion } from "framer-motion";

const Hero = () => {
   const handleScroll = () => {};

  return (
    <div className="hero">
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 pt-36 padding-x"
      >
        <h1 className="hero__title">
          Discover, reserve, or lease a vehicle swiftly and effortlessly!
        </h1>
        <p className="hero__subtitle">
          Simplify your car rental journey with our hassle-free booking procedure.
        </p>
        <CustomButton
          title="Discover Vehicles"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </motion.div>
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="hero__image-container"
      >
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </motion.div>
    </div>
  );
};

export default Hero;

