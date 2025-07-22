'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full px-6 md:px-16"
    >
      <div className="max-w-sm mx-auto backdrop-blur-md bg-white/5 border border-white/10 px-8 md:px-10 py-2 rounded-2xl flex items-center justify-between text-white shadow-md">
        <div className="flex gap-6 md:gap-8 text-base md:text-lg font-medium">
          <Link href="#home" className="hover:opacity-70 transition">Home</Link>
        </div>

        <motion.div
          whileHover={{
            rotate: 360,
            transition: {
              repeat: Infinity,
              duration: 1,
              ease: 'linear',
            },
          }}
          className="w-12 md:w-14 md:h-14 p-1 border-2 border-white/50 rounded-full overflow-hidden shadow-md cursor-pointer"
        >
          <Image
            src="/koti.png"
            alt="Koti Duddu Logo"
            width={36}
            height={36}
            className="object-cover w-full h-full rounded-full"
          />
        </motion.div>

        <div className="flex gap-6 md:gap-8 text-base md:text-lg font-medium">
          <Link href="#projects" className="hover:opacity-70 transition">Projects</Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
