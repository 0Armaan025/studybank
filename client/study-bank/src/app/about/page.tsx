import React from "react";
import "./aboutpage.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import AboutMiddlePart from "./about-middle/AboutMiddlePart";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <>
      <Navbar />
      <AboutMiddlePart />
      <Footer />
    </>
  );
};

export default AboutPage;
