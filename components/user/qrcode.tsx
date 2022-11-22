import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, useToast } from '@chakra-ui/react'
import { User } from '../../pages/[user]'

let theModal: any
let theUser: User

export default function QrCodeModal ({ user, modal, styles }: { user: User, modal: any, styles: any }): JSX.Element {
  theModal = modal
  theUser = user

  return (
    <>
      <Modal isOpen={modal.isOpen} onClose={modal.onClose}>
        <ModalOverlay>
        <ModalContent>
        <ModalCloseButton />
        <Text>QR Code Here</Text>
        </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  )
}
