import { Container } from "../..//components/Global/Container"
import PageTitle from "../..//components/Global/PageTitle"
import React from 'react';
import Footer from "../..//components/Global/Footer";
import Herramientas from "../..//components/Global/Herramientas";
import { herramientasRecursos } from "data";
const Recursos = () => {
  return (
    <Container>
      <PageTitle
        title="Recursos"
        name="Recursos"
        content="Recursos sobre ajustes curriculares"
      />
      <Herramientas data={herramientasRecursos} showTitle={true} />
      <Footer/>
    </Container>
  );
}

export default Recursos;
