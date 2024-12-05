import fondo from "./assets/gevpCanchasTenis.webp";
import Footer from "./commons/Footer";
import Header from "./commons/Header";
import HeaderResponsive from "./commons/HeaderResponsive";
import AditionalInfo from "./components/AddInfo/AditionalInfo";
import Home from "./components/Home/Home";
import InstalSection from "./components/Instalaciones/InstalSection";
import Precios from "./components/Precios/Precios";

function App() {
  return (
    <div className="w-screen h-screen font-titilliumWeb">
      <img src={fondo} className="w-screen h-screen fixed z-0 object-cover" />
      <div className="absolute  inset-0 bg-gradient-to-b from-black to-transparent z-10 w-screen" />
      
      <Header />
      <HeaderResponsive />
      <div className="flex flex-col gap-5">
        <Home id="HOME" />
        <InstalSection id="INSTALACIONES" />
        <Precios id="PRECIOS" />
        <AditionalInfo id="MASINFO" />
      </div>

      <Footer id="CONTACTO" />
    </div>
  );
}

export default App;
