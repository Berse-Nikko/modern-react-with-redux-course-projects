import { useState } from "react"
import { Modal, Button } from "../components"

const ModalPage = () => {
  const [modal, setModal] = useState(false)

  const handleClick = () => {
    setModal(true)
  }

  const handleClose = () => {
    setModal(false)
  }

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {modal && (
        <Modal
          onClose={handleClose}
          actionBar={
            <div>
              <Button onClick={handleClose} primary>
                I Accept
              </Button>
            </div>
          }
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            cumque necessitatibus delectus ea itaque temporibus fugiat, quis
            pariatur quae. Blanditiis.
          </p>
        </Modal>
      )}
    </div>
  )
}
export default ModalPage
