import { Link } from "react-scroll";
import Card from "../../commons/Card";
import Title from "../../commons/Title";

type HomeProps = {
  id?: string;
};

function Home({ id }: HomeProps) {
  return (
    <section
      className="py-14 bg-transparent text-center relative z-30 w-screen mb-[10%] xl:mt-0 mt-[15%]"
      id={id}
    >
      <div className="xl:max-w-4xl mx-auto xl:px-0 px-2">
        <Title title="¡Bienvenidos a GEVP!" />

        <p className="text-lg mb-8">
          Tu espacio ideal para disfrutar del tenis en nuestras canchas de
          primer nivel.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:px-0 px-4">
          <a
            href="https://app.acuityscheduling.com/schedule.php?owner=34591531"
            target="_blank"
          >
            <Card
              title="Reservá tu cancha"
              text=" Elegí el día y horario que más te convenga con nuestra plataforma
              fácil de usar."
            />
          </a>
          <Link to="INSTALACIONES" smooth="true">
            <Card
              title="Conocé nuestras instalaciones"
              text="Explorá fotos y detalles de nuestros jugadores y canchas al aire
              libre."
            />
          </Link>
          <Link to="PRECIOS" smooth="true">
            <Card
              title="Aprendé con nosotros"
              text="Tarifas claras y accesibles para que aprendas y disfrutes sin preocupaciones."
            />
          </Link>
          <Link to="MASINFO" smooth="true">
            <Card
              title="Obtené información útil"
              text="Todo lo que necesitás saber, desde horarios hasta consejos para
              mejorar tu juego."
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
