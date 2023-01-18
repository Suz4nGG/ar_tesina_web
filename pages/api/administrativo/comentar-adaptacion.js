import { pool } from "/config/db";
// comentarioSolicitud
export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      return await comentarAdaptacion(req, res);
    case "GET":
      // await getStudent(req, res);
      break;
  }
}

const comentarAdaptacion = async (req, res) => {
  const { idSolicitud, comentariosMS } = req.body;
  try {
    const [exist] = await pool.query(
      "SELECT idSolicitud FROM comentarioSolicitud WHERE idSolicitud = ?" ,
      [idSolicitud]
    );
    console.log(exist[0])
    if (exist[0]) {
      console.log("EXISTE")
      const [result] = await pool.query(
        "INSERT INTO comentarioSolicitud SET ? WHERE idSolicitud = ?",
        {...req.body}
      );
      console.log(result)
      return res.status(200).json("mess");
    } else {
      const [result] = await pool.query(
        "INSERT INTO comentarioSolicitud SET ?",
        {...req.body}
      );
      console.log(result)
      return res.status(200).json("mess");
    }
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "Error del servidor" });
  }
};