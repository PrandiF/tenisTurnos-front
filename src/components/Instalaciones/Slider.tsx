// AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { TenisPics } from "./TenisData";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'

function Slider() {
  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);

  return (
    <div className="hidden xl:flex xl:flex-col xl:w-full mx-auto relative">
      <div className="w-full relative">
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: false,
          // }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-[23rem] w-full flex items-center justify-center mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {TenisPics.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center px-[50px]"
            >
              <img
                src={item.url}
                alt="slide_image"
                className="w-full h-[20rem] rounded-xl object-cover bg-transparent flex items-center justify-center"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className="swiper-pagination flex justify-center w-full absolute bottom-4 z-10"
        data-aos="fade-up"
      >
        <div className="swiper-pagination-container w-full flex justify-center gap-2"></div>
      </div>
    </div>
  );
}

export default Slider;
