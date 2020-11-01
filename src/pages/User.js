import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'

export const User = () => {
  const { remoteAuth } = useContext(Context)
  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={remoteAuth}>Cerrar sesión</SubmitButton>
    </>
  )
}
