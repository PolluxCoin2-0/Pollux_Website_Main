import { useInView } from "react-intersection-observer";
import Frame5Card from "./Frame5Card";
import IncreasingGraphWithMan from "../../../assets/IncreasingGraphWithMan.webp";
import IncreasingGraph from "../../../assets/IncreasingGraph.webp";
import SettingIcon2 from "../../../assets/SettingIcon2.webp";
import BG5 from "../../../assets/BG45.webp";

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
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "center",
      }}
    >
      <p
        ref={topRef}
        className={`text-center text-4xl md:text-8xl lg:text-8xl font-bold bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] inline-block text-transparent bg-clip-text pt-6 ${
          inViewTop ? "animate-slideInFromTop" : ""
        }`}
      >
        POXPROTOCOL FEATURES
      </p>
      <p
        ref={topRef}
        className={`text-white pt-6 pb-12 text-2xl ${
          inViewTop ? "animate-slideInFromTop" : ""
        }`}
      >
        POXPROTOCOL stands as the foremost decentralized blockchain protocol
        globally.
      </p>
      <div
        ref={bottomRef}
        className={`w-full flex flex-col md:flex-row lg:flex-row items-start justify-around ${
          inViewBottom ? "animate-slideInFromBottom" : ""
        }`}
      >
        <div className="sm:w-full md:w-[33%] lg:w-[33%] xl:w-[33%] 2xl:w-[33%]">
        <Frame5Card
          img={IncreasingGraphWithMan}
          desc="HIGH-THROUGHPUT"
          para="Discover the capabilities of our upgraded network, offering unmatched transaction speeds ideal for everyday use. The POX blockchain's 
          high throughput guarantees swift and efficient transactions with every operation."
        />
        </div>
        <div className="sm:w-full md:w-[33%] lg:w-[33%] xl:w-[33%] 2xl:w-[33%]">

        <Frame5Card img={IncreasingGraph} desc="HIGH-SCALABILITY" para="With robust scalability and smart contract capabilities, applications can be 
        deployed on POX in various ways, ensuring POXPROTOCOL can support a large user community." /></div>
        <div className="sm:w-full md:w-[33%] lg:w-[33%] xl:w-[33%] 2xl:w-[33%]">
        <Frame5Card
          img={SettingIcon2}
          desc="HIGH-FLEXIBILITY"
          para="POX blockchain caters to various applications from DeFi to gaming, offering a versatile platform ideal for diverse projects. 
          Whether your target audience is a small community or millions of users, POX's flexibility ensures seamless and efficient operation at any scale."
        /></div>
      </div>
    </div>
  );
};

export default Frame5;
