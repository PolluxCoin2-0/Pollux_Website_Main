import React from 'react';
import Insights from '../../assets/Insights.png';
import BG4 from '../../assets/bg4.png';

const Frame4 = () => {
  return (
    <div 
      className="flex flex-col md:flex-row lg:flex-row items-center py-12 px-24" 
      style={{ 
        backgroundImage: `url(${BG4})`, 
        // backgroundSize: 'contain',
        // backgroundPosition: 'center' 
      }}
    >
      <div className="flex justify-start w-full md:w-1/2">
        <img src={Insights} alt="Insights" className="w-full md:w-[90%] object-contain" />
      </div>
      <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0">
        <p className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] text-transparent bg-clip-text">
          Insights
        </p>
        <p className="text-white text-lg text-justify py-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, vero rem! Suscipit, doloribus pariatur veritatis expedita repudiandae voluptatem perspiciatis provident at voluptatibus inventore. Possimus distinctio sequi, commodi voluptatibus nulla odio!
        </p>
        <button className="bg-gradient-to-r from-[#FDE3AD] to-[#FAA811] rounded-full px-6 py-3 font-bold text-gray-900 transition duration-300 ease-in-out transform hover:scale-105">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Frame4;
