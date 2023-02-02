import { Container } from "..//components/Global/Container";
import Footer from "..//components/Global/Footer";
import PageTitle from "..//components/Global/PageTitle";
import Hero from "..//components/Home/Hero";
import Info from "..//components/Home/Info";
import Logos from "..//components/Home/Logos";

const Index = () => {
  return (
    <Container>
      <PageTitle title="Inicio" name="Inicio" content="Inicio aplicación" />
      <Hero />
      <Info />
      <Logos />
      <Footer />
    </Container>
  );
};

export default Index;
