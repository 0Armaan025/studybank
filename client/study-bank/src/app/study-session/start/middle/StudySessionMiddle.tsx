import React from "react";
import "./studysessionmiddle.css";

type Props = {};

const StudySessionMiddlePart = (props: Props) => {
  return (
    <>
      <div className="studySessionMiddlePart flex flex-col justify-center items-center">
        <h3
          className="text-7xl text-white mt-8"
          style={{ fontFamily: "Irish Grover, cursive" }}
        >
          Let's start a study session
        </h3>
        <br />
        <center>
          <div className="flex flex-col justify-center items-start bg-[#131313] p-4 rounded-md border-2 border-[#5F5F5F]">
            <h3
              //idk what
              className="text-white text-xl"
              style={{ fontFamily: "Poppins" }}
            >
              Enter a title
            </h3>
            <input
              type="text"
              className="w-full mt-2 rounded-md bg-white px-4 py-2 "
            />
            <br />

            <h3
              className="text-white text-xl"
              style={{ fontFamily: "Poppins" }}
            >
              Enter timer (in minutes)
            </h3>
            <input
              type="number"
              className=" rounded-md mt-2 w-[20rem] bg-white px-3 py-2 "
            />
            <br />
            <input
              type="button"
              value="Start!"
              className="w-full rounded-lg px-4 py-2 text-2xl cursor-pointer hover:bg-red-500 transition-all text-white bg-red-600"
              style={{ fontFamily: "Irish Grover, cursive" }}
            />
          </div>
        </center>
      </div>
    </>
  );
};

export default StudySessionMiddlePart;
