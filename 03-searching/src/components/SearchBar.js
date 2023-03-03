import { useState } from "react"
import "./SearchBar.css"

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(query)
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label>Enter Search Term</label>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        {query.length < 3 && "Search term must be greater than 3 characters"}
      </form>
    </div>
  )
}
export default SearchBar
