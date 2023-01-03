import { Container } from "../components/Global/Container"
import PageTitle from "../components/Global/PageTitle"
import React from 'react';
import Footer from "../components/Global/Footer";

const Recursos = () => {
  return (
    <Container>
      <PageTitle
        title="Recursos"
        name="Recursos"
        content="Recursos sobre ajustes curriculares"
      />
      Recursos
      <Footer/>
    </Container>
  );
}

export default Recursos;
