import { BookShow } from "./index"

const BookList = ({ books, onDelete, onEdit }) => {
  return (
    <div className="book-list">
      {books.map((book) => {
        return (
          <BookShow
            book={book}
            key={book.id}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        )
      })}
    </div>
  )
}
export default BookList
