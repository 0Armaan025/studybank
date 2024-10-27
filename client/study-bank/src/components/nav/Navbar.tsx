import React from "react";
import "./navbar.css";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="navbar flex justify-between items-center p-1 ">
      <div className="flex items-center">
        <img src="./logo.svg" alt="logo" className="w-32 h-16" />
      </div>
      <div
        className="flex space-x-4 mr-16 text-md cursor-pointer text-white font-[var(--font-helvetica)]"
        style={{ fontFamily: "var(--font-helvetica)" }}
      >
        <span className="hover:underline hover:decoration-white transition-all">
          home{" "}
        </span>

        <span className="hover:underline hover:decoration-white transition-all">
          leaderboard{" "}
        </span>

        <span className="hover:underline hover:decoration-white transition-all">
          study{" "}
        </span>
      </div>

      <div className="mr-4">
        <img
          src="https://cdn-icons-png.flaticon.com/128/4322/4322991.png"
          alt="avatar icon"
          className="h-9 w-9 cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
