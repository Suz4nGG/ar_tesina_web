import React from 'react';
import { useRouter } from 'next/router';
import ContainerRegister from '../../components/ContainerRegister';
import FormOne from "/components/Register/FormOne"
import FormTwo from '../../components/Register/FormTwo';
import FormThree from '../../components/Register/FormThree';
import PageTitle from '/components/Global/PageTitle.jsx'

const FormularioRegistroTemplate = () => {
  const router = useRouter()
  const {id} = router.query
  return (
    <ContainerRegister>
      <PageTitle title="Registro" name="Registro" content="Registrar nueva cuenta de usuario"/>
      {id === '1' && <FormOne />}
      {id === '2' && <FormTwo />}
      {id === '3' && <FormThree />}
    </ContainerRegister>
  );
}

FormularioRegistroTemplate.getInitialProps = async (ctx) => {
  console.log(ctx.query.id)
  console.log(ctx)
  return {}
}

export default FormularioRegistroTemplate;
