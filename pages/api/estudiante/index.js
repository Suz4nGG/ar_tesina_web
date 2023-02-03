import { validateToken } from "../../../hooks/validateToken";
import { pool } from "../../../config/db";

export default async function getDataStudent(req, res) {
  switch (req.method) {
    case "POST":
      await validateTK(req, res);
      break;
  }
}

const validateTK = async (req, res) => {
  const { authTokenUser } = req.body;
  const username = validateToken(authTokenUser);
  try {
    const [result] = await pool.query(
      "SELECT * FROM estudiantes WHERE usernameA = ?",
      [username]
    );
    return res.json(result[0]);
  } catch (err) {
    return res.status(500).json({
      message:
        "Ha ocurrido un error al conectarse con el servidor, intente más tarde",
    });
  }
};
