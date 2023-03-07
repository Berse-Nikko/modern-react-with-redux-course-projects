import { Fragment } from "react"

const Table = ({ data, config, keyFn }) => {
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {config.map((column) => {
            if (column.header) {
              return <Fragment key={column.label}>{column.header()}</Fragment>
            }
            return <th key={column.label}>{column.label}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((rowData) => {
          return (
            <tr key={keyFn(rowData)} className="border-b">
              {config.map((cell) => {
                return (
                  <td className="p-3" key={cell.label}>
                    {cell.render(rowData)}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
export default Table
