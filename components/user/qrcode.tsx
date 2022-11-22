import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Image, Input, InputGroup, InputLeftAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, useToast } from '@chakra-ui/react'
import QRCode from 'react-qr-code'
import { User } from '../../pages/[user]'
import { getThumb } from '../helpers'

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
        <ModalHeader>{user.name}</ModalHeader>
        <Box marginBlockEnd="8" marginInline="auto" className={styles.qrContainer} position="relative">
        <QRCode
          value={`https://plus.page/${user.slug}`}
          level='H'
          fgColor='currentColor'
        />
        <Image src={getThumb(user.avatar)}
            alt={user.name + '\'s Profile Picture'}
            className={styles.qrPhoto} />
        </Box>
        </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  )
}
