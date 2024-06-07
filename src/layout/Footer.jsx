import React, { useEffect, useState } from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaRegCopyright } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Logo from '../assets/Logo.png';

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
    handleScroll(); // Check immediately in case already in view

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`footer-container text-white py-12 px-24 ${isVisible ? 'animate-slideInFromLeft' : ''}`}>
      <div className="flex flex-row items-center justify-around">
        <div className={`w-1/3 ${isVisible ? 'animate-slideInFromLeft' : ''}`}>
          <img src={Logo} alt="logo" className="w-1/2" />
        </div>
        <div className={`w-1/3 ${isVisible ? 'animate-slideInFromLeft' : ''}`}>
          <p className="text-2xl pb-8">Pollux Coin</p>
          <div className="flex items-center justify-around">
            <ul>
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
        <div className={`w-1/3 flex flex-col text-right ${isVisible ? 'animate-slideInFromRight' : ''}`}>
          <p className="pb-8 text-2xl">JOIN US</p>
          <div className="flex space-x-4 flex-row justify-end cursor-pointer">
            <FaInstagram size={28} />
            <FaFacebook size={28} />
            <FaXTwitter size={28} />
            <FaLinkedin size={28} />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <div className={`${isVisible ? 'animate-slideInFromLeft' : ''}`}>
          <p className="flex items-center">Copyright <span className="mx-1"><FaRegCopyright /></span> 2023 Conflux. All Rights Reserved</p>
        </div>
        <div className={`flex space-x-6 ${isVisible ? 'animate-slideInFromRight' : ''}`}>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
