import Layout from "./Layout";
import Navigation from "./Navigation";
import Footer from "./Footer";
// * Aplicar un filtro del tipo de sesión que viene para definir que datos del Navigation mostrar

const LayoutPA = ({ children, actState, title }) => {
  return (
    <>
      <Navigation actState={actState} />
      <Layout data={title}>{children}</Layout>
      <Footer />
    </>
  );
};

export default LayoutPA;
