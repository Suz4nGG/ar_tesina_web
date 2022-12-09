import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ContainerRegister from './components/ContainerRegister';
import FormOne from "./components/FormOne"
import FormTwo from './components/FormTwo';
import FormThree from './components/FormThree';
import PageTitle from '/components/Global/PageTitle.jsx'
import { PageProvider } from '../context/pagesContext';
import Pagination from './components/Pagination';

const FormularioRegistroTemplate = () => {
  const router = useRouter()
  const [step, setStep] = useState('1')
  const { id } = router.query
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const handleNextForm = (e) => {
    e.preventDefault()
    const { name } = e.currentTarget
    console.log("FO",name)
  }
  // ! Envio de los formularios
  const handleChangeData = (e) => {
    const {name, value} = e.target
    console.log("EE",name)
  }
  console.log()
  return (
    <PageProvider>
      <PageTitle title="Registro" name="Registro" content="Registrar nueva cuenta de usuario" />
      <form className="w-full flex flex-col justify-center py-12 sm:px-6 lg:px-8" onSubmit={onSubmit} onChange={handleChangeData}>
        {
          id === '1' &&
          <>
            <FormOne />
            <button
            onClick={handleNextForm}
            name="inicio"
            >
              Atras
            </button>
              <button
              onClick={handleNextForm}
              name="FormTwo"
            >
              Siguiente
            </button>
          </>
        }
        {
          id === '2' &&
          <>
            <FormTwo />
            <button
              onClick={handleNextForm}
              name="FormOne"
            >
              Atras
            </button>
              <button
              onClick={handleNextForm}
              name="FormThree"
            >
              Siguiente
            </button>
          </>
        }
        {
          id === '3' &&
          <>
            <FormThree />
            <button
            onClick={handleNextForm}
            name="FormTwo"
          >
            Atras
          </button>
            <button
              onClick={handleNextForm}
              disabled={true}
          >
            Siguiente
          </button>
          </>
        }
      </form>
    </PageProvider>
  );
}

/* FormularioRegistroTemplate.getInitialProps = async (ctx) => {
  return {}
} */

export default FormularioRegistroTemplate;
