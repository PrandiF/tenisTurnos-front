import { FaInstagram, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

type FooterProps = {
  id?: string;
};
function Footer({ id }: FooterProps) {
  return (
    <footer className="bg-gradient-to-b from-transparent to-black text-white py-8 z-30 relative" id={id}>
      <div className="container mx-auto xl:px-0 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Columna 1: Redes Sociales */}
          <div className="flex flex-col items-start">
            <h3 className="xl:text-xl font-semibold mb-2 underline">Síguenos</h3>
            <a
              href="https://www.instagram.com/gevp.tenis/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg hover:text-gray-400 transition"
            >
              <FaInstagram />
              gevp.tenis
            </a>
          </div>

          {/* Columna 2: Contacto */}
          <div className="flex flex-col items-start">
            <h3 className="xl:text-xl font-semibold mb-2 underline">Contacto</h3>
            <p className="flex items-center gap-2 text-lg">
              <FaPhoneAlt />
              011 5097-2709
            </p>
            <p className="flex items-center gap-2 text-lg">
              <FaEnvelope />
              tenis@gevp.com
            </p>
          </div>

          {/* Columna 3: Página web */}
          <div className="flex flex-col items-start w-full mx-auto">
            <h3 className="xl:text-xl font-semibold mb-2 underline">
              Visita nuestra web
            </h3>
            <a
              href="https://www.clubgevp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg hover:text-gray-400 transition"
            >
              <FaGlobe />
              www.clubgevp.com
            </a>
          </div>

          {/* Columna 4: Información adicional (si es necesario) */}
          <div className="xl:flex hidden flex-col items-start">
            <h3 className="xl:text-xl font-semibold mb-2 underline">
              Sobre nosotros
            </h3>
            <p className="text-lg">
              Club GEVP es un club dedicado a ofrecer actividades deportivas y
              recreativas para todas las edades.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Club GEVP. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
