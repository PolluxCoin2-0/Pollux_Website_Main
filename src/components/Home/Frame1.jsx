import { useInView } from 'react-intersection-observer';
import FrameRight from "../../assets/Frame1Right.png";
import Navbar from '../../layout/Navbar';

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
    <div className="fram1-bg px-6 md:px-12 lg:px-12 min-h-screen pb-32 md:pb-0 lg:pb-0 xl:pb-0 2xl:pb-0">
      <Navbar/>
      <div className='flex flex-col-reverse md:flex-row items-center px-0 md:px-12 lg:px-12'>
        <div
          className={`w-full md:w-1/2 ${leftInView ? 'animate-slideInFromLeft' : ''}`} 
          ref={leftRef}
        >
          <p className="text-4xl md:text-6xl lg:text-[5.5rem] text-white font-bold tracking-wide">DECENTRALIZE</p>
          <p className="text-4xl md:text-6xl lg:text-[5.5rem] font-bold bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] inline-block text-transparent bg-clip-text">THE WEB</p>
          <p className="text-white text-justify py-6 md:py-12 text-base md:text-xl">
          Pollux is an open-source blockchain platform optimized for smart contracts, ensuring seamless compatibility with Ethereum. It boasts superior transaction speeds compared to Ethereum, thanks to its unique consensus mechanism. Developers benefit from a fast and efficient experience on Pollux, enabling smooth blockchain operations.
          </p> 
          <a href='https://poxscan.io/'><button className="bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] rounded-3xl px-4 py-3 font-bold">Learn more</button> </a>
        </div>
        <div 
          className={`flex justify-center md:justify-end w-full md:w-1/2 ${rightInView ? 'animate-slideInFromRight' : ''}`} 
          ref={rightRef}
        >
          <img src={FrameRight} alt="" className="w-full h-auto max-h-[400px] md:max-h-[65%]" />
        </div>
      </div>
    </div>
  );
};

export default Frame1;
