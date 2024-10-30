"use client";
import React, { useEffect, useState } from "react";
import "./middlepart.css";
import IMAGE_1 from "../../../public/image1.jpg";
import FeatureCard from "@/components/feature-card/FeatureCard";

type Props = {};

const MiddlePart = (props: Props) => {
  return (
    <>
      <div
        className="middlePart w-full"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <br />
        <h2
          className="font-semibold  text-white"
          style={{ fontFamily: "Leckerli One, cursive", fontSize: "4rem" }}
        >
          Take studying and fun
        </h2>
        <h3
          style={{
            fontFamily: "Liu Jian Mao Cao,cursive",
            fontSize: "3.5rem",
            color: "#DFF588",
          }}
          className="font-medium text-[#DFF588]"
        >
          to the <span className="underline underline-offset-auto">next</span>{" "}
          level
        </h3>
        <div className="centerBtns flex flex-row justify-center items-center">
          <button className="text-white font-bold py-2 px-4 rounded custom-gradient custom-shadow">
            Get started
          </button>
          <button className="text-white  font-bold py-2 px-4 rounded custom-gradient2 custom-shadow2">
            Learn more
          </button>
        </div>
        <br />
        <br />
        <div
          className="flex justify-center "
          style={{ display: "flex", flexDirection: "column" }}
        >
          <hr
            className="w-screen"
            style={{
              width: "70rem",
              height: "1px",
              marginTop: "12px",
              backgroundColor: "gray",
              border: "1px solid white",
            }}
          />
          <br />
          <center className="">
            <h3
              className="text-white font-semibold text-[58px]"
              style={{ fontFamily: "Outfit, sans-serif", fontSize: "38px" }}
            >
              A few features....
            </h3>
          </center>
          <br />
          <FeatureCard
            description="Concentrated pomodoro sessions will help you to focus and continue
          studying any topic effectively."
            position="left"
            fontSize="3xl"
            title="Study with pomodoro sessions..."
            imageUrl="https://img.freepik.com/premium-photo/illustration-kids-education-activity_1305298-26481.jpg?ga=GA1.1.1231475806.1729150554&semt=ais_hybrid"
          />

          <FeatureCard
            title="AI study progress checker..."
            description="you will be requested to either upload your study work or score 92%+ on a quiz based on the topic you just did (you can upload a picture/pdf) to get a quiz from or it will ask using AI."
            position="right"
            fontSize="2xl"
            imageUrl={IMAGE_1.src}
          />
        </div>
      </div>
    </>
  );
};

export default MiddlePart;
