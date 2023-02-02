import PageTitle from "../../components/Global/PageTitle"
import FormRegister from "../../components/Registro/components/FormRegister";
import Navigation from "../../components/Global/Navigation";
const FormularioRegistroTemplate = () => {
  return (
    <>
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
    </>
  );
};

export default FormularioRegistroTemplate;
