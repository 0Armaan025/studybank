import React from "react";
import "./start-session.css";
import Navbar from "@/components/nav/Navbar";
import StudySessionMiddlePart from "./middle/StudySessionMiddle";
import Footer from "@/components/footer/Footer";

type Props = {};

const StartStudySession = (props: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <br />
      <StudySessionMiddlePart />
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default StartStudySession;
