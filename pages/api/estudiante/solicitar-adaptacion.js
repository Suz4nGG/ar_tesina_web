import { validateToken } from "../../../hooks/validateToken";
import { pool } from "../../../config/db";

export default async function solicitudAdaptaciones(req, res) {
  switch (req.method) {
    case "POST":
      return await insertData(req, res);
    case "GET":
      const tk = req.headers.authorization.split(" ")[1]
      const usernameGet = validateToken(tk)
      console.log(usernameGet)
      return await getData(req, res, usernameGet);
  }
}

const insertData = async (req, res) => {
  const {dataSolicitud, username} = req.body
  try {
    const [result] = await pool.query("INSERT INTO solicitudAdaptacion SET ?", {
      username,
      ...dataSolicitud,
    });
    console.log(result)
    return res.status(200).json({ message: "Adaptación enviada con exito" });
  } catch (err) {
    console.log(err)
  }
};

const getData = async (req, res, username) => {
  const [result] = await pool.query(
    "SELECT * FROM solicitudAdaptacion WHERE username = ?",
    [username]
  );
  return res.status(200).json(result);
};
