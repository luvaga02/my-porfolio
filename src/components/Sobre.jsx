import img from "../img/reducido.jpg";

let links = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/labview/labview-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg",
];

export default function Sobre({ idioma = "es" }) {
  return (
    <div id="sobre" className="bg-blue-300">
      <div className="flex justify-center items-center min-h-screen pb-28 max-w-4xl m-auto">
        <div className="font-light">
          <h1 className="text-4xl">
            {idioma === "es" ? "Sobre mi." : "About me."}
          </h1>
          <h2>Soy un ingeniero apasionado que vive en Pilar, Paraguay</h2>
          <p>
            Desde 2020 me desempeño como ingeniero de mantenimiento en donde
            aplico mis conocimientos resolviendo problemas y aplicando
            soluciones tecnológicas.
          </p>
          <p>Programo equipos industriales y desarrollo software web</p>
        </div>
        <div>
          <img
            className="grayscale min-w-[200px] h-[200px] object-cover rounded-full"
            src={img}
            alt="perfil"
          />
        </div>
      </div>
      {links.map(url => <img src={url} key={url} width="100px" ></img>)}
    </div>
  );
}
