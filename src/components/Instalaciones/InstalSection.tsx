import Title from "../../commons/Title";
import Slider from "./Slider";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SliderResponsive from "./SliderResponsive";

type InstalSectionProps = {
  id?: string;
};

function InstalSection({ id }: InstalSectionProps) {
  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);
  return (
    <div className="relative z-30 w-full h-full" id={id}>
      <div className="text-center" data-aos="fade" data-aos-delay="400">
        <Title title="Nuestras Instalaciones" />
      </div>

      <div className="xl:w-[80%] w-[90%] bg-white p-[40px] flex mx-auto items-center justify-center rounded-xl flex-col gap-5">
        <div
          className="w-full text-black flex justify-center items-center xl:text-2xl text-xl text-center"
          data-aos="fade"
          data-aos-delay="400"
        >
          <p>
            Conocé a nuestros alumnos y las canchas al aire libre que vas a
            disfrutar.
          </p>
        </div>
        <Slider />
        <SliderResponsive />
      </div>
    </div>
  );
}

export default InstalSection;
