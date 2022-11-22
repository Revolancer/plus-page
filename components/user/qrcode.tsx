import { Box, Image, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import QRCode from 'react-qr-code'
import { User } from '../../pages/[user]'
import { getThumb } from '../helpers'

export default function QrCodeModal ({ user, modal, styles }: { user: User, modal: any, styles: any }): JSX.Element {
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
