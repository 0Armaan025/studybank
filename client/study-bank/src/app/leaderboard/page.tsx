import Footer from "@/components/footer/Footer";
import Navbar from "@/components/nav/Navbar";
import React from "react";
import LeaderboardMiddlePart from "./leaderboardmiddle/leaderboardmiddlepart";

type Props = {};

const LeaderboardPage = (props: Props) => {
  return (
    <>
      <Navbar />
      <LeaderboardMiddlePart />
      {/* <Footer/> */}
    </>
  );
};

export default LeaderboardPage;
