import Image from "./Image"
import "./ImageList.css"

const ImageList = ({ images }) => {
  return (
    <div className="image-list">
      {images.map((image) => {
        return <Image image={image} key={image.id} />
      })}
    </div>
  )
}
export default ImageList
