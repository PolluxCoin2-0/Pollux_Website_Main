import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";

const Frame7Card = ({ img, desc, title, isActive }) => {
  return (
    <div className="frame7-card text-white bg-[#271B3F] border-[1px] shadow-lg flex flex-col justify-center items-center py-28 px-16">
      {img && <img src={img} alt={title} className="w-[45%] mb-16" />}
      <h3 className="text-2xl font-bold mb-12">{title}</h3>
      <p className="text-justify mb-12">{desc}</p>
      {isActive && (
        <button className=" font-bold  rounded-3xl flex items-center">
          <div className="bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] pl-[1.5px] py-[1.5px] rounded-l-3xl space-x-4 flex items-center">
            <span className="bg-[#271B3F] py-3 px-4 rounded-l-3xl">TO SEE MORE</span>
          </div>
          <div className="bg-[#CB942C] rounded-r-3xl p-3.5 pt-4 flex items-center border-r-[2px] border-y-[2px]">
            <BiSolidRightArrow size={18} />
          </div>
        </button>
      )}
    </div>
  );
};

export default Frame7Card;
