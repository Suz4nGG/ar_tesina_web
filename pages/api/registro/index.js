import { pool } from "../../../config/db";
import bcrypt from "bcrypt";

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
    permanente,
    username,
    password
  } = req.body;
  const salt = 10
  const passHash = await bcrypt.hash(password, salt)
  console.log("PWW",passHash)
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
    tiempoDisc: temporal || permanente,
    username,
    passwordU: passHash
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
