import { validateToken } from "../../../hooks/validateToken";
import { pool } from "../../../config/db";

export default async function getDataStudent(req, res) {
  switch (req.method) {
    case "POST":
      await validateTK(req, res)
    break
  }
}

const validateTK = async (req, res) => {
  const { authTokenUser } = req.body
  const username = validateToken(authTokenUser)
  const [result] = await pool.query(
      "SELECT * FROM estudiantes WHERE usernameA = ?",
      [username]
  );
      return res.json(
      result[0]
    );
}
