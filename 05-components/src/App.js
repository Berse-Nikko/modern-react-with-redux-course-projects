import { GoBell } from "react-icons/go"
import Button from "./Button"

const App = () => {
  const handleClick = () => {
    console.log("Clicked")
  }

  return (
    <div>
      <div>
        <Button success outline rounded className="mb-5" onClick={handleClick}>
          <GoBell />
          Hello
        </Button>
      </div>
      <div>
        <Button danger outline>
          Hi there
        </Button>
      </div>
      <div>
        <Button warning>Click Me</Button>
      </div>
      <div>
        <Button secondary outline>
          Click Here
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Don't Click
        </Button>
      </div>
    </div>
  )
}
export default App
