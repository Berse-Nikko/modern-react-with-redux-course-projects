import { CounterReducer, CounterHook } from "../components"

const CounterPage = ({ initialCount }) => {
  return (
    <div>
      <div className="mb-8">
        <CounterHook initialCount={initialCount} />
      </div>
      <hr />
      <div className="mt-8">
        <CounterReducer initialCount={initialCount} />
      </div>
    </div>
  )
}
export default CounterPage
