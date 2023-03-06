import { useState } from "react"

const BookCreate = ({ onSubmit }) => {
  const [newBook, setNewBook] = useState("")

  const handleCreateBook = (e) => {
    e.preventDefault()
    onSubmit(newBook)
    setNewBook("")
  }

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleCreateBook}>
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
