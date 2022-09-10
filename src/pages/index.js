import React, { useState } from "react";
import Footer from "../components/Landing/Footer";
import HeroSection from "../components/Landing/HeroSection";
import InfoSection from "../components/Landing/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/Landing/InfoSection/Data";
import Users from "../components/Landing/Users";
import Navbar from "../components/Landing/Navbar";
import Sidebar from "../components/Landing/Sidebar";
const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Users />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Landing;
