import LogoImage from "../assets/Logo.png";
import { useInView } from "react-intersection-observer";
import { MdMenu } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const { ref: topRef, inView: inViewTop } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <nav
        ref={topRef}
        className={`hidden md:block lg:block navbar-react pt-16 ${
          inViewTop ? "animate-slideInFromTop" : ""
        } `}
      >
        <div className="container mx-auto flex items-center justify-around ">
          <p className="text-white font-semibold text-2xl cursor-pointer ">
            Ecosystem
          </p>
          <p className="text-white font-semibold text-2xl cursor-pointer ">
            Developers
          </p>
          <div className="flex items-center space-x-2 -mt-10 mr-20">
            <img src={LogoImage} alt="Logo" className="h-16 w-auto" />
            <p className="text-white text-3xl font-semibold cursor-pointer">
              Polluxcoin
            </p>
          </div>
          <p className="text-white font-semibold text-2xl cursor-pointer ">
            Ecosystem
          </p>
          <p className="text-white font-semibold text-2xl cursor-pointer ">
            Coin
          </p>
        </div>
      </nav>

      <div className="md:hidden lg:hidden pt-4 flex justify-between items-center relative">
        <div className="flex items-center space-x-2">
          <img src={LogoImage} alt="Logo" className="h-12 w-auto" />
          <p className="text-white text-2xl font-semibold cursor-pointer">
            Polluxcoin
          </p>
        </div>
        <div className="text-white">
          <MdMenu size={28} onClick={() => setIsMobile(!isMobile)} />
        </div>
        {isMobile && (
          <div className="absolute right-0 top-full mt-2 bg-[#170535] rounded-md shadow-lg px-12 py-4 z-10">
            <p className="text-white font-semibold text-lg cursor-pointer mb-2">
              Ecosystem
            </p>
            <p className="text-white font-semibold text-lg cursor-pointer mb-2">
              Developers
            </p>
            <p className="text-white font-semibold text-lg cursor-pointer mb-2">
              Community
            </p>
            <p className="text-white font-semibold text-lg cursor-pointer">
              Coin
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
