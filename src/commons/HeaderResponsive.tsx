import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-scroll";
import logo from "../assets/gevpLogo.png";

function HeaderResponsive() {
  const contentRef = useRef(null);
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: "12rem",
        duration: 0.4,
        ease: "power3.inOut",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        duration: 0.2,
        ease: "power3.inOut",
      });
    }
  }, [isOpen]);

  return (
    <div className="xl:hidden fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] z-40">
      <div
        className={`flex justify-between items-center px-4 py-2 bg-gray-600 bg-opacity-70 backdrop-blur-3xl rounded-t-xl ${
          isOpen ? "rounded-b-none" : "rounded-b-xl"
        } transition-all`}
      >
        <Link
          to="HOME"
          spy={true}
          smooth={true}
          duration={700}
          onClick={() => setIsOpen(false)}
        >
          <img src={logo} className="w-[50px]" />
        </Link>

        <button
          ref={buttonRef}
          onClick={handleOpen}
          className="xl:hidden flex items-center"
        >
          <IoIosMenu className="text-4xl" />
        </button>
      </div>

      <div
        ref={contentRef}
        className={`bg-gray-600 bg-opacity-70 backdrop-blur-3xl w-full overflow-hidden transition-all rounded-b-xl mt-[-5px]`}
      >
        <div className="flex flex-col items-center gap-2 py-4">
          <Link
            to="HOME"
            spy={true}
            smooth={true}
            duration={700}
            className="text-[22px] text-gray-200 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>
          <Link
            to="PRECIOS"
            spy={true}
            smooth={true}
            duration={700}
            className="text-[22px] text-gray-200 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Precios
          </Link>
          <Link
            to="MASINFO"
            spy={true}
            smooth={true}
            duration={700}
            className="text-[22px] text-gray-200 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Más Info
          </Link>
          <Link
            to="CONTACTO"
            spy={true}
            smooth={true}
            duration={700}
            className="text-[22px] text-gray-200 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderResponsive;
