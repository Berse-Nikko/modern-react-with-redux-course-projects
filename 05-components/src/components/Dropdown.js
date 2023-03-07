import { useEffect, useState, useRef } from "react"
import { GoChevronDown } from "react-icons/go"
import Panel from "./Panel"

const Dropdown = ({ options, onChange, value }) => {
  const [open, setOpen] = useState(false)
  const divElement = useRef()

  useEffect(() => {
    const handler = (e) => {
      if (!divElement) return
      if (!divElement.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("click", handler, true)

    return () => {
      document.removeEventListener("click", handler)
    }
  }, [])

  const handleClick = () => {
    setOpen(!open)
  }

  const handleOptionClick = (option) => {
    setOpen(false)
    onChange(option)
  }

  return (
    <div className="w-48 relative" ref={divElement}>
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select ..."}
        <GoChevronDown className="text-2xl" />
      </Panel>
      {open && (
        <Panel className="absolute top-full">
          {options.map((option) => {
            return (
              <div
                className="hover:bg-sky-100 rounded cursor-pointer p-1"
                onClick={() => handleOptionClick(option)}
                key={option.value}
              >
                {option.label}
              </div>
            )
          })}
        </Panel>
      )}
    </div>
  )
}
export default Dropdown
