"use client";
import Navbar from "@/components/nav/Navbar";
import React from "react";
import MiddlePart from "./middle/MiddlePart";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <Navbar />
      <MiddlePart />
    </div>
  );
};

export default HomePage;
