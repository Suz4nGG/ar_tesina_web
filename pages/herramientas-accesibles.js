import Herramientas from "/components/Global/Herramientas";
import { herramientasRecursos } from "data";
import LayoutPA from "../components/Global/LayoutPA";

const HerramientasAccesibles = () => {
  return (
    <LayoutPA actState="" title="Herramientas accesibles">
      <Herramientas data={herramientasRecursos} />
    </LayoutPA>
  );
};

export default HerramientasAccesibles;
