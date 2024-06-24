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
  const [isEcosystemOpen, setIsEcosystemOpen] = useState(false);

  const toggleEcosystem = () => {
    setIsEcosystemOpen(!isEcosystemOpen);
  };
  return (
    <>
      <nav
        ref={topRef}
        className={`hidden md:block lg:block navbar-react pt-6 ${
          inViewTop ? "animate-slideInFromTop" : ""
        } `}
      >
        <div className="container mx-auto flex items-center justify-between">
        <div className="relative">
            <p
              className="text-white font-semibold text-2xl cursor-pointer"
              onClick={toggleEcosystem}
            >
              Ecosystem
            </p>
            {isEcosystemOpen && (
              <div className="absolute left-0 mt-2">
                <ul className="bg-[#230C44] rounded-md shadow-lg px-10 py-2 transition transform duration-300 ease-out opacity-100 translate-y-0 text-white">
                  <li className="py-1">POX SR</li>
                  <li className="py-1">Wallet</li>
                  <li className="py-1">Explorer</li>
                  <li className="py-1">Extension</li>
                </ul>
              </div>
            )}
          </div>
          <p className="text-white font-semibold text-2xl cursor-pointer ">
            Developers
          </p>
          <div className="flex items-center space-x-2">
            <img src={LogoImage} alt="Logo" className="h-16 w-auto" />
            <p className="text-white text-3xl mt-2 font-semibold cursor-pointer">
              Polluxcoin
            </p>
          </div>
          <p className="text-white font-semibold text-2xl cursor-pointer ">
            Coin
          </p>
          <p className="text-white font-semibold text-2xl cursor-pointer ">
            Login
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
             Coin
            </p>
            <p className="text-white font-semibold text-lg cursor-pointer">
             Login
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
