import { createSlice } from "@reduxjs/toolkit"
import { addCar } from "./carsSlice"

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    handleName(state, action) {
      state.name = action.payload
    },
    handleCost(state, action) {
      state.cost = action.payload
    },
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state, action) => {
      state.name = ""
      state.cost = 0
    })
  },
})

export const { handleName, handleCost } = formSlice.actions
export const formReducer = formSlice.reducer
