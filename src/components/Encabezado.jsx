import { Link } from "react-scroll";
export default function Encabezado() {
  return (
    <div
      id="home"
      className="
      bg-gradient-to-b from-blue-300 to-black/80 min-h-screen 
      flex justify-center items-center 
      pb-28
      text-white text-4xl
      "
    >
      <div className="text-center p-8 font-light">
        <h1>
          Hola, soy
          <span className="text-black font-semibold"> Lucas Vázquez</span>
        </h1>
        <h2>Ingeniero en Electrónica y Desarrolador Front-end</h2>
        <div className="m-6 text-3xl">
          <Link
            to="sobre"
            spy={true}
            smooth={true}
            offset={-55}
            duration={500}
            className="transition-colors delay-150 border-white border-2 hover:text-black hover:bg-white cursor-pointer p-2"
          >
            Mi trabajo{" "}
            <span className="">&#8594;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
