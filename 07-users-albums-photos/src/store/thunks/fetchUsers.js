import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users")
  //DEV FOR TESTING
  await pause(500)
  return response.data
})

//DEV FOR TESTING
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration)
  })
}

export { fetchUsers }
