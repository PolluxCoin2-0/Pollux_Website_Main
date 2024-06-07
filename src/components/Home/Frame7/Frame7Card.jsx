import React from "react";

const Frame7Card = ({ img, desc, title }) => {
  return (
    <div className="frame7-card text-white bg-[#271B3F] border-[1px] shadow-lg flex flex-col justify-center items-center py-28 px-16">
    {img &&  <img src={img} alt={title} className="w-[45%] mb-16" />}
      <h3 className="text-2xl font-bold mb-12">{title}</h3>
      <p className="text-justify">{desc}</p>
    </div>
  );
};

export default Frame7Card;