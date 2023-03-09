import { Button, ExpandablePanel, AlbumsList } from "./"
import { GoTrashcan } from "react-icons/go"
import { deleteUser } from "../store"
import { useThunk } from "../hooks/useThunk"

const User = ({ user }) => {
  const [doDeleteUser, deletingUser, deletingUserError] = useThunk(deleteUser)

  const handleDelete = () => {
    doDeleteUser(user)
  }

  const header = (
    <>
      <Button className="mr-3" loading={deletingUser} onClick={handleDelete}>
        <GoTrashcan />
      </Button>
      {deletingUserError && <div>Error deleting User</div>}
      {user.name}
    </>
  )

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  )
}
export default User
