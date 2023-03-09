import { useEffect } from "react"
import { useSelector } from "react-redux"
import { fetchUsers, addUser } from "../store"
import { SkeletonLoader, Button, User } from "./"
import { useThunk } from "../hooks/useThunk"

const UsersList = () => {
  const [doFetchUsers, loadingUsers, loadingUsersError] = useThunk(fetchUsers)
  const [doAddUser, addingUser, addingUserError] = useThunk(addUser)

  const { data } = useSelector((state) => {
    return state.users
  })

  const handleAddUser = () => {
    doAddUser()
  }

  useEffect(() => {
    doFetchUsers()
  }, [doFetchUsers])

  let content

  if (loadingUsers) {
    content = <SkeletonLoader times={6} className="h-10 w0-full" />
  } else if (loadingUsersError) {
    content = <div>Error fetching data...</div>
  } else {
    content = data.map((user) => {
      return <User key={user.id} user={user} />
    })
  }

  return (
    <div>
      <div className="flex flex-row justify-between m-3 items-center">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={addingUser} onClick={handleAddUser}>
          + Add User
        </Button>
        {addingUserError && "Error creating user..."}
      </div>
      {content}
    </div>
  )
}
export default UsersList
