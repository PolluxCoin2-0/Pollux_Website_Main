import React from 'react';
import { useInView } from 'react-intersection-observer';
import FrameRight from "../../assets/Frame1Right.png";
import BG1 from "../../assets/BG.png";

const Frame1 = () => {
  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col md:flex-row lg:flex-row items-center px-24 min-h-screen"
    style={{backgroundImage: `url(${BG1})`,}}>
      <div 
        className={`w-1/2 ${leftInView ? 'animate-slideInFromLeft' : ''}`} 
        ref={leftRef}
      >
        <p className="text-8xl text-white font-bold">DECENTRALIZE</p>
        <p className="text-8xl  font-bold bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] inline-block text-transparent bg-clip-text">THE WEB</p>
        <p className="text-white text-justify py-12 text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, vero
          rem! Suscipit, doloribus pariatur veritatis expedita repudiandae
          voluptatem perspiciatis provident at voluptatibus inventore. Possimus
          distinctio sequi, commodi voluptatibus nulla odio!
        </p> 
        <button className="bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] rounded-3xl px-4 py-3 font-bold">Learn more</button> 
      </div>
      <div 
        className={`flex flex-col w-1/2 ${rightInView ? 'animate-slideInFromRight' : ''}`} 
        ref={rightRef}
      >
        <img src={FrameRight} alt="" className=" w-[80%] h-[65%]" />
      </div>
    </div>
  );
};

export default Frame1;
