import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../components/hooks/useRegisterMutation'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ isAuth, activateAuth }) => {
        return (
          <>
            <Registro activateAuth={activateAuth} />
            <UserForm activateAuth={activateAuth} title='Iniciar sesión' />
          </>
        )
      }
    }
  </Context.Consumer>
)

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
