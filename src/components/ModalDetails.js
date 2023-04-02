import { useState } from 'react'
import { Button, Modal } from 'semantic-ui-react'

const ModalDetails = ({ details, fields, headerProperty }) => {
  const [modalOpen, setModalOpen] = useState(false)

  if (!details) {
    return null
  }

  const renderFields = () => {
    return fields.map((field, index) => (
      <Modal.Description key={index}>
        <strong>{field.label}:</strong> {details[field.value]}
      </Modal.Description>
    ))
  }

  return (
    <Modal
      onOpen={() => setModalOpen(true)}
      onClose={() => setModalOpen(false)}
      open={modalOpen}
      trigger={<Button onClick={() => setModalOpen(true)}>View</Button>}
    >
      <Modal.Header>{details[headerProperty]}</Modal.Header>
      <Modal.Content>
        {renderFields()}
      </Modal.Content>
    </Modal>
  )
}

export default ModalDetails
