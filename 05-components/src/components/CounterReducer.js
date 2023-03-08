import { useReducer } from "react"
import { Button, Panel } from "./"
import {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  ADD_COUNT_VALUE,
  CHANGE_ADD_VALUE,
} from "../reducer/actions"

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { ...state, count: state.count + 1 }
    case DECREMENT_COUNT:
      return { ...state, count: state.count - 1 }
    case CHANGE_ADD_VALUE:
      return { ...state, addValue: action.payload }
    case ADD_COUNT_VALUE:
      return { ...state, count: state.count + state.addValue, addValue: 0 }
    default:
      throw new Error("Unexpected action type: " + action.type)
  }
}

const CounterReducer = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    addValue: 0,
  })

  const { count, addValue } = state

  const increment = () => {
    dispatch({ type: INCREMENT_COUNT })
  }
  const decrement = () => {
    dispatch({ type: DECREMENT_COUNT })
  }

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0
    dispatch({ type: CHANGE_ADD_VALUE, payload: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: ADD_COUNT_VALUE })
  }

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <labe>Add a number</labe>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          value={addValue || ""}
          onChange={handleChange}
        />
        <Button>Add It</Button>
      </form>
    </Panel>
  )
}
export default CounterReducer
