import img from "../img/reducido.jpg";
export default function Sobre({ idioma = "es" }) {
  return (
    <div id="sobre" className="bg-blue-300">
      <div className="flex justify-center items-center min-h-screen pb-28">
        <div className="font-light">
          <h1 className="text-4xl">{idioma === 'es' ? "Sobre mi.":"About me."}</h1>
          <h2>Soy un ingeniero apasionado que vive en Pilar, Paraguay</h2>
          <p>
            Desde 2020 me desempeño como ingeniero de mantenimiento en donde
            aplico mis conocimientos resolviendo problemas y aplicando
            soluciones tecnológicas.
          </p>
          <p>Programo equipos industriales y desarrollo software web</p>
        </div>
        <div>
          <img className="grayscale min-w-[200px] h-[200px] object-cover rounded-full" src={img} alt="perfil" />
        </div>
      </div>
    </div>
  );
}
