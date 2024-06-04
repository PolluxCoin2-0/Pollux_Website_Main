import Frame5Card from "./Frame5Card";
import IncreasingGraphWithMan from "../../../assets/IncreasingGraphWithMan.png";
import IncreasingGraph from "../../../assets/IncreasingGraph.png";
import SettingIcon from "../../../assets/SettingIcon.png";

const Frame5 = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-8xl h-28 font-bold bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] inline-block text-transparent bg-clip-text">
        POXPROTOCOL Features
      </p>
      <p className="text-white py-6 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, eum
        excepturi magnam officia aut obcaecati dolore maxime temporibus
        voluptatum harum culpa praesentium placeat optio fuga adipisci vitae
        unde sunt, nobis consequuntur. Aliquid voluptatum laboriosam explicabo
        praesentium magnam beatae mollitia voluptas?
      </p>
      <div className="w-full flex items-center justify-around">
      <Frame5Card img={IncreasingGraphWithMan} desc="HIGH-THROUGHPUT"/>
      <Frame5Card img={IncreasingGraph} desc="HIGH-SCALABILITY"/>
      <Frame5Card img={SettingIcon} desc="HIGH-AVAILABILITY"/>
      </div>
    </div>
  );
};

export default Frame5;
