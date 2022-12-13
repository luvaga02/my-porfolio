import { Link } from "react-scroll";
export default function Encabezado({ idioma, setIdioma }) {
  const t1Es = "Hola, soy";
  const t2Es = "Ingeniero en Electrónica y Desarrolador Front-end";
  const t3Es = "Mi trabajo";
  const t1En = "Hello, I'm";
  const t2En = "I'm an Electronic Engineer and Front-End Developer";
  const t3En = "Look my work";

  return (
    <div className="bg-gradient-to-b from-blue-300 to-black/80">
      <div className="absolute w-full flex justify-end pr-4 gap-4 py-4 text-white font-semibold">
        <button onClick={() => setIdioma("es")}>Es</button>
        <button onClick={() => setIdioma("en")}>En</button>
      </div>
      <div
        id="home"
        className="
      min-h-screen
      flex justify-center items-center 
      pb-28
      text-white sm:text-4xl text-2xl
      "
      >
        <div className="text-center p-8 font-light">
          <h1>
            {idioma === "es" ? t1Es : t1En}{" "}
            <span className="text-black font-semibold">Lucas Vázquez</span>
          </h1>
          <h2>{idioma === "es" ? t2Es : t2En} </h2>
          <div className="m-6 sm:text-3xl text-base">
            <Link
              to="sobre"
              spy={true}
              smooth={true}
              offset={-55}
              duration={500}
              className="transition-colors delay-150 border-white border-2 hover:text-black hover:bg-white cursor-pointer p-2 "
            >
              {idioma === "es" ? t3Es : t3En} <span>&#8594;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
