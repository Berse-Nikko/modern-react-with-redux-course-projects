import { useState } from "react"
import AnimalShow from "./AnimalShow"
import "./App.css"

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"]
  return animals[Math.floor(Math.random() * animals.length)]
}

const App = () => {
  const [animals, setAnimals] = useState([])

  const handleClick = () => {
    return setAnimals([...animals, getRandomAnimal()])
  }

  return (
    <div className="container">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-container">
        {animals.map((animal, index) => {
          return <AnimalShow name={animal} key={index} />
        })}
      </div>
    </div>
  )
}
export default App
