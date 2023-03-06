import { useState } from "react"
import useBooksContext from "../hooks/use-books-context"
import { BookEdit } from "./index"

const BookShow = ({ book }) => {
  const [edit, setEdit] = useState(false)
  const { deleteBookById } = useBooksContext()

  const handleDelete = () => {
    deleteBookById(book.id)
  }

  const handleEdit = () => {
    setEdit(!edit)
  }

  const handleSubmit = () => {
    setEdit(false)
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      {edit ? (
        <BookEdit onSubmit={handleSubmit} book={book} />
      ) : (
        <h3>{book.title}</h3>
      )}
      <div className="actions">
        <button className="edit" onClick={handleEdit} />
        <button className="delete" onClick={handleDelete} />
      </div>
    </div>
  )
}
export default BookShow
