import { useState } from "react"

const useSort = (data, config) => {
  const [sort, setSort] = useState(null)
  const [sortBy, setSortBy] = useState(null)

  const setSortLabel = (label) => {
    if (sortBy && label !== sortBy) {
      setSort("asc")
      setSortBy(label)
      return
    }

    if (sort === null) {
      setSort("asc")
      setSortBy(label)
    } else if (sort === "asc") {
      setSort("desc")
      setSortBy(label)
    } else if (sort === "desc") {
      setSort(null)
      setSortBy(null)
    }
  }

  let sortedData = data
  if (sort && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy)
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a)
      const valueB = sortValue(b)

      const reverseOrder = sort === "asc" ? 1 : -1

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder
      } else {
        return valueA - valueB * reverseOrder
      }
    })
  }

  return {
    sort,
    sortBy,
    sortedData,
    setSortLabel,
  }
}
export default useSort
