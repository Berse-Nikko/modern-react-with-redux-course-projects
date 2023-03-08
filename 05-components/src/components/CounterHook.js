import { Button } from "."
import useCounter from "../hooks/useCounter"

const CounterHook = ({ initialCount }) => {
  const { count, increment } = useCounter(initialCount)
  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={increment}>Increment</Button>
    </div>
  )
}
export default CounterHook
