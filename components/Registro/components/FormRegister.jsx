import { useState } from "react";
import HeaderForm from "../../Forms/HeaderForm";
import Button from "../../Global/Button";
import axios from "axios";
import { useRouter } from "next/router";
import { validations } from "../../../validations";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import FormAcount from "./FormAcount";
import { LOGIN, API_REG } from "/constants";
import ErrorMessages from "../../Messages/ErrorMessages";
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
        console.log("ND", newData);
        setServerError(false);
        setHasError(false);
        router.push(LOGIN);
      }
      setHasError(true);
    } catch (err) {
      if (err.response.status === 401) {
        setServerError(true);
      }
    }
  };
  const discapacidadArray = [];
  const handleChange = (e) => {
    if (!(e.target === undefined)) {
      setData({ ...data, [e.target.name]: e.target.value });
    } else {
      if (e.name === "carrera") {
        setData({ ...data, [e.name]: e.value });
      } else {
        e.map((discapacidad) => discapacidadArray.push(discapacidad.value));
        setData({ ...data, ["tipoDiscapacidad" || e.name]: discapacidadArray });
      }
    }
  };

  return (
    <form
      className="w-full flex flex-col justify-center pt-2 pb-12 sm:px-6 lg:px-8"
      onSubmit={handleSubmit}
    >
      {/* * Datos estudiante */}
      <HeaderForm step="FormOne" />
      <div className="mx-4 sm:mx-0">
        <ErrorMessages
          styles="bg-red-100 text-red-600 text-sm"
          errors="* Revisa el nombre de usuario o nombre completo proporcionado, ya
            existe una cuenta con esos datos"
          show={serverError}
        />

        <ErrorMessages
          errors={"* Completa los campos requeridos"}
          show={hasError}
          styles="bg-red-100 text-red-600 text-sm"
        />
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
      <FormAcount
        handleChange={handleChange}
        errorMessage={errorMessage}
        data={data}
      />
      <div className="mx-4 sm:mx-0">
        <Button
          bg="bg-bgBtn_ w-full"
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
