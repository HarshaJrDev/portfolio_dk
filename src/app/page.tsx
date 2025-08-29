'use client';
import React, { useRef } from 'react';
import Projects from './componets/Project';
import Connect from './componets/Connect';
import MyStack from './componets/Mystack';
import Navbar from './componets/Navbar';
import HeroSection from './componets/HeroSection';

export default function Home() {
  // Refs for sections
  const homeRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const connectRef = useRef<HTMLElement>(null);

  return (
    <div
      className="flex flex-col justify-center min-h-screen px-6 md:px-16 text-white bg-[#1A1A1A] space-y-16 scroll-smooth"
      style={{
        backgroundImage: "radial-gradient(#333333 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      {/* ✅ Navbar fixed on top */}
      <Navbar
        homeRef={homeRef}
        stackRef={stackRef}
        projectsRef={projectsRef}
        connectRef={connectRef}
      />

      {/* ✅ Hero should start just below navbar */}
      <HeroSection ref={homeRef} />

      <MyStack ref={stackRef} />
      <Projects ref={projectsRef} />
      <Connect ref={connectRef} />
    </div>
  );
}
