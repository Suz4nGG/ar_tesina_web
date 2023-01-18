import { validateToken } from "../../../hooks/validateToken";
import { pool } from "../../../config/db";

export default async function solicitudAdaptaciones(req, res) {
  const { authTokenUser } = req.cookies;
  switch (req.method) {
    case "POST":
      // const { authTokenUser } = req.cookies;
      const usernamePost = validateToken(authTokenUser);
      return await insertData(req, res, usernamePost);
    case "GET":
      const tk = req.headers.authorization.split(" ")[1]
      const usernameGet = validateToken(tk)
      return await getData(req, res, usernameGet);
  }
}

const insertData = async (req, res, username) => {
  const [result] = await pool.query("INSERT INTO solicitudAdaptacion SET ?", {
    username,
    ...req.body,
  });
  return res.status(200).json({ message: "Adaptación enviada con exito" });
};

const getData = async (req, res, username) => {
  const [result] = await pool.query(
    "SELECT * FROM solicitudAdaptacion WHERE username = ?",
    [username]
  );
  return res.status(200).json(result);
};
