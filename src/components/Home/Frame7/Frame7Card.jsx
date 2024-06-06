import React from "react";
import Logo from "../../../assets/Logo.png";

const Frame7Card = ({ img, desc, title }) => {
  return (
    <div className="frame7-card bg-white shadow-lg p-6 flex flex-col justify-between h-full mx-2">
      <img src={Logo} alt={title} className="w-full mb-4" />
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-700 text-justify">{desc}</p>
    </div>
  );
};

export default Frame7Card;