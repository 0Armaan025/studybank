"use client";
import React, { useEffect, useState } from "react";

import localFont from "next/font/local";

const arialFont = localFont({ src: "../../app/fonts/Arial.ttf" });

type Props = {
  position?: string;
  title: string;
  description: string;
  fontSize?: string;
  imageUrl?: string;
};

const FeatureCard = (props: Props) => {
  const { fontSize = "3xl" } = props;

  return (
    <div
      className={`featureCard flex flex-row justify-between items-start mb-20 `}
    >
      {props.position === "left" ? (
        <>
          <div className="flex flex-col justify-center items-center">
            <img
              src={props.imageUrl}
              alt="studyImage"
              className="w-[18rem] rounded-lg h-[18rem]"
            />
          </div>
          <div className="flex flex-col justify-center items-start ml-32 text-white   mt-8">
            <h3 className={`text-4xl ${arialFont.className}`}>{props.title}</h3>
            <h4
              className={`w-[38rem] text-${props.fontSize} font-light mt-4`}
              style={{ fontFamily: "Bellota text" }}
            >
              {props.description}
            </h4>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center items-start mb-20 ml-4 text-white   mt-8">
            <h3 className={`text-4xl ${arialFont.className}`}>{props.title}</h3>
            <h4
              className={`w-[38rem] text-${props.fontSize} font-light mt-4`}
              style={{ fontFamily: "Bellota text" }}
            >
              {props.description}
            </h4>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={props.imageUrl}
              alt="studyImage"
              className="w-[18rem] rounded-lg h-[18rem]"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default FeatureCard;
