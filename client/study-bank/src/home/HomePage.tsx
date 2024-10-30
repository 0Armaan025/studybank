"use client";
import Navbar from "@/components/nav/Navbar";
import React from "react";
import MiddlePart from "./middle/MiddlePart";
import Footer from "@/components/footer/Footer";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <MiddlePart />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
