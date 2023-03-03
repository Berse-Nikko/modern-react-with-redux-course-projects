import { useState } from "react"

import bird from "./svg/bird.svg"
import cat from "./svg/cat.svg"
import cow from "./svg/cow.svg"
import dog from "./svg/dog.svg"
import gator from "./svg/gator.svg"
import horse from "./svg/horse.svg"
import heart from "./svg/heart.svg"

import "./AnimalShow.css"

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
  heart,
}

const AnimalShow = ({ name }) => {
  const [clickCount, setClickCount] = useState(0)

  const handleClick = () => {
    setClickCount(clickCount + 1)
  }

  return (
    <div onClick={handleClick} className="animal">
      <img alt={name} src={svgMap[name]} className="animal-svg" />
      <img
        alt="heart"
        src={heart}
        style={{
          height: 10 + 10 * clickCount + "px",
        }}
        className="heart-svg"
      />
    </div>
  )
}
export default AnimalShow
