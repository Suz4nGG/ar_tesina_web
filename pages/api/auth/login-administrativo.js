import { pool } from "/config/db";
import bcrypt from "bcrypt";
import generateToken from "/hooks/jwt";

export default async function loginHandler(req, res) {
  const { usernameA, password } = req.body;
  try {
    const [result] = await pool.query(
      "SELECT usernameP, passwordP FROM personalAdministrativo WHERE usernameP = ?",
      [usernameA]
    );
    const { passwordP: passwd, usernameP: userP } = result[0];
    const validatePasswordHash = await bcrypt.compare(password, passwd);
    if (!(validatePasswordHash && userP)) {
      return res
        .status(401)
        .json({ error: "Usuario o contraseña incorrectos" });
    }
    const serialized = generateToken({ usernameA: userP })
    res.setHeader("Set-Cookie", serialized)
    return res.status(200).json({ message: "Inicio exitoso" });
  } catch (err) {
    return res.status(500).json({ message: "Err" });
  }
}
