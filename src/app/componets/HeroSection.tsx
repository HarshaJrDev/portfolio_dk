'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { TiVendorAndroid } from 'react-icons/ti';
import { IoIosAppstore } from 'react-icons/io';

const techStack = [
  { icon: <TiVendorAndroid />, color: "text-green-400" },
  { icon: <IoIosAppstore />, color: "text-green-500" },
];

const HeroSection = () => {
  return (
    <div id="home" className="flex flex-col items-center mt-24 w-full max-w-5xl mx-auto px-2 scroll-mt-24">
    <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full gap-10 md:gap-24">


        {/* Left: Name and Role */}
        <section className="flex flex-col text-center md:text-left space-y-6 max-w-xl">
          <h1 className="text-3xl md:text-6xl font-serif font-bold">
            {"Hello, I'm Koti"}
          </h1>

          <div className='flex flex-row gap-4 items-center rounded-2xl'>
            <h2 className="text-xl md:text-3xl text-white/80 font-serif">
              React Native Developer
            </h2>

            <motion.div
              className="flex flex-wrap gap-2 justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
            >
              {techStack.map((tech, i) => (
                <motion.div
                  key={i}
                  className={`text-5xl md:text-5xl ${tech.color} shadow-lg backdrop-blur-md`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {tech.icon}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Right: Spinning Globe Image */}
        <div className="relative w-32 h-32 md:w-32 md:h-32 border-0 border-white/20 shadow-lg rounded-full">
          <svg
            viewBox="0 0 100 100"
            className="absolute w-full h-full animate-[spin_7s_linear_infinite]"
            aria-hidden="true"
          >
            <defs>
              <path
                id="circlePath"
                d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
              />
            </defs>

            <text fontSize="9" fill="#aaa">
              <textPath href="#circlePath" startOffset="0%">
                AVAILABLE FOR WORK •
              </textPath>
            </text>

            <text fontSize="9" fill="#aaa" transform="rotate(180,50,50)">
              <textPath href="#circlePath" startOffset="0%">
                AVAILABLE FOR WORK •
              </textPath>
            </text>
          </svg>

          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black">
            <Image
              src="/propic.jpeg"
              alt="Available for Work Globe"
              width={100}
              height={100}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
