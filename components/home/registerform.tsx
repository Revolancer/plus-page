import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import LoremIpsum from 'react-lorem-ipsum'

export default function RegistrationForm (modal: any): JSX.Element {
  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={modal.isOpen} onClose={modal.onClose}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
            <LoremIpsum p="3" />
        </ModalBody>

        <ModalFooter>
            <Button colorScheme='blue' mr={3}>
            Save
            </Button>
            <Button onClick={modal.onClose}>Cancel</Button>
        </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
