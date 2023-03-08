import { useSelector, useDispatch } from "react-redux"
import { removeCar } from "../store"

const CarList = () => {
  const dispatch = useDispatch()
  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    return {
      cars: filteredCars,
      name: form.name,
    }
  })

  const handleDeleteCar = (car) => {
    dispatch(removeCar(car.id))
  }

  return (
    <div className="car-list">
      {cars.map((car) => {
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase())
        return (
          <div key={car.id} className={`panel ${bold && "bold"}`}>
            <p>
              {car.name} - ${car.cost}
            </p>
            <button
              className="button is-danger"
              onClick={() => handleDeleteCar(car)}
            >
              Delete
            </button>
          </div>
        )
      })}
      <hr />
    </div>
  )
}
export default CarList
