import React from "react";

const dataSolicitud = [
  {
    title: "Presentación de la información",
    array: [
      "Ampliación de la letra o imagen en archivos o documentos PDF o DOCX",
      "Amplitud de la palabra o sonido en videotutoriales",
    ],
  },
  {
    title: "Formas de respuestas",
    array: [
      "Puntuar los trabajos y las presentaciones orales",
      "Considerar ayudas técnicas (lectores de pantalla, braille).",
    ],
  },
  {
    title: "Organización del tiempo y horario",
    array: [
      "Otorgar mayor tiempo si es necesario para la realización de actividades y evaluaciones.",
      "Ofrecer tiempo adecuado para que el estudiante reconozca táctilmente los materiales con los que va a trabajar.",
    ],
  },
  {
    title: "Adaptaciones anteriores",
    array: [
      "Otorgar mayor tiempo si es necesario para la realización de actividades y evaluaciones.",
      "Puntuar los trabajos y las presentaciones orales",
      "Ofrecer tiempo adecuado para que el estudiante reconozca táctilmente los materiales con los que va a trabajar.",
    ],
  },
  {
    title: "Motivo de la solicitud",
    array: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et varius elit. Cras vitae quam ac purus cursus mollis bibendum aliquam magna. In sed volutpat est. Mauris dictum augue sapien, sagittis fringilla turpis consequat ut. Suspendisse at eleifend magna. Duis sodales, velit sed facilisis facilisis, nunc orci commodo ipsum, sit amet cursus nulla purus sit amet enim. Nullam nec sem ante. Pellentesque a lorem lacus. Nam porta sollicitudin orci a dapibus. Donec vel ultricies orci. Praesent eu odio at nulla pharetra dapibus ac et ex.",
    ],
  },
  {
    title: "Experiencia Educativa",
    array: [
      "Criptografía",
    ],
  }
];

const Tipos = ({ text, data }) => {
  return (
    <div className="py-5 text-gray-800">
      <h1 className="text-xl p-4 bg-blue-200 rounded text-blue-900">{text}</h1>
      <ul className="list-outside list-decimal px-6 py-4">
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const EjemploSolicitud = () => {
  return (
    <div className="py-5 text-gray-800">
      <h1 className="text-xl">Ejemplo de Solicitud de Ajuste Curricular</h1>
      <div className="py-5">
        <p className="bg-green-200 text-green-800 py-4 px-3 max-w-fit rounded">
          Condición: Baja visión
        </p>
        {dataSolicitud.map((item) => (
          <Tipos key={item.title} text={item.title} data={item.array} />
        ))}
      </div>
    </div>
  );
};

export default EjemploSolicitud;
