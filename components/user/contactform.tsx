import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, useToast } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import YupPassword from 'yup-password'
import Turnstile from 'react-turnstile'
import { FaEnvelope } from 'react-icons/fa'
import { User } from '../../pages/[user]'

YupPassword(yup)

const apiHost = process.env.NEXT_PUBLIC_PAGES_API_HOST as string
const captchaSitekey = process.env.NEXT_PUBLIC_CAPTCHA_SITEKEY as string

const RegistrationSchema = yup.object().shape({
  email: yup.string().label('Email address').email().required(),
  subject: yup.string().min(6).max(100).required().label('Subject'),
  message: yup.string().min(20).max(240).required().label('Message')
})

let toast: any

const submitForm = async (values: any, actions: any): Promise<void> => {
  values['cf-turnstile-response'] = captchaResponse

  let result = { success: false }

  try {
    const response = await fetch(apiHost + '/user/' + theUser.slug + '/message',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
    result = await response.json()
  } catch {
  }
  if (result?.success) {
    theModal.onClose()

    toast({
      title: 'Message sent',
      description: "We've sent your message to " + theUser.name,
      status: 'success',
      duration: 9000,
      isClosable: true
    })
  } else {
    contactError = 'Something went wrong...'
  }
  actions.setSubmitting(false)
}

let contactError: string

let captchaResponse: string

let theModal: any
let theUser: User

export default function ContactForm ({ user, modal, styles }: { user: User, modal: any, styles: any }): JSX.Element {
  theModal = modal
  theUser = user

  toast = useToast()

  return (
    <>
      <Modal isOpen={modal.isOpen} onClose={modal.onClose}>
        <ModalOverlay>
        <ModalContent>
        <ModalHeader>Contact Me</ModalHeader>
        <ModalCloseButton />
          <Formik
            initialValues={{ email: '', subject: '', message: '' }}
            onSubmit={submitForm}
            validationSchema={RegistrationSchema}
          >
            {(props) => (
              <Form>
                <ModalBody pb={6}>
                  <Flex direction="column" gap="4" alignItems="center">
                    <Field name='email'>
                      {({ field, form }: { form: any, field: any }) => (
                        <FormControl isInvalid={form.errors.email as boolean && form.touched.email as boolean}>
                          <FormLabel>Email Address</FormLabel>
                          <InputGroup>
                            <InputLeftAddon>
                              <FaEnvelope />
                            </InputLeftAddon>
                            <Input {...field} placeholder='email@example.com' />
                          </InputGroup>
                          <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name='subject'>
                      {({ field, form }: { form: any, field: any }) => (
                        <FormControl isInvalid={form.errors.subject as boolean && form.touched.subject as boolean}>
                          <FormLabel>Subject</FormLabel>
                          <Input {...field} placeholder='' />
                          <FormErrorMessage>{form.errors.subject}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name='message'>
                      {({ field, form }: { form: any, field: any }) => (
                        <FormControl isInvalid={form.errors.message as boolean && form.touched.message as boolean}>
                          <FormLabel>Message</FormLabel>
                          <Textarea {...field} placeholder='' rows={5} />
                          <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Turnstile
                      theme="light"
                      sitekey={captchaSitekey}
                      onVerify={(token) => { captchaResponse = token }} />
                    {
                      contactError as unknown as boolean &&
                      <Text color="red.500">
                        {contactError}
                      </Text>
                    }
                  </Flex>
                </ModalBody>
                <ModalFooter>
                  <Button
                    mr="2"
                    className={styles.contactSubmitButton}
                    isLoading={props.isSubmitting}
                    type='submit'
                  >
                    Submit
                  </Button>
                  <Button onClick={modal.onClose}>Cancel</Button>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  )
}
