import logo from "../assets/gevpLogo.png";
// import { IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";
import HeaderResponsive from "./HeaderResponsive";

function Header() {
  return (
    <div className="w-screen relative xl:flex hidden py-5 xl:px-10 md:px-8 px-2 z-30 xl:justify-between">
      <div className="flex">
        <img src={logo} className="w-[70px]" />
      </div>
      <div className="xl:flex hidden xl:gap-6 gap-3 items-center font-semibold xl:text-xl text-lg font-titilliumWeb">
        <Link
          className="cursor-pointer hover:underline"
          to="HOME"
          smooth="true"
        >
          Inicio
        </Link>
        {/* <Link className="cursor-pointer hover:underline" to="" smooth="true">
          Reservar
        </Link> */}
        <Link
          className="cursor-pointer hover:underline"
          to="PRECIOS"
          smooth="true"
        >
          Precios
        </Link>
        <Link
          className="cursor-pointer hover:underline"
          to="MASINFO"
          smooth="true"
        >
          Más Info
        </Link>
        <Link
          className="cursor-pointer hover:underline"
          to="CONTACTO"
          smooth="true"
        >
          Contacto
        </Link>
      </div>
     
      {/* <div className="xl:hidden flex xl:gap-6 gap-3 items-center font-semibold xl:text-xl text-lg font-titilliumWeb">
        <IoMenu className="text-4xl" />
      </div> */}
    </div>
  );
}

export default Header;
