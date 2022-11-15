import Encabezado from "./components/Encabezado";
import Navegacion from "./components/Navegacion";
import Pie from "./components/Pie";
import Sobre from "./components/Sobre";
import Trabajos from "./components/Trabajos";
import { useState } from "react";

export default function App() {
  const [idioma, setIdioma] = useState("es");

  return (
    <>
      <Encabezado idioma = {idioma} setIdioma={setIdioma}/>
      <Navegacion idioma = {idioma}/>
      <Sobre idioma = {idioma}/>
      <Trabajos />
      <Pie />
    </>
  );
}
