import {configureStore} from '@reduxjs/toolkit'
import { userSlice } from './states/user'
// * emitir acción => pedir algo (entidad => lata refresco)
// * Acciones para accionar sobre la información del state
// ! Acciones controladas
// * Quien las recibe?
// * aquí caen las acciones
export const UserStore = configureStore({
  reducer: {
    user: userSlice.reducer
  }
})

export default UserStore