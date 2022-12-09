import { createSlice } from "@reduxjs/toolkit"

export const UserEmptyState = {
  name: '',
  email: ''
}

// ! State usuario => slice corte dentro del store
export const userSlice = createSlice({
  name: "user",
  initialState: UserEmptyState,
  reducers: {
    createUser: (state, action) => {
      return action.payload
    },
    modifyUser: (state, action) => {
      // * Remplazamos los datos realizados con el del nuevo state
      return {...state, ...action.payload}
    },
    resetUser: () => {
      return UserEmptyState
    }
  }
})

// * reducers
/*
* state => Valor actual del Slice
* action => payload (valor con el que queremos crear el usuario) => crear, modificar, etc.
*/

// * Compartir las acciones
export const { createUser, modifyUser, resetUser } = userSlice.actions

export default userSlice