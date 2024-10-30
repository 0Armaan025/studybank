"use client";
import { Parallax } from "react-parallax";
import React, { useEffect, useState } from "react";
import "./middlepart.css";
import IMAGE_1 from "../../../public/image1.jpg";
import IMAGE_2 from "../../../public/image2.jpg";
import FeatureCard from "@/components/feature-card/FeatureCard";
import Footer from "@/components/footer/Footer";

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

          <FeatureCard
            title="Points into Money..."
            description="You get points for each session completed, you also get points by completing streaks/quests based on your class and board, and you can convert these points into money!"
            position="left"
            fontSize="2xl"
            imageUrl={IMAGE_2.src}
          />
          <FeatureCard
            title="Your own bank account..."
            description="You will have your own bank account, that you can use to withdraw or deposit cash or spend on some stuff on the shopping website, you can also transfer the money to your peers, you can also customize your profile."
            position="right"
            fontSize="2xl"
            imageUrl="https://cdn-icons-png.flaticon.com/256/14355/14355942.png"
          />
          <FeatureCard
            title="Leaderboard..."
            description="Leaderboard showcases the top people (public profile) with the most amount of money in their bank accounts."
            position="left"
            fontSize="3xl"
            imageUrl="https://cdn-icons-png.flaticon.com/256/8799/8799087.png"
          />
          <FeatureCard
            title="Contact Us..."
            description="You will have your own studycard that you can download and use it to buy things."
            position="right"
            fontSize="2xl"
            imageUrl="https://cdn-icons-png.flaticon.com/256/9769/9769373.png"
          />
          <FeatureCard
            title="Your custom profile...."
            description="You can customize almost everything in your profile (Your bio, your status, your name, your username, banner, add custom animated pfps, and more custom things!"
            position="left"
            fontSize="2xl"
            imageUrl="https://cdn-icons-png.flaticon.com/256/4825/4825112.png"
          />
        </div>
      </div>
    </>
  );
};

export default MiddlePart;
