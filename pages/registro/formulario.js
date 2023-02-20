import PageTitle from "../../components/Global/PageTitle";
import FormRegister from "../../components/Registro/components/FormRegister";
import { Container } from "../../components/Global/Container";
const FormularioRegistroTemplate = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default FormularioRegistroTemplate;
