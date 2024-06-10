import React from 'react';
import { useInView } from 'react-intersection-observer';
import Insights from '../../assets/Insights.png';
import BG4 from '../../assets/BG45.png';

const Frame4 = () => {
  const { ref: leftRef, inView: inViewLeft } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: rightRef, inView: inViewRight } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row items-center py-12 px-6 md:px-12 lg:px-24"
      style={{
        backgroundImage: `url(${BG4})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        backgroundPositionY: "top"
      }}
    >
      <div
        className={`flex justify-start w-full md:w-1/2 ${inViewLeft ? 'animate-slideInFromLeft' : ''}`}
        ref={leftRef}
      >
        <img src={Insights} alt="Insights" className="w-full md:w-[90%] object-contain" />
      </div>
      <div
        className={`w-full md:w-1/2 px-4 mt-8 md:mt-0 ${inViewRight ? 'animate-slideInFromRight' : ''}`}
        ref={rightRef}
      >
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] text-transparent bg-clip-text">
          Insights
        </p>
        <p className="text-white text-base md:text-lg text-justify py-6">
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
