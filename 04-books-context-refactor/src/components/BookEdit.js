import useBooksContext from "../hooks/use-books-context"
import { useState } from "react"

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title)
  const { editBookTitle } = useBooksContext()

  const handleSave = (e) => {
    e.preventDefault()
    onSubmit()
    editBookTitle(book.id, title)
  }

  return (
    <form className="book-edit" onSubmit={handleSave}>
      <label>Title</label>
      <input
        className="input"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button className="button is-primary">SAVE</button>
    </form>
  )
}
export default BookEdit
