import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="footer px-4 py-2 relative bg-gradient-to-br text-white from-[#B7B7B7]/[0.1] to-black flex flex-row justify-between items-start shadow-[rgba(0,0,0,0.25)] shadow-lg backdrop-blur-[5px]">
        <div
          className="font-light"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          Message Armaan
        </div>
        <div
          className="space-x-8 ml-12"
          style={{ fontFamily: "Outfit,sans-serif" }}
        >
          ©️ 2024 <span className="font-bold">StudyBank</span> | All Rights
          reserved.
        </div>
        <div className="font-light" style={{ fontFamily: "Outfit,sans-serif" }}>
          Anonymously msg. Armaan
        </div>
      </div>
    </>
  );
};

export default Footer;
