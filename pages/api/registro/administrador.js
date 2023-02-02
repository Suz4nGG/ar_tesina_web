import { pool } from "/config/db";
import bcrypt from "bcrypt";

export default async function loginHandler(req, res) {
  const { usernameP, passwordP, nombreCompleto, edad, tel } = req.body;
  console.log(req.body);
  try {
    const salt = 10;
    const passHash = await bcrypt.hash(passwordP, salt);
    const [result] = await pool.query(
      "INSERT INTO personalAdministrativo SET ?",
      { usernameP, passwordP: passHash, nombreCompleto, edad, tel }
    );
    return res.status(200).json({ message: "Usuario ingresado correctamente" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
}
