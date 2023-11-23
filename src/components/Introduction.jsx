"use client";
import React from 'react';
import { fadeIn } from '@/utils/motionTransitions';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Introduction = () => {
  return (
    <div className="w-full z-10 mt-20">
      <div className="w-full h-full ">
        <div className="container grid items-center h-full px-5 mx-auto md:grid-cols-2 md:text-left md:mt-56 lg:mt-2 ">
          <motion.div className="w-auto h-auto mx-auto mr-3 mt-20 md:hidden md:col-span-1" variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit="hidden">
            <Image src="/assets/Robott.png" priority width="600" height="600" alt="Avatar" />
          </motion.div>

          <motion.div variants={fadeIn('left', 0.5)} initial="hidden" animate="show" exit="hidden">
            <h1 className="font-bold p-2 text-3xl text-center md:text-6xl md:mt-24">Juan Colque <br /><span className="text-[#f5741c]"> Developer</span></h1>

            <div className="flex flex-row items-center gap-1 justify-center mt-5 md:flex-row md:gap-3">
              <a href="/works" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                Ver proyectos
              </a>
              <a href="mailto:jdiazcolque14@gmail.com" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-white/50">
                Contacta conmigo
              </a>
            </div>
          </motion.div>

          <motion.div className="hidden w-auto h-auto mx-auto md:block md:col-span-1" variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit="hidden">
            <Image src="/assets/Robott.png" priority width="800" height="600" alt="Avatar" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
