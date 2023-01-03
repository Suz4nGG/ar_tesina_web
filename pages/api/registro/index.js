import { pool } from "../../../config/db";

export default async function registro(req, res) {
  switch (req.method) {
    case "GET":
      return res.status(200).json({ name: "ENTRO" });
    case "POST":
      return await registerStudent(req, res);
  }
}



const registerStudent = async (req, res) => {
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
    adaptaciones,
    tiempoDisc,
    temporal,
    permanente
  } = req.body;
  const [result] = await pool.query("INSERT INTO estudiantes SET ?", {
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
    adaptaciones,
    tiempoDisc: temporal || permanente
  })
  return res.status(200).json({
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
    adaptaciones,
    tiempoDisc,
    id: result.insertId
  })
};
