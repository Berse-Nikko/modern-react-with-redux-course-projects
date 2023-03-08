import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go"
import Table from "./Table"
import useSort from "../hooks/useSort"

function getIcons(label, sort, sorBy) {
  if (label !== sorBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    )
  }
  if (sort === null) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    )
  } else if (sort === "asc") {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    )
  } else if (sort === "desc") {
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    )
  }
}

const SortableTable = (props) => {
  const { config, data } = props
  const { sort, sortBy, sortedData, setSortLabel } = useSort(data, config)

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column
    }
    return {
      ...column,
      header: () => (
        <th
          onClick={() => setSortLabel(column.label)}
          className="cursor-pointer hover:bg-gray-100"
        >
          <div className="flex items-center">
            {getIcons(column.label, sort, sortBy)}
            {column.label}
          </div>
        </th>
      ),
    }
  })

  return <Table {...props} config={updatedConfig} data={sortedData} />
}
export default SortableTable
