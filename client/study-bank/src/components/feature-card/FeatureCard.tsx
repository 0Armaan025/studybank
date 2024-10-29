"use client";
import React from "react";
// import font from "";
import localFont from "next/font/local";

const arialFont = localFont({ src: "../../app/fonts/Arial.ttf" });

type Props = {};

const FeatureCard = (props: Props) => {
  return (
    <div className={`featureCard flex flex-row justify-between items-start `}>
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://img.freepik.com/premium-photo/illustration-kids-education-activity_1305298-26481.jpg?ga=GA1.1.1231475806.1729150554&semt=ais_hybrid"
          alt="studyImage"
          className="w-[20rem] rounded-md h-[20rem]"
        />
      </div>
      <div className="flex flex-col justify-center items-start ml-32 text-white   mt-8">
        <h3 className={`text-4xl ${arialFont.className}`}>
          Study with pomodoro sessions...
        </h3>
        <h4
          className="w-[38rem] text-3xl font-light mt-4"
          style={{ fontFamily: "Bellota text" }}
        >
          Concentrated pomodoro sessions will help you to focus and continue
          studying any topic effectively.
        </h4>
      </div>
    </div>
  );
};

export default FeatureCard;
