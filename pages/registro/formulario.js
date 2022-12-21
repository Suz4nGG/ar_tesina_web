import PageTitle from '/components/Global/PageTitle.jsx'
import { PageProvider } from '../context/pagesContext';
import FormRegister from './components/FormRegister';

const FormularioRegistroTemplate = () => {
  console.log()
  return (
    <PageProvider>
      <div
        className="
          py-12 w-full
          flex justify-center items-center
          flex-col sm:px-6 lg:px-8"
      >
        <div
          className='
            w-full flex flex-col justify-center items-center'
        >
          <PageTitle
            title="Registro"
            name="Registro"
            content="Registrar nueva cuenta de usuario"
          />
            <FormRegister />
        </div>
      </div>
    </PageProvider>
  );
}

export default FormularioRegistroTemplate;
