import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../components/hooks/useRegisterMutation'
import { useMutationLogin } from '../components/hooks/useMutationLogin'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ isAuth, activateAuth }) => {
        return (
          <>
            <Registro activateAuth={activateAuth} />
            <Login activateAuth={activateAuth} />
          </>
        )
      }
    }
  </Context.Consumer>
)

const Login = ({ activateAuth }) => {
  const { login, loading, error } = useMutationLogin()
  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    login({ variables }).then(res => {
      activateAuth()
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
    register({ variables }).then(res => {
      activateAuth()
    })
  }
  const errorMsg = error && 'El usuario ya existe o hay algún problema.'
  return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse' />
}
