import { pool } from "../../../config/db";
import bcrypt from "bcrypt";
import generateToken from "../../../hooks/jwt";

export default async function loginHandler(req, res) {
  const { usernameA, password } = req.body;
  try {
    // ! Sin datos en el request
    if (usernameA === "" || password === "")
      return res
        .status(401)
        .json({ message: "Ingresa un usuario y contraseña" });
    // ! Consultando a la BD
    const [result] = await pool.query(
      "SELECT passwordU, usernameA FROM estudiantes WHERE usernameA = ?",
      [usernameA]
    );
    // ! Sin datos en la respuesta de la consulta
    if (result.length === 0) {
      return res
        .status(401)
        .json({ message: "Usuario o contraseña incorrectos" });
    }
    // ^ Comparando datos del request
    const { passwordU } = result[0];
    const validatePasswordHash = await bcrypt.compare(password, passwordU);
    // ! Sin coincidencias
    if (!(validatePasswordHash && usernameA)) {
      return res
        .status(401)
        .json({ message: "Usuario o contraseña incorrectos" });
    }
    // * Generando el TOKEN de sesión
    const serialized = generateToken({ usernameA });
    res.setHeader("Set-Cookie", serialized);
    return res.status(200).json({ message: "Inicio exitoso" });
  } catch (error) {
    return res.status(500).json({
      message:
        "Ha ocurrido un error al conectarse con el servidor, intente más tarde",
    });
  }
}
