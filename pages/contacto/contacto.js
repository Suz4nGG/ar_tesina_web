import React from 'react';
import { Container } from '../../components/Global/Container';
import PageTitle from "../../components/Global/PageTitle"
import Footer from '../../components/Global/Footer';

const Contacto = () => {
  return (
    <Container>
      <PageTitle
        title="Contacto"
        name="Contacto"
        content="Contacto con la IES"
      />
      Contacto
      <Footer/>
    </Container>
  );
}

export default Contacto;
