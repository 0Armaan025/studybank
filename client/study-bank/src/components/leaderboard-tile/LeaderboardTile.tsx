import React from "react";

type Props = {};

const LeaderboardTile = (props: Props) => {
  return (
    <>
      <div className="leaderboardTile flex hover:scale-105 transition-all hover:cursor-pointer flex-row justify-center p-2 bg-gradient-to-r from-gray-900 to-black border-2 border-gray-200 rounded-lg mx-12 my-4 items-start">
        <h2 className="font-bold text-red-500 text-xl">#1</h2>
        <h2
          className="font-bold text-white text-xl ml-2"
          style={{ fontFamily: "Poppins" }}
        >
          Armaan obviously
        </h2>
        <div className="ml-auto flex flex-row justify-center items-end ">
          <h4
            className="text-xl text-white mr-2"
            style={{ fontFamily: "Poppins" }}
          >
            4000 🪙
          </h4>
        </div>
      </div>
    </>
  );
};

export default LeaderboardTile;
