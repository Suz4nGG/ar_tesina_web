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
    tel,
    correo,
    tipoDiscapacidad,
    sobreDiscapacidad,
    carrera,
    usernameA,
    password,
  } = req.body;
  // ! Validar que el estudiante no tenga otra cuenta ya
  try {
    const [result2] = await pool.query(
      "SELECT nombreCompleto, usernameA FROM estudiantes WHERE nombreCompleto = ? AND usernameA = ?",
      [nombreCompleto, usernameA]
    );
    if (result2.length === 0) {
      const salt = 10;
      const passHash = await bcrypt.hash(password, salt);
      const [result] = await pool.query("INSERT INTO estudiantes SET ?", {
        nombreCompleto,
        tel,
        correo,
        tipoDiscapacidad: tipoDiscapacidad.toString(),
        sobreDiscapacidad,
        carrera,
        usernameA,
        passwordU: passHash,
      });
      return res.status(200).json({
        nombreCompleto,
        tel,
        correo,
        tipoDiscapacidad: tipoDiscapacidad.toString(),
        sobreDiscapacidad,
        carrera,
        usernameA,
        id: result.insertId,
      });
    } else {
      return res.status(401).json({
        message:
          "Revisa el nombre de usuario o nombre completo proporcionado, ya existe una cuenta con esos datos",
      });
    }
  } catch (err) {
    console.log(err)
    return res
      .status(500)
      .json({ message: "Error del servidor intentelo más tarde" });
  }
};
