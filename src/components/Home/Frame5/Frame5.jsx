import { useInView } from 'react-intersection-observer';
import Frame5Card from "./Frame5Card";
import IncreasingGraphWithMan from "../../../assets/IncreasingGraphWithMan.png";
import IncreasingGraph from "../../../assets/IncreasingGraph.png";
import SettingIcon2 from "../../../assets/SettingIcon2.png";
import BG5 from '../../../assets/BG45.png';

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
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24"
      style={{
        backgroundImage: `url(${BG5})`,
        backgroundRepeat:"no-repeat",
       backgroundSize:'cover',
       backgroundPositionY:"center"
      }}
    >
      <p
        ref={topRef}
        className={`text-center text-4xl md:text-8xl lg:text-6xl font-bold bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] inline-block text-transparent bg-clip-text pt-6 ${inViewTop ? 'animate-slideInFromTop' : ''}`}
      >
        POXPROTOCOL Features
      </p>
      <p
        ref={topRef}
        className={`text-white pt-6 pb-12 text-lg ${inViewTop ? 'animate-slideInFromTop' : ''}`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, eum
        excepturi magnam officia aut obcaecati dolore maxime temporibus
        voluptatum harum culpa praesentium placeat optio fuga adipisci vitae
        unde sunt, nobis consequuntur. Aliquid voluptatum laboriosam explicabo
        praesentium magnam beatae mollitia voluptas?
      </p>
      <div
        ref={bottomRef}
        className={`w-full flex flex-col md:flex-row lg:flex-row items-start justify-around ${inViewBottom ? 'animate-slideInFromBottom' : ''}`}
      >
        <Frame5Card img={IncreasingGraphWithMan} desc="HIGH-THROUGHPUT" />
        <Frame5Card img={IncreasingGraph} desc="HIGH-SCALABILITY" />
        <Frame5Card img={SettingIcon2} desc="HIGH-AVAILABILITY" />
      </div>
    </div>
  );
};

export default Frame5;
