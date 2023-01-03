import PageTitle from "/components/Global/PageTitle.jsx";
import { PageProvider } from "../context/pagesContext";
import FormRegister from "./components/FormRegister";
import Navigation from "../../components/Global/Navigation";
const FormularioRegistroTemplate = () => {
  return (
    <PageProvider>
      <Navigation />
      <div
        className="
            w-full flex flex-col justify-center items-center"
      >
        <PageTitle
          title="Registro"
          name="Registro"
          content="Registrar nueva cuenta de usuario"
        />
        <FormRegister />
      </div>
    </PageProvider>
  );
};

export default FormularioRegistroTemplate;
