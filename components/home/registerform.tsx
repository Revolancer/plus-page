import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useToast } from '@chakra-ui/react'
import { Field, Form, Formik, isObject } from 'formik'
import * as yup from 'yup'
import YupPassword from 'yup-password'
import Turnstile from 'react-turnstile'

YupPassword(yup)

const apiHost = process.env.NEXT_PUBLIC_PAGES_API_HOST as string
const captchaSitekey = process.env.NEXT_PUBLIC_CAPTCHA_SITEKEY as string

const RegistrationSchema = yup.object().shape({
  username: yup.string()
    .label('Your plus.page address')
    .min(3)
    .max(20)
    .matches(/^[A-Za-z0-9-]+$/, 'Your plus.page address can only contain letters, numbers, and the dash symbol (-)')
    .required(),
  email: yup.string().label('Email address').email().required(),
  password: yup.string().label('Password').password().required()
})

let toast: any
let theModal: any

const submitForm = async (values: any, actions: any): Promise<void> => {
  values.captcha = captchaResponse

  let result: { success: boolean, errors: any, error?: string | null } = { success: false, errors: { 1: 'Something went wrong' } }

  try {
    const formBody = []
    for (const key in values) {
      formBody.push(
        encodeURIComponent(key) +
        '=' +
        encodeURIComponent(values[key])
      )
    }
    const formBodyStr = formBody.join('&')
    const response = await fetch(apiHost + '/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBodyStr
      })
    result = await response.json()
  } catch {
  }
  if (result?.success) {
    theModal.onClose()

    toast({
      title: 'Account created',
      description: 'Your account has been created. Please check for an email from Revolancer to verify your email address and get started.',
      status: 'success',
      duration: 9000,
      isClosable: true
    })
  } else {
    let errorMessage = ''
    if (isObject(result?.errors)) {
      for (const field in result.errors) {
        errorMessage += result.errors[field] as string + '\n '
      }
    }
    if (typeof result?.error === 'string') {
      errorMessage += result.error + '\n '
    }
    registrationError = errorMessage
  }
  actions.setSubmitting(false)
}

let registrationError: string

let captchaResponse: string

export default function RegistrationForm (modal: any): JSX.Element {
  theModal = modal

  toast = useToast()
  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={modal.isOpen} onClose={modal.onClose}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Get started</ModalHeader>
        <ModalCloseButton />
          <Formik
            initialValues={{ username: '', email: '', password: '' }}
            onSubmit={submitForm}
            validationSchema={RegistrationSchema}
          >
            {(props) => (
              <Form>
                <ModalBody pb={6}>
                  <Flex direction="column" gap="4" alignItems="center">
                    <Field name='username'>
                      {({ field, form }: { form: any, field: any }) => (
                        <FormControl isInvalid={form.errors.username as boolean && form.touched.username as boolean}>
                          <FormLabel>Address</FormLabel>
                          <InputGroup>
                            <InputLeftAddon>
                              plus.page/
                            </InputLeftAddon>
                            <Input {...field} placeholder='username' />
                          </InputGroup>
                          <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name='email'>
                      {({ field, form }: { form: any, field: any }) => (
                        <FormControl isInvalid={form.errors.email as boolean && form.touched.email as boolean}>
                          <FormLabel>Email</FormLabel>
                          <Input {...field} placeholder='email@example.com' />
                          <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name='password'>
                      {({ field, form }: { form: any, field: any }) => (
                        <FormControl isInvalid={form.errors.password as boolean && form.touched.password as boolean}>
                          <FormLabel>Password</FormLabel>
                          <Input {...field} placeholder='******' type="password" />
                          <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Turnstile
                      theme="light"
                      sitekey={captchaSitekey}
                      onVerify={(token) => { captchaResponse = token }} />
                    {
                      registrationError as unknown as boolean &&
                      <Text color="red.500" whiteSpace="pre-line">
                        {registrationError}
                      </Text>
                    }
                  </Flex>
                </ModalBody>
                <ModalFooter>
                  <Button
                    mr="2"
                    bgGradient='linear(to-tl, rvyellow, rvmagenta)'
                    _focus={{
                      bgGradient: 'linear(to-tl, rvyellow, rvmagenta)',
                      filter: 'auto',
                      brightness: '85%'
                    }}
                    _active={{
                      bgGradient: 'linear(to-tl, rvyellow, rvmagenta)',
                      filter: 'auto',
                      brightness: '85%'
                    }}
                    _hover={{
                      bgGradient: 'linear(to-tl, rvyellow, rvmagenta)',
                      filter: 'auto',
                      brightness: '85%'
                    }}
                    color="white"
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
      </Modal>
    </>
  )
}
