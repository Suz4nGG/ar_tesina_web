import Navigation from "/components/Global/Navigation";
import Layout from "/components/Global/Layout";
import Herramientas from "/components/Global/Herramientas";
import Footer from "/components/Global/Footer";
import { herramientasRecursos } from "data";
const HerramientasAccesibles = () => {
  return (
    <div>
      <Navigation actState="session" />
      <Layout data={{ title: "Herramientas accesibles" }}>
        <Herramientas data={herramientasRecursos} />
        <Footer />
      </Layout>
    </div>
  );
};

export default HerramientasAccesibles;
