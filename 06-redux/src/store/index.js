import { configureStore } from "@reduxjs/toolkit"
import {
  carsReducer,
  handleSearch,
  addCar,
  removeCar,
} from "./slices/carsSlice"
import { formReducer, handleName, handleCost } from "./slices/formSlice"

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
})

export { store, handleName, handleCost, handleSearch, addCar, removeCar }
