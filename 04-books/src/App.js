import { useState, useEffect } from "react"
import { BookCreate, BookList } from "./components"
import axios from "axios"

const App = () => {
  const [books, setBooks] = useState([])

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books")
    setBooks(response.data)
  }

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

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList
        books={books}
        onDelete={deleteBookById}
        onEdit={editBookTitle}
      />
      <BookCreate onSubmit={handleCreateBook} />
    </div>
  )
}
export default App
