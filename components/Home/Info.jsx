import Link from "next/link";
import ItemsCards from "./components/ItemsCards";
import Informacion from "/public/informacion.jpg";
import Respuesta from "/public/respuesta.jpg";
import Tiempo from "/public/tiempo.jpg";
import Image from "next/image";
const infoAjustes = [
  {
    title: "Presentación de la información.",
    info: "Consiste en que los estudiantes puedan acceder a la información de diversos modos alternativos, por ejemplo información táctil, auditiva, visual.",
    adaptaciones: [
      "Ampliación de la letra o imagen.",
      "Amplitud de la palabra o sonido.",
      "Videos o animaciones.",
      "Velocidad de la animación o sonido.",
      "Ayudas técnicas de acceso a la información.",
      "Utilización de textos escritos o hablados.",
      "Uso de lengua de señas.",
      "Uso de sistema braille.",
      "Uso de gráficos táctiles.",
      "Proporcionar a los estudiantes materiales impresos con un buen contraste y un tamaño de letra óptimo.",
      "Utilizar otros sentidos para reforzar el aprendizaje mediante el uso de materiales táctiles tales como documentos tridimensionales (mapas y diagramas) y textos en relieve.",
    ],
    icon: Informacion,
    headerColor: "bg-orange-500",
    borderColor: "border-orange-200",
  },
  {
    title: "Formas de respuesta.",
    info: "Esta adaptación permite que los estudiantes ejecuten sus actividades como tareas o evaluaciones a través de diversas formas utilizando dispositivos o ayudas técnicas.",
    adaptaciones: [
      "Respuesta a través de computador adaptado.",
      "Ofrecer posibilidades de expresión a través de múltiples medios comunicación: Texto escrito Sistema braille Lengua de señas Transcripción de respuesta del estudiante Ilustraciones, etc.",
      "Privilegiar los trabajos y las presentaciones orales.",
      "Considerar ayudas técnicas (Tecnológicas).",
    ],
    headerColor: "bg-blue-500",
    borderColor: "border-blue-200",
    icon: Respuesta,
  },
  {
    title: "Organización del tiempo y horario.",
    info: "La organización de tiempo y horario permite el acceso autónomo de los estudiantes a través de adecuaciones en actividades o evaluaciones.",
    adaptaciones: [
      "Adecuar el tiempo utilizado en una actividad o evaluación.",
      "Organizar espacios de distención.",
      "Considerar según sea necesario el tiempo de inicio de la clase respecto a estudiantes que puedan tardar más en llegar al aula.",
      "Otorgar mayor tiempo si es necesario para la realización de actividades y evaluaciones.",
      "Ofrecer tiempo adecuado para que el estudiante reconozca táctilmente los materiales con los que va a trabajar.",
    ],
    headerColor: "bg-green-500",
    borderColor: "border-green-200",
    icon: Tiempo,
  },
];

const Info = () => {
  return (
    <div className="relative bg-white py-9">
      <section
        aria-labelledby="social-impact-heading"
        className="mx-auto sm:pt-5"
      >
        <div className="relative overflow-hidden">
          <div className="relative py-10 ">
            <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
              <h2
                id="social-impact-heading"
                className="text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl"
              >
                <span className="block sm:inline">
                  {" "}
                  ¿Cómo puedo solicitar una adaptación curricular?
                </span>
              </h2>
              <p className="mt-9 text-xl text-gray-600">
                Para solicitar una adaptación curricular solo necesitas haber
                marcado los documentos con los que cuentas para demostrar tu
                discapacidad. Posteriormente, en la siguiente página, podrás
                encontrar los diferentes tipos de adaptaciones que provee la
                Universidad Veracruzana, en los cuales seleccionaras cuál
                requieres acorde a tus necesidades. Terminando la solicitud
                tendrás que esperar a que la secretaria académica atienda tu
                solicitud y estar pendiente al cambio de estado conforme tu
                solicitud este siendo atendida.
              </p>

              <Link
                className="mt-8 block w-full rounded-md border border-transparent bg-green-500 py-3 px-8 text-base font-medium text-white hover:bg-green-600 sm:w-auto"
                href="/pdf/tipos_adaptaciones.pdf"
                download="tipos_adaptaciones.pdf"
                target="_blank"
              >
                Descargar ejemplos de tipos de adaptación
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-screen-sm px-4 sm:px-6 lg:px-8 mt-9 border-t-2 py-4 border-grey-200">
        <h1 className="mt-10 text-3xl font-bold tracking-tight text-gray-700 text-center sm:text-4xl break-words">
          <span>Tipos de ajustes razonables</span>
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center prose prose-lg prose-indigo mx-auto text-gray-600  mt-6 text-xl leading-8">
        <div>
          <p className="text-center">
            Cuentas con tres tipos de adaptaciones curriculares, para que puedas
            solicitarla acorde a tus necesidades.
          </p>
        </div>
      </div>
      <ul className="">
        {infoAjustes.map((item) => (
          <ItemsCards
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
  );
};

export default Info;
