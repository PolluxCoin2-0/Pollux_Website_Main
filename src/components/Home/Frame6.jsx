import OffChain from "../../assets/offchain.png";
import Net from "../../assets/net.png";

const Frame6 = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row items-center py-12">
    <div className="w-1/2">
      <p className="text-8xl text-white font-bold">POX NETWORK</p>
      <p className="text-white text-justify py-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, vero
        rem! Suscipit, doloribus pariatur veritatis expedita repudiandae
        voluptatem perspiciatis provident at voluptatibus inventore. Possimus
        distinctio sequi, commodi voluptatibus nulla odio!
      </p> 
      <button className="bg-gradient-to-r from-[#FDE3AD] to-[#FAA811] rounded-3xl px-3 py-2 font-bold">Learn more</button> 
    </div>
    <div className="flex relative flex-col  w-1/2 overflow-hidden">
      <img src={OffChain} alt="" className="" />
      <img src={Net} alt="" className="absolute top-0" />
    </div>
  </div>
  )
}

export default Frame6