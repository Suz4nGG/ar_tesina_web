import { useState } from "react";
import HeaderForm from "/components/Forms/HeaderForm";
import Button from "../../../components/Global/Button";
import { dateNow } from "../../data";
import axios from "axios";
import { API_REG } from "../../constants";
import { useRouter } from "next/router";
import { validations } from "../validations";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import FormAcount from "./FormAcount";
import { LOGIN } from "../../constants";

const FormRegister = () => {
  const [data, setData] = useState({
    nombreCompleto: "",
    tel: "",
    correo: "",
    tipoDiscapacidad: "",
    sobreDiscapacidad: "",
    carrera: "",
    usernameA: "",
    password: "",
  });
  const [hasError, setHasError] = useState(false);
  const [serverError, setServerError] = useState(false);

  const router = useRouter();
  const errorMessage = validations(data);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (errorMessage[0] === undefined) {
        const res = await axios.post(API_REG, data);
        const dataOld = Object.entries(data);
        const clearData = dataOld.map(([key]) => [key, ""]);
        const newData = Object.fromEntries(clearData);
        setData(newData);
        setServerError(false);
        setHasError(false)
        router.push(LOGIN);
      }
      setHasError(true);
    } catch (err) {
      console.log(err)
      if (err.response.status === 401) {
        setServerError(true);
      }
    }
  };
  const handleChange = (e) => {
    const nameRef = e.name || e.target.name;
    const valueRef = e.value || e.target.value;
    setData({ ...data, [nameRef]: valueRef });
  };
  return (
    <form
      className="w-full flex flex-col justify-center pt-2 pb-12 sm:px-6 lg:px-8"
      onSubmit={handleSubmit}
    >
      {/* * Datos estudiante */}
      <HeaderForm step="FormOne" />
      <div className="mx-4 sm:mx-0">
        {serverError ? (
          <p className="text-red-600 text-sm py-2">
            * Revisa el nombre de usuario o nombre completo proporcionado, ya existe una cuenta con esos datos
          </p>
        ) : (
          ""
        )}
        {hasError ? (
          <p className="text-red-600 text-sm py-2">
            * Completa los campos requeridos
          </p>
        ) : (
          ""
        )}
      </div>
      <FormOne
        data={data}
        handleChange={handleChange}
        errorMessage={errorMessage}
      />
      {/* * Datos tipo de discapacidad */}
      <HeaderForm step="FormTwo" />
      <FormTwo data={data} handleChange={handleChange} />
      {/* * Datos escolaridad */}
      <HeaderForm step="FormThree" />
      <FormThree data={data} handleChange={handleChange} />
      {/* datos de cuenta */}
      <HeaderForm step="FormAcount" />
      <FormAcount handleChange={handleChange} errorMessage={errorMessage} />
      <div className="mx-4 sm:mx-0">
        <Button
          bg="bg-green-600 w-full"
          textColor="text-gray-100"
          text="Registrarse"
          href="#"
          hover="bg-green-700"
        />
      </div>
    </form>
  );
};

export default FormRegister;
