import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import Frame7Card from "./Frame7Card";

const Frame7 = () => {
  const cardsData = [
    {
      img: "",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      title: "POX SR",
    },
    {
      img: "",
      desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      title: "POX Wallet",
    },
    {
      img: "",
      desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      title: "Polink",
    },
    {
      img: "",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
      title: "POX SR",
    },
    {
      img: "",
      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
      title: "POX Wallet",
    },
    {
      img: "",
      desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit.",
      title: "Polink",
    },
  ];

  return (
    <div className="frame7-container flex flex-col justify-center items-center py-16 px-24">
      <p className="text-8xl font-bold bg-gradient-to-r from-[#FDE3AD] via-[#FAB735] to-[#FAA811] inline-block text-transparent bg-clip-text mb-12">
        POX Ecosystem
      </p>
      <div className="carousel-wrapper px-4">
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
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper-container"
        >
          {cardsData.map((card, index) => (
            <SwiperSlide key={index} className="carousel-slide">
              <Frame7Card img={card.img} desc={card.desc} title={card.title} />
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