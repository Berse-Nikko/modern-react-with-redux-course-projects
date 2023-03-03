import { SearchBar, ImageList } from "./components"
import searchImages from "./searchImages"
import { useState } from "react"
import "./App.css"

const App = () => {
  const [images, setImages] = useState([])

  const handleSubmit = async (query) => {
    const data = await searchImages(query)
    setImages(data)
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  )
}
export default App
