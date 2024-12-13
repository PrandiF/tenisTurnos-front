import { FaPhone } from "react-icons/fa6";
import Title from "../../commons/Title";
import { FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type AddInfoProps = {
  id?: string;
};

function AditionalInfo({ id }: AddInfoProps) {
  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);
  return (
    <section id={id} className="w-full py-16 bg-transparent relative">
      <div className="container mx-auto px-6 text-center">
        <Title title="Información Adicional" />

        <div
          className="bg-white shadow-2xl rounded-lg p-8"
          data-aos="fade"
          data-aos-delay="400"
        >
          <h3 className="text-3xl font-semibold mb-4 text-[#6EC1E4]">
            Clases de Tenis
          </h3>
          <p className="text-lg text-gray-600 mb-4">
            Aprende y mejora tus habilidades con clases impartidas por
            entrenadores profesionales.
          </p>
          <ul className="text-gray-600 mb-6 text-left max-w-md mx-auto">
            <li className="mb-2">
              🧒 <span className="font-semibold">Clases para niños: </span>
              Introducción al tenis en un entorno divertido.
            </li>
            <li className="mb-2">
              👦{" "}
              <span className="font-semibold">Clases para adolescentes: </span>
              Perfeccionamiento técnico y táctico.
            </li>
            <li className="mb-2">
              🧑 <span className="font-semibold">Clases para adultos: </span>
              Desde principiantes hasta jugadores avanzados.
            </li>
          </ul>
          <p className="text-gray-600">Contáctanos para más información.</p>
          <p className="text-gray-600 flex items-center justify-center gap-2 mt-2">
            <FaPhone /> 011 5097-2709
          </p>
          <p className="text-gray-600 flex items-center justify-center gap-2 mt-2">
            <FaEnvelope />
            tenis@gevp.com
          </p>
        </div>
      </div>
    </section>
  );
}

export default AditionalInfo;
