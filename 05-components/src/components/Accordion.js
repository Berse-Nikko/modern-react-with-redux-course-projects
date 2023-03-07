import { useState } from "react"
import { GoChevronDown, GoChevronLeft } from "react-icons/go"

const Accordion = ({ items }) => {
  const [show, setShow] = useState(-1)

  const handleShow = (index) => {
    if (show === index) {
      setShow(-1)
    } else {
      setShow(index)
    }
  }

  const renderItems = items.map((item, index) => {
    const isShown = index === show

    return (
      <div key={item.id}>
        <div
          onClick={() => handleShow(index)}
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
        >
          {item.label}
          <span className="text-2xl">
            {isShown ? <GoChevronDown /> : <GoChevronLeft />}
          </span>
        </div>
        {isShown && <div className="border-b p-5">{item.content}</div>}
      </div>
    )
  })

  return <div className="border-x border-t rounded">{renderItems}</div>
}
export default Accordion
