import React from "react";
import "./middlepart.css";
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
              width: "80rem",
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
          <FeatureCard />
        </div>
      </div>
    </>
  );
};

export default MiddlePart;
