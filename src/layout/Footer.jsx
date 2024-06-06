import { FaInstagram,FaFacebook,FaLinkedin,FaRegCopyright} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <div className="text-white py-12">
      <div className="flex flex-row items-center justify-around">
        <div className="w-1/3 ">
          <img src={Logo} alt="logo" className="w-1/2"/>
        </div>
        <div className="w-1/3">
          <p className="text-2xl pb-8 text-center">Pollux Coin</p>
          <div className="flex items-center justify-around">
          <ul>
            <li className="py-1 cursor-pointer">Developers</li>``
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
        <div className="w-1/3 flex flex-col text-right">
          <p className="pb-8 text-2xl">JOIN US</p>
          <div className="flex space-x-4 flex-row justify-end cursor-pointer">
          <FaInstagram size={28} />
          <FaFacebook size={28} />
          <FaXTwitter size={28} />
          <FaLinkedin size={28} />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="flex items-center">Copyright <span className="mx-1"><FaRegCopyright/></span> 2023 Conflux. All Rights Reserved</p>
        </div>
        <div className="flex space-x-6">
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
      </div>
    </div>
  )
}

export default Footer