import Card from "./Frame2Card";
import ArrowWhiteChart from "../../../assets/ArrowWhiteChart.png";
import ArrowBlackChart from "../../../assets/ArrowBlackChart.png";
import BarChart from "../../../assets/BarChart.png";

const Frame2 = () => {
  return (
    <div className="flex flex-col items-center p-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full px-4 md:px-8">
        <div className="md:col-span-1">
          <Card
            chartType={ArrowWhiteChart}
            BackgroundColor="#6D4313"
            BoldNumber="654,545"
            Percentage="55"
            ArrowColor="green"
            Description="Total Number of Accounts"
            Timing="2"
          />
        </div>
        <div className="-mt-[2.5%] md:col-span-2 flex flex-col justify-between space-y-8">
          <div className="bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] rounded-3xl p-8 text-white font-bold text-center shadow-md h-full flex items-center">
            <p className="text-black text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
              numquam. Nobis quas, repudiandae praesentium in atque, sunt
              necessitatibus distinctio cum quod et, facere ipsam sed. Rerum enim
              amet ea quod!
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
            <Card
              chartType={BarChart}
              BackgroundColor="#DE8D2A"
              BoldNumber="654,545"
              Percentage="55"
              ArrowColor="green"
              Description="Transaction Count"
              Timing="5"
            />
            <Card
              chartType={BarChart}
              BackgroundColor="#62065E"
              BoldNumber="654,545"
              Percentage="55"
              ArrowColor="green"
              Description="Block Height"
              Timing="8"
            />
          </div>
        </div>
        <div className="md:col-span-1">
          <Card
            chartType={ArrowBlackChart}
            BackgroundColor="#F3E48D"
            BoldNumber="654,545"
            Percentage="55"
            ArrowColor="green"
            Description="Transfer Amount of Core Tokens"
            Timing="10"
          />
        </div>
      </div>
    </div>
  );
};

export default Frame2;
