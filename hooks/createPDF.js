import { jsPDF } from "jspdf";
import { uvLogo } from "./IMAGES/LOGOUV";
import { dateParse } from "/pages/registro/validations";
import "jspdf-autotable";
import { states } from "../pages/data";

export const createPDF = async (data, infoUser, prev) => {
  const {
    idSolicitud,
    informacion,
    respuesta,
    tiempoHorario,
    adapAnteriores,
    motSolicitud,
    experienciaR,
    createdAt,
    estadoSolicitud,
  } = data;
  // ! revisar sobre los datos de la discapcidad que briunda el estudiante en el registro, conservar solo la de la solicitud (adapatciones)
  const {
    nombreCompleto,
    nombreResponsable,
    fecNacimiento,
    edad,
    tel,
    ciudad,
    cp,
    municipio,
    tipoDiscapacidad,
    sobreDiscapacidad,
    carrera,
    tiempoDisc,
  } = infoUser;
  const stateSol = states.find((item) => item[estadoSolicitud]);
  const cr = dateParse(createdAt);
  const cr1 = dateParse(fecNacimiento);
  const PDF = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4",
    putOnlyUsedFonts: true,
    floatPrecision: 16,
  });
  const docWidth = PDF.internal.pageSize.getWidth();
  const docHeight = PDF.internal.pageSize.getHeight();
  PDF.setTextColor("#333333");
  PDF.addImage(uvLogo, "PNG", 10, 10, 30, 40);
  PDF.setFontSize(18);
  PDF.setFont("helvetica", "bold");
  PDF.text(`Solicitud de Adaptación de Ajustes razonables`, 50, 20);
  PDF.text(50, 30, `Universidad Veracruzana`);
  PDF.text(50, 40, `Estado: ${stateSol[estadoSolicitud]}`);
  PDF.text(`Número de solicitud: ${idSolicitud}`, 50, 50);
  PDF.line(0, 55, docWidth, 55);
  PDF.setFontSize(18);
  PDF.text(`Datos del solicitante`, 10, 65);
  PDF.setFontSize(16);
  PDF.setFont("helvetica", "semibold");
  PDF.text(`Nombre estudiante: ${nombreCompleto}`, 10, 74);
  PDF.text(`Nombre responsable: ${nombreResponsable}`, 10, 80);
  PDF.text(`Fecha de nacimiento: ${cr1}`, 10, 86);
  PDF.text(`Edad: ${edad}`, 10, 92);
  PDF.text(`Contacto: ${tel}`, 10, 98);
  PDF.text(`Ciudad: ${ciudad}`, 10, 104);
  PDF.text(`Código postal: ${cp}`, 10, 110);
  PDF.text(`Municipio: ${municipio}`, 10, 116);
  PDF.text(`Tipo de discapacidad: ${tipoDiscapacidad}`, 10, 122);
  PDF.text(`Licenciatura: ${carrera}`, 10, 128);
  PDF.text(`Tiempo discapacidad: ${tiempoDisc}`, 10, 134);
  PDF.text(`Experiencia recepcional: ${experienciaR}`, 10, 140);
  PDF.line(0, 145, docWidth, 145);
  PDF.setFontSize(18);
  PDF.setFont("helvetica", "bold");
  PDF.text(`Detalles de la discapacidad`, 10, 155);
  PDF.setFontSize(16);
  PDF.setFont("helvetica", "semibold");
  PDF.text(`${sobreDiscapacidad}`, 10, 164);
  PDF.line(0, 180, docWidth, 180);
  PDF.setFont("helvetica", "bold");
  PDF.setFontSize(18);
  PDF.text(`Datos de la solicitud`, 10, 190);
  PDF.setFontSize(16);
  PDF.setFont("helvetica", "semibold");
  PDF.text(`Creación de la solicitud: ${cr}`, 10, 200);
  // ! Tabla de opciones
  // * Presentación de la información
  PDF.autoTable({
    head: [
      [
        "Presentación de la información",
      ],
    ],
    body: [
      [informacion]
    ],
    headStyles: {
      halign: "left",
      valign: "middle",
      fillColor: [27, 84, 158],
      overflow: "linebreak",
      textColor: "#f5f5f5"
    },
    styles: {
      overflow: "linebreak",
      cellPadding: 4,
      cellWidth: "wrap",
      halign: "left",
      valign: "middle",
      fontSize: 15,
      overflowColumns: "linebreak",
      textColor: [51, 51, 51]
    },
    theme: "grid",
    startY: 175,
    tableWidth: "auto",
    margin: { left: 10, right: 10 },
    rowPageBreak: 'avoid',
    pageBreak: "avoid",
  });
  // * Formas de respuesta
  PDF.autoTable({
    head: [
      [
        "Formas de respuesta",
      ],
    ],
    body: [
      [respuesta]
    ],
    headStyles: {
      halign: "left",
      valign: "middle",
      fillColor: [27, 84, 158],
      overflow: "linebreak",
      textColor: "#f5f5f5"
    },
    styles: {
      overflow: "linebreak",
      cellPadding: 4,
      cellWidth: "wrap",
      halign: "left",
      valign: "middle",
      fontSize: 15,
      overflowColumns: "linebreak",
      textColor: [51, 51, 51]
    },
    theme: "grid",
    startY: 190,
    tableWidth: "auto",
    margin: { left: 10, right: 10 },
    rowPageBreak: 'avoid',
    pageBreak: "avoid",
  });
  // * Tiempo y horario
  PDF.autoTable({
    head: [
      [
        "Tiempo y horario",
      ],
    ],
    body: [
      [tiempoHorario]
    ],
    headStyles: {
      halign: "left",
      valign: "middle",
      fillColor: [27, 84, 158],
      overflow: "linebreak",
      textColor: "#f5f5f5"
    },
    styles: {
      overflow: "linebreak",
      cellPadding: 4,
      cellWidth: "wrap",
      halign: "left",
      valign: "middle",
      fontSize: 15,
      overflowColumns: "linebreak",
      textColor: [51, 51, 51]
    },
    theme: "grid",
    pageBreak: "avoid",
    startY: 200,
    tableWidth: "auto",
    margin: { left: 10, right: 10 },
    rowPageBreak: 'avoid'
  });
  // * Adaptaciones anteriores
  PDF.autoTable({
    head: [
      [
        "Adaptaciones anteriores",
      ],
    ],
    body: [
      [adapAnteriores]
    ],
    headStyles: {
      halign: "left",
      valign: "middle",
      fillColor: [27, 84, 158],
      overflow: "linebreak",
      textColor: "#f5f5f5"
    },
    styles: {
      overflow: "linebreak",
      cellPadding: 4,
      cellWidth: "wrap",
      halign: "left",
      valign: "middle",
      fontSize: 15,
      overflowColumns: "linebreak",
      textColor: [51, 51, 51]
    },
    theme: "grid",
    pageBreak: "avoid",
    startY: 200,
    tableWidth: "auto",
    margin: { left: 10, right: 10 },
    rowPageBreak: 'avoid'
  });
  // * Motivo de la solicitud
  PDF.autoTable({
    head: [
      [
        "Motivo de la solicitud",
      ],
    ],
    body: [
      [motSolicitud]
    ],
    headStyles: {
      halign: "left",
      valign: "middle",
      fillColor: [27, 84, 158],
      overflow: "linebreak",
      textColor: "#f5f5f5"
    },
    styles: {
      overflow: "linebreak",
      cellPadding: 4,
      cellWidth: "wrap",
      halign: "left",
      valign: "middle",
      fontSize: 15,
      overflowColumns: "linebreak",
      textColor: [51, 51, 51]
    },
    theme: "grid",
    pageBreak: "avoid",
    startY: 200,
    tableWidth: "auto",
    margin: { left: 10, right: 10 },
    rowPageBreak: 'avoid'
  });
  const namePDF = nombreCompleto.toLowerCase().split(' ').join('_')
  console.log()
  PDF.save(`adaptacion_curricular_${namePDF}_${idSolicitud}`);
  if (prev) {
    PDF.output("bloburl");
    return;
  }
};
