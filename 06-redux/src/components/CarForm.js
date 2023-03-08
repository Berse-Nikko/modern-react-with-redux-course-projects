import { useDispatch, useSelector } from "react-redux"
import { handleName, handleCost, addCar } from "../store"

const CarForm = () => {
  const dispatch = useDispatch()

  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    }
  })

  const handleChangeName = (e) => {
    dispatch(handleName(e.target.value))
  }

  const handleChangeCost = (e) => {
    const carCost = parseInt(e.target.value) || 0
    dispatch(handleCost(carCost))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addCar({ name, cost }))
    dispatch(handleCost)
  }

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleChangeName}
            />
          </div>

          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ""}
              onChange={handleChangeCost}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  )
}
export default CarForm
