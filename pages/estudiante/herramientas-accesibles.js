import Navigation from "/components/Global/Navigation";
import Layout from "/components/Global/Layout";
import Herramientas from "./components/Herramientas";
import { herramientasInfo,herramientasInfo2,herramientasInfo3 } from "./dataHerramientas";
import Footer from "../../components/Global/Footer";

const HerramientasAccesibles = () => {
  return (
    <div>
      <Navigation actState="session" />
      <Layout data={{ title: "Herramientas accesibles" }}>
        <Herramientas data={herramientasInfo} title="Lectores de pantalla" />
        <Herramientas data={herramientasInfo2} title="Traductores"/>
        <Herramientas data={herramientasInfo3} title="Teclados virtuales" />
        <Footer/>
      </Layout>
    </div>
  );
};

export default HerramientasAccesibles;
