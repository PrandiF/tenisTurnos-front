import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { TenisPics } from "./TenisData";

function SliderResponsive() {
  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);

  return (
    <div className="xl:hidden md:hidden flex flex-col w-screen relative">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={{ dynamicBullets: true, clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination]}
        className="h-full w-[90%] relative flex items-center justify-center m-auto rounded-xl"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {TenisPics.map((item, index) => (
          <SwiperSlide
            key={`${index}-${item}`}
            className="w-[90%] px-5 h-[16rem] relative group rounded-xl"
          >
            <img
              src={item.url}
              alt="slide_image"
              className="w-full h-[18rem] rounded-xl object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination w-full flex items-center justify-center mt-4 z-10 relative"></div>
    </div>
  );
}

export default SliderResponsive;
