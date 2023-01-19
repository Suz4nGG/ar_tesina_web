import { Container } from "../components/Global/Container";
import Footer from "../components/Global/Footer";
import PageTitle from "../components/Global/PageTitle";
import Hero from "../components/Home/Hero";
import Info from "../components/Home/Info";
import Logos from "../components/Home/Logos";
// import { EditorState } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";

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
