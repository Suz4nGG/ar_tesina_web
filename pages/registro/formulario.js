import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ContainerRegister from './components/ContainerRegister';
import FormOne from "./components/FormOne"
import FormTwo from './components/FormTwo';
import FormThree from './components/FormThree';
import PageTitle from '/components/Global/PageTitle.jsx'
import { PageProvider } from '../context/pagesContext';
import HeaderForm from '../../components/Forms/HeaderForm';

const FormularioRegistroTemplate = () => {
  const router = useRouter()
  const [step, setStep] = useState('FormOne')
  const onSubmit = (data) => {
    console.log(data);
  };

  const handlePreviousForm = (e) => {
    e.preventDefault()
    switch (step) {
      case "FormOne":
        break
      case "FormTwo":
        setStep("FormOne")
        break
      case "FormThree":
        setStep("FormTwo")
        break
    }
  }
  const handleNextForm = (e) => {
    e.preventDefault()
    switch (step) {
      case "FormOne":
        setStep("FormTwo")
        break
      case "FormTwo":
        setStep("FormThree")
        break
      case "FormThree":
        break
    }
  }
  // ! Envio de los formularios
  const handleChangeData = (e) => {
    const {name, value} = e.target
    console.log("EE",name)
  }
  console.log()
  return (
    <PageProvider>
      <div className="py-12 w-full h-auto md:h-screen flex justify-center items-center flex-col sm:px-6 lg:px-8">
      <div className='w-full h-screen flex flex-col justify-center items-center'>
      <HeaderForm step={step} />
      <PageTitle title="Registro" name="Registro" content="Registrar nueva cuenta de usuario" />
        <form className="w-full flex flex-col justify-center py-12 sm:px-6 lg:px-8" onSubmit={onSubmit} onChange={handleChangeData}>
          {
            step === "FormOne" && <FormOne/>
          }
          {
            step === "FormTwo" && <FormTwo/>
          }
          {
            step === "FormThree" && <FormThree/>
          }
        </form>
          <div className='w-full flex justify-evenly mt-5'>
            <button
              onClick={handlePreviousForm}
              name={step}
              className="flex items-center justify-center
            rounded-md bg-blue-600 px-4 py-3
            text-base font-medium text-gray-100
            disabled:opacity-25
            shadow-sm hover:bg-blue-700 sm:px-8"
              disabled={step === "FormOne" ? true : false}
              >
                Atras
            </button>
            <button
              onClick={handleNextForm}
              name={step}
              className="flex items-center justify-center
            rounded-md bg-blue-600 px-4 py-3
            disabled:opacity-25
            text-base font-medium text-gray-100
            shadow-sm hover:bg-blue-700 sm:px-8"
              disabled={step === "FormThree" ? true : false}
            >
              Siguiente
            </button>
          </div>
      </div>
      </div>
    </PageProvider>
  );
}

/* FormularioRegistroTemplate.getInitialProps = async (ctx) => {
  return {}
} */

export default FormularioRegistroTemplate;
