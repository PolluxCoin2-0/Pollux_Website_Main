import Card from "./Frame2Card";
import ArrowWhiteChart from "../../../assets/ArrowWhiteChart.png";
import ArrowBlackChart from "../../../assets/ArrowBlackChart.png";
import BarChart from "../../../assets/BarChart.png";

const Frame2 = () => {
  return (
    <div className="flex flex-row items-center py-24">
      <div className="w-1/4">
        <Card
          chartType={ArrowWhiteChart}
          BackgroundColor="#6D4313"
          BoldNumber="654545"
          Percentage="55"
          ArrowColor="green"
          Description="Total Number of Accounts"
          Timing="2"
        />
      </div>
      <div className="flex flex-col w-1/2 justify-evenly px-12">
        <div>
          <p className="h-10 bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] rounded-3xl px-8 py-12 w-full font-bold flex justify-center items-center text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
            numquam. Nobis quas, repudiandae praesentium in atque, sunt
            necessitatibus distinctio cum quod et, facere ipsam sed. Rerum enim
            amet ea quod!
          </p>
        </div>
        <div className="flex flex-row justify-evenly pt-12">
          <Card
            chartType={BarChart}
            BackgroundColor="#DE8D2A"
            BoldNumber="654545"
            Percentage="55"
            ArrowColor="green"
            Description="Transaction Count"
            Timing="5"
          />
          <Card
            chartType={BarChart}
            BackgroundColor="#62065E"
            BoldNumber="654545"
            Percentage="55"
            ArrowColor="green"
            Description="Block Height"
            Timing="8"
          />
        </div>
      </div>
      <div className="w-1/4">
        <Card
          chartType={ArrowBlackChart}
          BackgroundColor="#F3E48D"
          BoldNumber="654545"
          Percentage="55"
          ArrowColor="green"
          Description="Transfer amount of core tokens"
          Timing="10"
        />
      </div>
    </div>
  );
};

export default Frame2;
