import useBooksContext from "../hooks/use-books-context"
import { BookShow } from "./index"

const BookList = () => {
  const { books } = useBooksContext()

  return (
    <div className="book-list">
      {books.map((book) => {
        return <BookShow key={book.id} book={book} />
      })}
    </div>
  )
}
export default BookList
