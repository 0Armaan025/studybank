import React from "react";
import "./start-session.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import StudySessionMiddlePart from "./middle/StudySessionMiddle";

type Props = {};

const StartStudySession = (props: Props) => {
  return <>
    <Navbar/>

    <StudySessionMiddlePart/>
    {/* <Footer/> */}
  </>;
};

export default StartStudySession;
