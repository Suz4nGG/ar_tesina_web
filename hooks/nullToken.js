import { verify } from "jsonwebtoken"
import { serialize } from "cookie"
import { TOKENJWT } from "constants"
const SECRET = process.env.SECRET

export default function nullToken(token) {
  const { authTokenUser } = token
  verify(authTokenUser, SECRET)
  const serialized = serialize(TOKENJWT, null, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 0,
    path: '/'
  })
  return serialized
}