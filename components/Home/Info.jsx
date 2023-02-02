import React from "react";
import Document from "/components/icons/Document";
import Translate from "/components/icons/Translate"
import Clock from "/components/icons/Clock"
import Link from "next/link";
const infoAjustes = [
  {
    title: "Presentación de la información",
    info: "Consiste en que los estudiantes puedan acceder a la información de diversos modos alternativos, por ejemplo información táctil, auditiva, visual.",
    adaptaciones: [
      "Ampliación de la letra o imagen",
      "Amplitud de la palabra o sonido",
      "Videos o animaciones ",
      "Velocidad de la animación o sonido",
      "Ayudas técnicas de acceso a la información",
      "Utilización de textos escritos o hablados",
      "Uso de lengua de señas",
      "Uso de sistema braille",
      "Uso de gráficos táctiles",
      "Proporcionar a los estudiantes materiales impresos con un buen contraste y un tamaño de letra óptimo.",
      "Utilizar otros sentidos para reforzar el aprendizaje mediante el uso de materiales táctiles tales como documentos tridimensionales (mapas y diagramas) y textos en relieve.",
    ],
    icon: <Document h="15" w="15" />,
    headerColor: "bg-orange-500",
    borderColor: "border-orange-200",

  },
  {
    title: "Formas de respuesta",
    info: "Esta adaptación permite que los estudiantes ejecuten sus actividades como tareas o evaluaciones a través de diversas formas utilizando dispositivos o ayudas técnicas.",
    adaptaciones: [
      "Respuesta a través de computador adaptado",
      "Ofrecer posibilidades de expresión a través de múltiples medios comunicación: Texto escrito Sistema braille Lengua de señas Transcripción de respuesta del estudiante Ilustraciones, etc.",
      "Privilegiar los trabajos y las presentaciones orales.",
      "Considerar ayudas técnicas (Tecnológicas).",
    ],
    headerColor: "bg-blue-500",
    borderColor: "border-blue-200",
    icon: <Translate h="15" w="15"/>
  },
  {
    title: "Organización del tiempo y horario.",
    info: "La organización de tiempo y horario permite el acceso autónomo de los estudiantes a través de adecuaciones en actividades o evaluaciones.",
    adaptaciones: [
      "Adecuar el tiempo utilizado en una actividad o evaluación",
      "Organizar espacios de distención",
      "Considerar según sea necesario el tiempo de inicio de la clase respecto a estudiantes que puedan tardar más en llegar al aula.",
      "Otorgar mayor tiempo si es necesario para la realización de actividades y evaluaciones.",
      "Ofrecer tiempo adecuado para que el estudiante reconozca táctilmente los materiales con los que va a trabajar.",
    ],
    headerColor: "bg-green-500",
    borderColor: "border-green-200",
    icon: <Clock h="15" w="15" />,

  },
];

const ListAjustes = ({ title, info, adaptaciones, icon, headerColor, borderColor }) => {
  return (
    <li className={`col-span-1 flex flex-col bg-white mt-6 text-center divide-y divide-gray-20 rounded-md shadow-sm border ${borderColor}`}>
      <h1 className={`flex justify-center items-center h-36 flex-col ${headerColor}`}>
        <p className="h-10 w-10 mb-4 text-gray-800">{icon}</p>
        <span className="text-center text-xl font-medium leading-8 tracking-tight text-gray-800 sm:text-2xl break-words px-2">
          {title}
        </span>
      </h1>
      <div className={`divide-y divide-gray-200 flex justify-center flex-col items-center px-4`}>
        <p className="text-justify h-40 flex justify-center flex-col items-center">
          {info}
        </p>
        <ul className="px-5">
          <p className="my-4">Ejemplos</p>
          {adaptaciones.map((item) => (
            <li key={item} className="list-decimal text-left py-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

const Info = () => {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8 bg-white py-9">
      <div className="mx-auto max-w-prose px-4 sm:px-6 lg:px-8">
        <h1>
          <span className="block text-center text-2xl font-medium leading-8 tracking-tight text-gray-800 sm:text-3xl break-words">
            ¿Cómo puedo solicitar una adaptación curricular?
          </span>
        </h1>
      </div>
      <div className="text-justify prose prose-lg prose-indigo mx-auto mt-6 text-gray-600">
        <div>
          <p className="text-justify">
            Para solicitar una adaptación curricular solo necesitas haber
            marcado los documentos con los que cuentas para demostrar tu
            discapacidad. Posteriormente, en la siguiente página, podrás
            encontrar los diferentes tipos de adaptaciones que provee la
            Universidad Veracruzana, en los cuales seleccionaras cuál requieres
            acorde a tus necesidades. Terminando la solicitud tendrás que
            esperar a que la secretaria académica atienda tu solicitud y estar
            pendiente al cambio de estado conforme tu solicitud este siendo
            atendida.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-prose px-4 sm:px-6 lg:px-8 mt-9 border-t-2 py-4 border-grey-200">
        <h1>
          <span className="block text-center text-2xl font-medium leading-8 tracking-tight text-gray-800 sm:text-3xl break-words ">
            Tipos de ajustes razonables
          </span>
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center text-justify prose prose-lg prose-indigo mx-auto mt-6 text-gray-600">
        <div>
          <p className="text-justify">
            Cuentas con tres tipos de adaptaciones curriculares, para que puedas
            solicitarla acorde a tus necesidades.
          </p>
          <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {infoAjustes.map((item) => (
              <ListAjustes
                key={item.title}
                title={item.title}
                info={item.info}
                adaptaciones={item.adaptaciones}
                icon={item.icon}
                headerColor={item.headerColor}
                borderColor={item.borderColor}
              />
            ))}
          </ul>
        </div>
        <div className="mt-10 max-w-fit">
          <Link className="flex items-center justify-center
        rounded px-4 py-3
        text-base font-medium
        shadow hover:bg-green-700 sm:px-8 w-full text-gray-100 bg-green-600 mt-4" href="/pdf/tipos_adaptaciones.pdf" download="tipos_adaptaciones.pdf" target='_blank'>
            Descargar ejemplos de tipos de adaptación
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
