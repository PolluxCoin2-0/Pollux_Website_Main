import LogoImage from '../assets/Logo.png'; 
import { useInView } from 'react-intersection-observer';

const Navbar = () => {
  const { ref: topRef, inView: inViewTop } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <nav  ref={topRef} className={`navbar-react pt-16 ${inViewTop ? 'animate-slideInFromTop' : ''} `}>
      <div className="container mx-auto flex items-center justify-around ">
          <p className="text-white font-semibold text-2xl cursor-pointer ">Ecosystem</p>
          <p className="text-white font-semibold text-2xl cursor-pointer ">Developers</p>
          <div className="flex items-center space-x-2 -mt-8 mr-20">
            <img src={LogoImage} alt="Logo" className="h-16 w-auto" />
            <p className="text-white text-3xl font-semibold cursor-pointer">Polluxcoin</p>
          </div>
          <p className="text-white font-semibold text-2xl cursor-pointer ">Ecosystem</p>
          <p className="text-white font-semibold text-2xl cursor-pointer ">Coin</p>
      </div>
    </nav>
  );
}; 

export default Navbar;
