"use client";

import React from "react";
import "./aboutmiddlepart.css";

import localFont from "next/font/local";

const segoeUiFont = localFont({ src: "../../../app/fonts/Segoe.ttf" });

type Props = {};

const AboutMiddlePart = (props: Props) => {
  return (
    <>
      <div className="aboutMiddlePart flex flex-col justify-center items-start">
        <h2
          className={`text-7xl ml-4 mt-4 font-semibold text-white p-4 ${segoeUiFont.className}`}
          style={{ fontFamily: "Irish Grover, system-ui" }}
        >
          What is this?
        </h2>
        <h4
          className={`text-white  w-[50rem] ml-6 text-[20px] p-2 font-light ${segoeUiFont.className}`}
        >
          This is something cool to encourage people to study 😎, and a bank
          simulation system, you get points when you study, you can convert
          points into money, you can withdraw, deposit and buy things, or even
          publish some stuff for the public (notes and stuff), get yourself
          quizzed or even have a credit card(StudyCard).
        </h4>

        <h2
          className={`text-7xl ml-4 mt-6 font-semibold text-white p-4 ${segoeUiFont.className}`}
          style={{ fontFamily: "Irish Grover, system-ui" }}
        >
          Who made this and why?
        </h2>
        <h4
          className={`text-white  w-[50rem] ml-6 text-[20px] p-2 font-light ${segoeUiFont.className}`}
        >
          This was made by <span className="font-bold">Armaan 😎 :-D</span> and
          it was made just for fun!
        </h4>
      </div>
      <center>
        <img src="./logo.svg" className="h-36 w-64" />
      </center>
    </>
  );
};

export default AboutMiddlePart;
