import { SortableTable } from "../components"

const TablePage = () => {
  const fruits = [
    { name: "Orange", color: "bg-orange-500", score: 3 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-200", score: 4 },
    { name: "Mango", color: "bg-yellow-400", score: 5 },
    { name: "Lime", color: "bg-green-500", score: 2 },
  ]

  const fruitsConfig = [
    {
      sortValue: (fruit) => fruit.name,
      label: "Fruits",
      render: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-3 ${fruit.color}`}></div>,
    },
    {
      sortValue: (fruit) => fruit.score,
      label: "Score",
      render: (fruit) => fruit.score,
    },
  ]

  const fruitKey = (fruit) => {
    return fruit.name
  }

  return (
    <div>
      <SortableTable data={fruits} config={fruitsConfig} keyFn={fruitKey} />
    </div>
  )
}
export default TablePage
