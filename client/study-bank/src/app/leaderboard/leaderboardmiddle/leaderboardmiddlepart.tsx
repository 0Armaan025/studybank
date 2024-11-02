import React from "react";
import "./leaderboardmiddlepart.css";
import LeaderboardTile from "@/components/leaderboard-tile/LeaderboardTile";

type Props = {};

const LeaderboardMiddlePart = (props: Props) => {
  return (
    <>
      <div className="leaderboardMiddlePart ">
        <br />
        <h3
          className="text-7xl text-white ml-4 "
          style={{ fontFamily: "Indie Flower, cursive" }}
        >
          Check out who's at the #1
        </h3>

        <LeaderboardTile />
      </div>
    </>
  );
};

export default LeaderboardMiddlePart;
