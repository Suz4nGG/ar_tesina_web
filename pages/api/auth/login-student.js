import { pool } from "../../../config/db";
import bcrypt from "bcrypt";
import generateToken from "../../../hooks/jwt";

export default async function loginHandler(req, res) {
  const { usernameA, password } = req.body;
  try {
    const [result] = await pool.query(
      "SELECT passwordU, usernameA FROM estudiantes WHERE usernameA = ?",
      [usernameA]
    );
    const { passwordU } = result[0];
    const validatePasswordHash = await bcrypt.compare(password, passwordU);
    if (!(validatePasswordHash && usernameA)) {
      return res
        .status(401)
        .json({ error: "Usuario o contraseña incorrectos" });
    }
    const serialized = generateToken({ usernameA })
    res.setHeader("Set-Cookie", serialized);
    return res.status(200).json({ message: "Inicio exitoso" });
  } catch (error) {
    console.log(error)
    return res.status(401).json({ error: "Usuario o contraseña incorrectos" });
  }
}

// e2u6qdPsrX#
