
'use client';
import React from 'react';
import Projects from './componets/Project';
import Connect from './componets/Connect';
import MyStack from './componets/Mystack';
import Navbar from './componets/Navbar';
import HeroSection from './componets/HeroSection';


export default function Home() {
  return (
    <div
      className="flex flex-col justify-center min-h-screen px-6 md:px-16 pt-[80px] text-white bg-[#1A1A1A] space-y-16 scroll-smooth"
      style={{
        backgroundImage: "radial-gradient(#333333 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <Navbar />
      <HeroSection />
      <MyStack />
      <Projects />
      <Connect />

    </div>
  );
}
