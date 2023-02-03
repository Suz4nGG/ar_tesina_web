import { PDFViewer } from "@react-pdf/renderer";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import { useEffect, useState } from "react";

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

// Create styles
const styles = StyleSheet.create({
  section: {
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  headerTable: {
    backgroundColor: "#098137",
    color: "#F5F5F5",
    fontSize: 12,
    padding: 10,
    marginTop: 10,
  },
  headerTable2: {
    backgroundColor: "#1B539E",
    color: "#F5F5F5",
    fontSize: 12,
    padding: 10,
    marginTop: 10,
  },
  columnTable: {
    color: "#333333",
    fontSize: 12,
    padding: 10,
  },
  body: {
    backgroundColor: "#F5F5F5",
    width: "100%",
    padding: 30,
    flexDirection: "column",
    fontFamily: "Times-Roman",
  },
  image: {
    width: "30%",
    paddingHorizontal: 20,
  },
  text: {
    width: "100%",
    paddingVertical: 3,
    color: "#333333",
    fontSize: 12,
  },
  title: {
    fontSize: 14,
    paddingTop: 5,
    color: "#333333",
  },
  title2: {
    fontSize: 20,
    paddingTop: 5,
    color: "#333333",
  },
});

// Create Document Component
export const PDF = ({
  dataS: {
    carrera,
    correo,
    nombreCompleto,
    sobreDiscapacidad,
    tel,
    tipoDiscapacidad,
  },
  dataSol: {
    idSolicitud,
    informacion,
    respuesta,
    tiempoHorario,
    adapAnteriores,
    motSolicitud,
    experienciaR,
    createdAt,
    estadoSolicitud,
  },
}) => (
  <Document title={`AC_${nombreCompleto}`.toLowerCase().split(" ").join("_")}>
    <Page size="A4" style={styles.body}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          src="/FF.png"
          alt="Logo Universidad Veracruzana"
        />
        <View>
          <Text style={styles.title}>Universidad Veracruzana</Text>
          <Text style={styles.title}>Portal de Ajustes Curriculares</Text>
          <Text style={styles.title}>Solicitud No. {idSolicitud}</Text>
          <Text style={styles.title}>E.E. {experienciaR}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title2}>Contrato de Ajustes Curriculares</Text>
        <Text style={styles.title}>Descripción del contrato de AC</Text>
        <Text style={styles.text}>
          Descripción del contrato de AC Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nulla ultrices metus malesuada, vehicula leo id,
          efficitur odio. Nunc vulputate lacinia sem vel sollicitudin.
          Suspendisse erat eros, finibus viverra purus a, pulvinar pharetra
          ligula. Aliquam eget ex blandit, tempor odio ut, sodales nulla.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Datos del solicitante</Text>
        <Text style={styles.text}>
          Nombre del solicitante: {nombreCompleto}
        </Text>
        <Text style={styles.text}>Discapacidad: {tipoDiscapacidad}</Text>
        <Text style={styles.text}>Programa educativo: {carrera}</Text>
        <Text style={styles.text}>Correo electrónico: {correo}</Text>
        <Text style={styles.text}>Teléfono: {tel}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Datos de la adaptación curricular</Text>
        <Text style={styles.headerTable}>Presentación de la información</Text>
        <Text style={styles.columnTable}>{informacion}</Text>
        <Text style={styles.headerTable}>Formas de respuesta</Text>
        <Text style={styles.columnTable}>{respuesta}</Text>
        <Text style={styles.headerTable}>Tiempo y horario</Text>
        <Text style={styles.columnTable}>{tiempoHorario}</Text>
      </View>
    </Page>
    <Page size="A4" style={styles.body}>
      <View style={styles.section}>
        <Text style={styles.title}>Datos de adaptaciones anteriores</Text>
        <Text style={styles.headerTable2}>
          Adaptaciones recibidas con anterioridad
        </Text>
        <Text style={styles.columnTable}>{adapAnteriores}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Motivo de la solicitud</Text>
        <Text style={styles.headerTable2}>Motivo</Text>
        <Text style={styles.columnTable}>{motSolicitud}</Text>
      </View>
    </Page>
  </Document>
);

export const Adaptacion = (dataS) => {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  return (
    <PDFViewer className="w-full h-screen mt-4">
      <PDF {...dataS} />
    </PDFViewer>
  );
};
