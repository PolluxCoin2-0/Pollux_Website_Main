import { useEffect, useState } from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaRegCopyright } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Logo from '../assets/Logo.png';
import BG from "../assets/BG.png";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.footer-container');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isInViewport) {
          setIsVisible(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`footer-container text-white py-12 px-6 md:px-12 lg:px-24 ${isVisible ? 'animate-slideInFromLeft' : ''}`}
      style={{
        backgroundImage: `url(${BG})`,
      }}
    >
      <div className="border-t-[2px] pt-6 flex flex-col md:flex-row items-center justify-between">
        <div className={`w-full md:w-1/3 ${isVisible ? 'animate-slideInFromLeft' : ''} mb-6 md:mb-0`}>
          <img src={Logo} alt="logo" className="w-1/2 mx-auto md:mx-0" />
        </div>
        <div className={`w-full md:w-1/3 ${isVisible ? 'animate-slideInFromLeft' : ''} mb-6 md:mb-0 text-center md:text-left`}>
          <p className="text-2xl pb-8 md:indent-[92px]">Pollux Coin</p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-around">
            <ul className="mb-4 md:mb-0">
              <li className="py-1 cursor-pointer">Developers</li>
              <li className="py-1 cursor-pointer">Documentation</li>
              <li className="py-1 cursor-pointer">Technology</li>
              <li className="py-1 cursor-pointer">Grants</li>
              <li className="py-1 cursor-pointer">Partners</li>
            </ul>
            <ul>
              <li className="py-1 cursor-pointer">Educational</li>
              <li className="py-1 cursor-pointer">Initiatives</li>
              <li className="py-1 cursor-pointer">News Feed</li>
              <li className="py-1 cursor-pointer">About</li>
              <li className="py-1 cursor-pointer">Team</li>
            </ul>
          </div>
        </div>
        <div className={`w-full md:w-1/3 flex flex-col ${isVisible ? 'animate-slideInFromRight' : ''} text-center md:text-right`}>
          <p className="pb-8 text-2xl">JOIN US</p>
          <div className="flex space-x-4 justify-center md:justify-end cursor-pointer">
            <FaInstagram size={28} />
            <FaFacebook size={28} />
            <FaXTwitter size={28} />
            <FaLinkedin size={28} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-8 text-center md:text-left">
        <div className={`${isVisible ? 'animate-slideInFromLeft' : ''} mb-4 md:mb-0`}>
          <p className="flex items-center justify-center md:justify-start">
            Copyright <span className="mx-1"><FaRegCopyright /></span> 2023 Conflux. All Rights Reserved
          </p>
        </div>
        <div className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 ${isVisible ? 'animate-slideInFromRight' : ''}`}>
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Use</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
