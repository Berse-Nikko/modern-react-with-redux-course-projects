import classNames from "classnames"
import useNavigation from "../hooks/useNavigation"

const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currPath } = useNavigation()

  const classes = classNames(
    "text-blue-500",
    className,
    currPath === to && activeClassName
  )

  const handleClick = (e) => {
    if (e.ctrlKey) {
      return
    }

    e.preventDefault()
    navigate(to)
  }

  return (
    <a href={to} onClick={handleClick} className={classes}>
      {children}
    </a>
  )
}
export default Link
