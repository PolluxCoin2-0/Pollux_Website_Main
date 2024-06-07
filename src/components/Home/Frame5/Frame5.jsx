import React from 'react';
import { useInView } from 'react-intersection-observer';
import Frame5Card from "./Frame5Card";
import IncreasingGraphWithMan from "../../../assets/IncreasingGraphWithMan.png";
import IncreasingGraph from "../../../assets/IncreasingGraph.png";
import SettingIcon from "../../../assets/SettingIcon.png";
import BG5 from '../../../assets/bg5.png';

const Frame5 = () => {
  const { ref: topRef, inView: inViewTop } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: bottomRef, inView: inViewBottom } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      className="flex flex-col justify-center items-center px-24"
      style={{
        backgroundImage: `url(${BG5})`,
        // backgroundSize: 'contain',
        // backgroundPosition: 'center'
      }}
    >
      <p
        ref={topRef}
        className={`text-8xl h-28 font-bold bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] inline-block text-transparent bg-clip-text pt-6 ${inViewTop ? 'animate-slideInFromTop' : ''}`}
      >
        POXPROTOCOL Features
      </p>
      <p
        ref={topRef}
        className={`text-white py-12 text-lg ${inViewTop ? 'animate-slideInFromTop' : ''}`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, eum
        excepturi magnam officia aut obcaecati dolore maxime temporibus
        voluptatum harum culpa praesentium placeat optio fuga adipisci vitae
        unde sunt, nobis consequuntur. Aliquid voluptatum laboriosam explicabo
        praesentium magnam beatae mollitia voluptas?
      </p>
      <div
        ref={bottomRef}
        className={`w-full flex items-start justify-around ${inViewBottom ? 'animate-slideInFromBottom' : ''}`}
      >
        <Frame5Card img={IncreasingGraphWithMan} desc="HIGH-THROUGHPUT" />
        <Frame5Card img={IncreasingGraph} desc="HIGH-SCALABILITY" className="middle-card" />
        <Frame5Card img={SettingIcon} desc="HIGH-AVAILABILITY" />
      </div>
    </div>
  );
};

export default Frame5;
