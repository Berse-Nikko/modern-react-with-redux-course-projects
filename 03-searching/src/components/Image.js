import "./Image.css"

const Image = ({ image }) => {
  return (
    <div className="image">
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  )
}
export default Image
