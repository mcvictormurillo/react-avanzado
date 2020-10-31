import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../components/hooks/useRegisterMutation'
import { useMutationLogin } from '../components/hooks/useMutationLogin'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
  return (
    <>
      <Registro activateAuth={activateAuth} />
      <Login activateAuth={activateAuth} />
    </>
  )
}

const Login = ({ activateAuth }) => {
  const { login, loading, error } = useMutationLogin()
  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    login({ variables }).then(({ data }) => {
      const { login } = data
      activateAuth(login)
    })
  }
  const errorMsg = error && 'Usuario incorrecto.'
  return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Iniciar sesión' />
}

const Registro = ({ activateAuth }) => {
  const { register, loading, error } = useRegisterMutation()
  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    register({ variables }).then(({ data }) => {
      const { signup } = data
      activateAuth(signup)
    })
  }
  const errorMsg = error && 'El usuario ya existe o hay algún problema.'
  return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse' />
}
