import Footer from "@/components/footer/Footer";
import Navbar from "@/components/nav/Navbar";
import React from "react";
import LeaderboardMiddlePart from "./leaderboardmiddle/leaderboardmiddlepart";

type Props = {};

const LeaderboardPage = (props: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <LeaderboardMiddlePart />
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default LeaderboardPage;
