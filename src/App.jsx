import Encabezado from "./components/Encabezado";
import Navegacion from "./components/Navegacion";
import Pie from "./components/Pie";
import Sobre from "./components/Sobre";
import Trabajos from "./components/Trabajos";

export default function App() {
  return (
    <>
      <Encabezado />
      <hr />
      <Navegacion />
      <hr />
      <Sobre />
      <hr />
      <Trabajos />
      <hr />
      <Pie />
    </>
  );
}
