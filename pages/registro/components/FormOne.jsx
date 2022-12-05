import ContainerForm from "../../../components/Forms/ContainerForm";
import Input from "../../../components/Forms/Input";
import Label from "../../../components/Forms/Label";

const FormOne = () => {
  return (
    <ContainerForm>
      <Label name="nombreCompleto" text="Nombre Completo"/>
      <Input name="nombreCompleto" placeholder="Nombre Completo"/>
    </ContainerForm>
  );
}

export default FormOne;
