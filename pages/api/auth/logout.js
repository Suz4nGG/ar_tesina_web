import nullToken from "../../../hooks/nullToken"

export default function handleLogOut(req, res) {
  const { authTokenUser } = req.cookies
  if (!authTokenUser) return res.status(401).json({ error: "No existe un token" })
  try {
    const serialized = nullToken({ authTokenUser })
    res.setHeader("Set-Cookie", serialized)
    return res.status(200).json({message: "Logout Succesfully"})
  } catch (err) {
    console.log(err)
    return res.status(401).json({message: "Error"})
  }
}