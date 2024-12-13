import Title from "../../commons/Title";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type PreciosProps = {
  id?: string;
};

function Precios({ id }: PreciosProps) {
  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);
  return (
    <section id={id} className="w-full py-16 bg-transparent relative mt-24">
      <div className="container mx-auto px-6 text-center" >
        <Title title="Tarifas y Promociones" />

        <div className="bg-white shadow-2xl rounded-lg p-8 mb-12" data-aos="fade" data-aos-delay="400">
          <h3 className="text-3xl font-semibold mb-4 text-[#6EC1E4]">
            Alquiler de Canchas
          </h3>
          <p className="text-lg text-gray-600 mb-4">
            Disfruta de nuestras canchas de tenis disponibles todos los días.
          </p>
          <p className="text-xl font-bold text-green-500 mb-2">
            <span className="font-bold text-gray-800 text-2xl">1h:</span>
            $12,000
          </p>
          <p className="text-xl text-gray-800 mb-6 flex flex-col">
            Promo:
            <span className="font-bold text-green-500 flex mx-auto gap-1 justify-center items-center">
              <p className="font-bold text-gray-800 text-2xl">1:30hs: </p>
              $20,000
            </span>
          </p>
          <p className="text-gray-600 flex xl:flex-row flex-col xl:gap-1 mx-auto justify-center xl:items-center">
            Horarios:
            <span className="font-semibold xl:ml-0 ml-[5px]">
              Lunes a Domingo 13:00 a 22:00 hs
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Precios;
