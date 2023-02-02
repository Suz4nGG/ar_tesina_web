import React from "react";

const INFORMACION = [
  "Ampliación de la letra o imagen",
  "Amplitud de la palabra o sonido",
  "Videos o animaciones",
  "Velocidad de la animación o sonido",
  "Ayudas técnicas de acceso a la información",
  "Utilización de textos escritos o hablados",
  "Uso de lengua de señas",
  "Uso de sistema braille",
  "Uso de gráficos táctiles",
];

const RESPUESTA = [
  "Respuesta a través de computador adaptado",
  "Ofrecer posibilidades de expresión a través de múltiples medios comunicación:",
  "Texto escrito",
  "Sistema braille",
  "Lengua de señas",
  "Transcripción de respuesta del estudiante",
  "Ilustraciones, etc.",
];

const TIEMPOHORARIO = [
  "Adecuar el tiempo utilizado en una actividad o evaluación",
  "Organizar espacios de distención",
  "Considerar según sea necesario el tiempo de inicio de la clase respecto a estudiantes que puedan tardar más en llegar al aula.",
];

const ajustesPropuestos = [
  {
    name: "AJUSTES RAZONABLES PARA LA PRESENTACIÓN DE LA INFOMACIÓN",
    icon: "",
    ajustes: INFORMACION,
  },
  {
    name: "AJUSTES RAZONABLES PARA FORMAS DE RESPUESTAS",
    icon: "",
    ajustes: RESPUESTA,
  },
  {
    name: "AJUSTES RAZONABLES PARA TIEMPO Y HORARIO",
    icon: "",
    ajustes: TIEMPOHORARIO,
  },
];

const AjustesPropuestos = ({ ajustes, icon, name }) => {
  return (
    <div className="sm:flex lg:block">
      <div className="mt-4 sm:mt-0 lg:mt-6 lg:ml-0">
        <h3 className="font-medium text-gray-900">{name}</h3>
        <ul className="list-outside list-decimal px-4 py-4">
          {ajustes.map((item) => (
            <li key={item} className=" text-gray-500 py-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Contrato = ({}) => {
  return (
    <>
      <div className="bg-white mt-4">
        <div className="mx-auto pb-24 sm:pb-32">
          <div className="mx-auto">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold tracking-tight text-gray-700">
                Contrato de Ajustes Curriculares
              </h2>
              <h3 className="mt-4">DESCRIPCIÓN DEL CONTRATO DE A.R.</h3>
              <p className="mt-4 text-gray-500">
                loribus dolores nostrum quia qui natus officia quod Doloribus
                dolores nostrum quia qui natus officia quod Doloribus dolores
                nostrum quia qui natus officia quod Doloribus dolores nostrum
                quia qui natus officia quod Doloribus dolores nostrum quia qui
                natus officia quod.
              </p>
            </div>
            <h3 className="mt-7 uppercase">
              Adaptaciones propuestas para el estudiante en función de la
              discapacidad presentada
            </h3>
            <p className="mt-5 text-gray-500">
              loribus dolores nostrum quia qui natus officia quod Doloribus
              dolores nostrum quia qui natus officia quod Doloribus dolores
            </p>
            <div className="mt-7 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
              {ajustesPropuestos.map((item) => (
                <AjustesPropuestos
                  key={item.name}
                  ajustes={item.ajustes}
                  icon={item.icon}
                  name={item.name}
                />
              ))}
            </div>
            <div>
              <h3 className="mt-7 uppercase">
                Aplicación de Ajustes Curriculares
              </h3>
              <p className="mt-5 text-gray-500">
                loribus dolores nostrum quia qui natus officia quod Doloribus
                dolores nostrum quia qui natus officia quod Doloribus dolores
              </p>
            </div>
            {/* BOX EDITOR DE TEXTO */}
            <div className="mt-5 rounded h-60 border border-green-600 py-5 flex justify-center">
              EDITOR
            </div>
            <div>
              <h3 className="mt-7 uppercase">
                Firmar Contrato de Ajustes Curriculares
              </h3>
              <p className="mt-5 text-gray-500">
                loribus dolores nostrum quia qui natus officia quod Doloribus
                dolores nostrum quia qui natus officia quod Doloribus dolores
              </p>
              <button
                type="button"
                // onClick={handleChangeActualizar}
                className="rounded-md mt-4 px-4 py-2 font-medium bg-orange-600 text-white focus:outline-none"
              >
                Firmar
              </button>
              <button
                type="button"
                // onClick={handleChangeActualizar}
                className="rounded-md mt-4 px-4 py-2 font-medium bg-green-600 text-white focus:outline-none ml-2"
              >
                Previsualizar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contrato;
