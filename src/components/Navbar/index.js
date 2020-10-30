import React from 'react'
import { Link, Nav } from './styles'
export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'>home</Link>
      <Link to='favs'>favs</Link>
      <Link to='/user'>user</Link>
    </Nav>
  )
}
