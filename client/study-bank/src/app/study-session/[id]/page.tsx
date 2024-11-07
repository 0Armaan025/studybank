"use client";
import React, { useEffect, useState } from "react";
import "./ur-session.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";

const StudySession = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeRemaining, setTimeRemaining] = useState(3600); // Set time in seconds (e.g., 1 hour)

  useEffect(() => {
    // Update current time every second
    const clockInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Countdown timer
    const timerInterval = setInterval(() => {
      setTimeRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(clockInterval);
      clearInterval(timerInterval);
    };
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleCancel = () => {
    setTimeRemaining(0);
  };

  const formattedCurrentTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <>
      <Navbar />
      <div className="study-session">
        <div className="digital-clock">{formattedCurrentTime}</div>
        <div className="timer-container">
          <div className="time-remaining">
            Time Remaining: {formatTime(timeRemaining)}
          </div>
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudySession;
