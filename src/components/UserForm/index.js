import React from 'react'
import { useInputValue } from '../hooks/useInputValue'
import { Form, Input, Button, Title, Error } from './styles'
export const UserForm = ({ onSubmit, title = '', error, disabled }) => {
  const email = useInputValue('manuel@gmail.com')
  const password = useInputValue('123')
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }
  return (
    <>
      <Form onSubmit={handleSubmit} disabled={disabled}>
        <Title>{title}</Title>
        <Input placeholder='Email' {...email} disabled={disabled} />
        <Input placeholder='Password' {...password} disabled={disabled} />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
