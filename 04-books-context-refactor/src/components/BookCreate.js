import { useState } from "react"
import useBooksContext from "../hooks/use-books-context"

const BookCreate = () => {
  const [newBook, setNewBook] = useState("")
  const { handleCreateBook } = useBooksContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    handleCreateBook(newBook)
    setNewBook("")
  }

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
        />
        <button className="button">Create Book</button>
      </form>
    </div>
  )
}
export default BookCreate
