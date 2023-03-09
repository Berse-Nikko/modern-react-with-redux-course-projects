import { Button, ExpandablePanel, PhotosList } from "./"
import { GoTrashcan } from "react-icons/go"
import { useDeleteAlbumMutation } from "../store"

const Album = ({ album }) => {
  const [deleteAlbum, deleteAlbumResults] = useDeleteAlbumMutation(album)

  const handleDelete = () => {
    deleteAlbum(album)
  }

  const header = (
    <>
      <Button
        className="mr-2"
        onClick={handleDelete}
        loading={deleteAlbumResults.isLoading}
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  )
  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>
  )
}
export default Album
