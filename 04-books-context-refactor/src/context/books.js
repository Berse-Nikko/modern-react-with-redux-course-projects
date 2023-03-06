import { createContext, useState, useCallback } from "react"
import axios from "axios"

const BooksContext = createContext()

function Provider({ children }) {
  const [books, setBooks] = useState([])

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books")
    setBooks(response.data)
  }, [])

  const handleCreateBook = async (newTitle) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: newTitle,
    })
    /* const bookID = Math.round(Math.random() * 9999)
    const book = { id: bookID, title: bookTitle } */
    const updatedBooks = [...books, response.data]
    setBooks(updatedBooks)
  }

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`)
    const updatedBooks = books.filter((book) => {
      return book.id !== id
    })
    setBooks(updatedBooks)
  }

  const editBookTitle = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    })
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data }
      }
      return book
    })
    setBooks(updatedBooks)
  }

  return (
    <BooksContext.Provider
      value={{
        books,
        fetchBooks,
        handleCreateBook,
        deleteBookById,
        editBookTitle,
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}

export { Provider }

export default BooksContext
