import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import YupPassword from 'yup-password'
import Turnstile from 'react-turnstile'

YupPassword(yup)

const apiHost = process.env.PAGES_API_HOST as string
const captchaSitekey = process.env.NEXT_PUBLIC_CAPTCHA_SITEKEY as string

const RegistrationSchema = yup.object().shape({
  url: yup.string()
    .label('Your plus.page address')
    .min(3)
    .max(20)
    .matches(/^[a-z-]+$/, 'Your plus.page address can only contain letters, numbers, and the dash symbol (-)')
    .required(),
  email: yup.string().label('Email address').email().required(),
  password: yup.string().label('Password').password().required()
})

const submitForm = async (values: any, actions: any): Promise<void> => {
  values.captcha = captchaResponse

  let result = { success: false, error: 'Something went wrong' }

  try {
    const response = await fetch(apiHost + '/register/',
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
    window.location.href = 'https://revolancer.com/login/'
  } else {
    registrationError = result?.error
  }
  actions.setSubmitting(false)
}

let registrationError: string

let captchaResponse: string

export default function RegistrationForm (modal: any): JSX.Element {
  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={modal.isOpen} onClose={modal.onClose}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Get started</ModalHeader>
        <ModalCloseButton />
          <Formik
            initialValues={{ url: '', email: '', password: '' }}
            onSubmit={submitForm}
            validationSchema={RegistrationSchema}
          >
            {(props) => (
              <Form>
                <ModalBody pb={6}>
                  <Flex direction="column" gap="4" alignItems="center">
                    <Field name='url'>
                      {({ field, form }: { form: any, field: any }) => (
                        <FormControl isInvalid={form.errors.url as boolean && form.touched.url as boolean}>
                          <FormLabel>Address</FormLabel>
                          <InputGroup>
                            <InputLeftAddon>
                              plus.page/
                            </InputLeftAddon>
                            <Input {...field} placeholder='url' />
                          </InputGroup>
                          <FormErrorMessage>{form.errors.url}</FormErrorMessage>
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
                      <Text color="red.500">
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
