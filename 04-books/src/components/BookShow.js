import { useState } from "react"
import { BookEdit } from "./index"

const BookShow = ({ book, onDelete, onEdit }) => {
  const [edit, setEdit] = useState(false)

  const handleDelete = () => {
    onDelete(book.id)
  }

  const handleEdit = () => {
    setEdit(!edit)
  }

  const handleSubmit = (id, title) => {
    setEdit(false)
    onEdit(id, title)
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      {edit ? (
        <BookEdit book={book} onSubmit={handleSubmit} />
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
