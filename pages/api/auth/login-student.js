import { pool } from "../../../config/db";
import bcrypt from "bcrypt";
import generateToken from "../../../hooks/jwt";

export default async function loginHandler(req, res) {
  const { usernameA, password } = req.body;
  try {
    const [result] = await pool.query(
      "SELECT passwordU, username FROM estudiantes WHERE username = ?",
      [usernameA]
    );
    const { passwordU, username } = result[0];
    const validatePasswordHash = await bcrypt.compare(password, passwordU);
    if (!(validatePasswordHash && username)) {
      return res
        .status(401)
        .json({ error: "Usuario o contraseña incorrectos" });
    }
    const serialized = generateToken({ username })
    res.setHeader("Set-Cookie", serialized);
    return res.status(200).json({ message: "Inicio exitoso" });
  } catch (error) {
    return res.status(401).json({ error: "Usuario o contraseña incorrectos" });
  }
}

// e2u6qdPsrX#
