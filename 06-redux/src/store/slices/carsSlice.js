import { createSlice, nanoid } from "@reduxjs/toolkit"

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    handleSearch(state, action) {
      state.searchTerm = action.payload
    },
    addCar(state, action) {
      state.data.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      })
    },
    removeCar(state, action) {
      const updatedState = state.data.filter((car) => {
        return car.id !== action.payload
      })
      state.data = updatedState
    },
  },
})

export const { handleSearch, addCar, removeCar } = carsSlice.actions
export const carsReducer = carsSlice.reducer
