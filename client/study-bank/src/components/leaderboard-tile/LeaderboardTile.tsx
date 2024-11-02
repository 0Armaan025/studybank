import React from "react";

type Props = {};

const LeaderboardTile = (props: Props) => {
  return (
    <>
      <div className="leaderboardTile flex flex-row justify-center p-2 bg-black border-2 border-gray-200 rounded-md items-start">
        <h2 className="font-bold text-red-500 text-xl">#1</h2>
        <h2
          className="font-bold text-white text-xl ml-2"
          style={{ fontFamily: "Poppins" }}
        >
          Armaan obviously
        </h2>
      </div>
    </>
  );
};

export default LeaderboardTile;
