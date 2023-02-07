import { Container } from "/components/Global/Container";
import Image from "next/image";
import LogoUv from "/public/universidad_veracruzana_logo.svg";
import Button from "/components/Global/Button";
import { GroupForm } from "/components/Forms/GroupForm";
import { dataAcount } from "/data";
import { useState } from "react";
import ErrorMessages from "../components/Messages/ErrorMessages";
import {
  LOGIN_AUTH_ESTUDIANTE,
  DASHBOARD_ESTUDIANTE,
  LOGIN_AUTH_PERSONAL,
  DASHBOARD_PERSONAL,
  REGISTRO,
} from "../constants";
import axios from "axios";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const actual = router.pathname.includes("login-personal");
  const [errors, setErrors] = useState();
  const [showErrors, setShowErrors] = useState(false);
  const [data, setData] = useState({
    usernameA: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setData({ ...data, [name]: value });
  };

  const handleClick = () => {
    setShowErrors(!showErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (data.usernameA === "" || dataAcount.password === "")
        setErrors("Ingresa un usuario y contraseña");
      if (actual) {
        const resPersonal = await axios.post(LOGIN_AUTH_PERSONAL, data);
        const { message } = resPersonal.data;
        if (message === "Inicio exitoso") router.push(DASHBOARD_PERSONAL);
      } else {
        const resEstudiante = await axios.post(LOGIN_AUTH_ESTUDIANTE, data);
        const { message } = resEstudiante.data;
        if (message === "Inicio exitoso") router.push(DASHBOARD_ESTUDIANTE);
      }
    } catch (err) {
      const { message } = err.response.data;
      setErrors(message);
    }
  };
  return (
    <Container>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Image
            src={LogoUv}
            alt="Universidad Veracruzana"
            title="Universidad Veracruzana"
            width={0}
            height={0}
            className="mx-auto h-16 w-auto"
          />
          <h2 className="mt-6 text-center text-3xl font-medium tracking-tight text-gray-800">
            Inicia Sesión
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            O{" "}
            <a
              href={REGISTRO}
              className="font-medium text-green-600 hover:text-blue-500"
            >
              registrate
            </a>
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {dataAcount.map((item) => (
                <GroupForm
                  name={item.name}
                  text={item.text}
                  placeholder={item.placeholder}
                  type={item.type}
                  colSM={item.colSM}
                  colQuery={item.colQuery}
                  key={item.name}
                  handleChange={handleChange}
                />
              ))}
              <div>
                <ErrorMessages
                  errors={errors}
                  show={showErrors}
                  styles={"bg-red-200 text-red-800"}
                />
                <div onClick={handleClick}>
                  <Button
                    bg="bg-green-600 w-full mo:w-42"
                    textColor="text-gray-100"
                    text="Iniciar Sesión"
                    hover="bg-green-700"
                    href="#"
                  />
                </div>
              </div>
            </form>
            <div className="mt-4 text-blue-600 hover:text-blue-800">
              <button
                onClick={(e) => {
                  router.push("/login-personal/");
                }}
              >
                Soy personal administrativo
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
