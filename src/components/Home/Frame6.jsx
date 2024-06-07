import React from 'react';
import { useInView } from 'react-intersection-observer';
import OffChain from "../../assets/offchain.png";
import Net from "../../assets/net.png";
import BG from "../../assets/BG.png";

const Frame6 = () => {
  const { ref: leftRef, inView: inViewLeft } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: rightRef, inView: inViewRight } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen flex flex-col md:flex-row lg:flex-row items-center py-12 px-24"
    style={{backgroundImage: `url(${BG})`,}}>
      <div
        ref={leftRef}
        className={`w-1/2 px-12 ${inViewLeft ? 'animate-slideInFromLeft' : ''}`}
      >
        <p className="text-8xl font-bold bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] inline-block text-transparent bg-clip-text">POX NETWORK</p>
        <p className="text-white text-lg text-justify py-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, vero
          rem! Suscipit, doloribus pariatur veritatis expedita repudiandae
          voluptatem perspiciatis provident at voluptatibus inventore. Possimus
          distinctio sequi, commodi voluptatibus nulla odio!
        </p> 
        <button className="bg-gradient-to-r from-[#FDE3AD] to-[#FAA811] rounded-3xl px-3 py-2 font-bold">Learn more</button> 
      </div>
      <div
        ref={rightRef}
        className={`flex relative flex-col w-1/2 overflow-hidden px-12 ${inViewRight ? 'animate-slideInFromRight' : ''}`}
      >
        <img src={OffChain} alt="OffChain" className="" />
        <img src={Net} alt="Net" className="absolute top-0" />
      </div>
    </div>
  );
};

export default Frame6;
