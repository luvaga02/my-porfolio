import Encabezado from "./components/Encabezado";
import Navegacion from "./components/Navegacion";
import Pie from "./components/Pie";
import Sobre from "./components/Sobre";
import Trabajos from "./components/Trabajos";

export default function App() {
  return (
    <>
      <Encabezado />
      <Navegacion />
      <Sobre />
      <Trabajos />
      <Pie />
    </>
  );
}
