import { Link } from "react-scroll";
export default function Navegacion({ idioma = "es"}) {
  return (
    <div className="bg-black text-white flex flex-wrap gap-4 sticky top-0 z-10">
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="hover:bg-gray-400 py-4 px-2 cursor-pointer "
      >
        {idioma === "es" ? "Inicio": "Home" }
      </Link>
      <Link
        to="sobre"
        spy={true}
        smooth={true}
        offset={-55}
        duration={500}
        className="hover:bg-gray-400 py-4 px-2 cursor-pointer "
      >
        {idioma === "es" ? "Sobre": "About" }
      </Link>
      <Link
        to="trabajos"
        spy={true}
        smooth={true}
        offset={-55}
        duration={500}
        className="hover:bg-gray-400 py-4 px-2 cursor-pointer "
      >
        {idioma === "es" ? "Portafolio": "Portfolio" }
      </Link>
      <Link
        to="pie"
        spy={true}
        smooth={true}
        offset={-55}
        duration={500}
        className="hover:bg-gray-400 py-4 px-2 cursor-pointer "
      >
        {idioma === "es" ? "Contacto": "Contact" }
      </Link>
    </div>
  );
}
