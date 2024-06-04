import { FaArrowUpLong, FaRegClock } from "react-icons/fa6";

const Card = ({chartType,BackgroundColor,BoldNumber,Percentage, ArrowColor, Description,Timing}) => {
  return (
    <div className="relative ">
        <div className="relative bg-white rounded-3xl px-4 pt-32 py-6">
        <p className="font-bold text-black text-lg">{BoldNumber}</p>
        <p className="py-1">{Description}</p>
        <div className="flex flex-row items-center pb-2">
          <FaArrowUpLong color={ArrowColor} />
          <p>{Percentage}%</p>
          <p>increase in today</p>
        </div>
        <div className="border-[0.5px] border-slate-400 w-full my-2"></div>
        <div className="flex flex-row items-center space-x-3 ">
          <FaRegClock />
          <p>{Timing} sec ago</p>
        </div>
        
      </div>
      <div className="flex justify-center items-center w-[90%] h-32 absolute left-0 -top-4 bg-slate-400 rounded-3xl p-8"
        style={{backgroundColor:`${BackgroundColor}`}}>
      <img src={chartType} alt="" />
      </div>
      </div>
  );
};

export default Card;
