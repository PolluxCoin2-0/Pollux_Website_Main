import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import Frame7Card from "./Frame7Card";
import BG from "../../../assets/BG.png";
import Slide1 from "../../../assets/slide1.png";
import Slide2 from "../../../assets/slide2.png";
import Slide3 from "../../../assets/slide3.png";

const Frame7 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.frame7-container');
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

  const cardsData = [
    {
      img: Slide1,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      title: "POX SR",
    },
    {
      img: Slide2,
      desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      title: "POX Wallet",
    },
    {
      img: Slide3,
      desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      title: "Polink",
    },
    {
      img: Slide1,
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
      title: "POX SR",
    },
    {
      img: Slide2,
      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
      title: "POX Wallet",
    },
    {
      img: Slide3,
      desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit.",
      title: "Polink",
    },
  ];

  return (
    <div className={`min-h-screen frame7-container flex flex-col justify-center items-center py-16 px-24 ${isVisible ? 'animate-slideInFromBottom' : ''}`}
    style={{backgroundImage: `url(${BG})`,}}>
      <p className="text-8xl font-bold bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] inline-block text-transparent bg-clip-text mb-12">
        POX Ecosystem
      </p>
      <div className="carousel-wrapper px-28">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper-container"
        >
          {cardsData.map((card, index) => (
            <SwiperSlide key={index} className="carousel-slide">
              <Frame7Card img={card.img} desc={card.desc} title={card.title} isActive={index === activeIndex} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev slider-arrow"></div>
        <div className="swiper-button-next slider-arrow"></div>
      </div>
    </div>
  );
};

export default Frame7;
