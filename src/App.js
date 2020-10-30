import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NavBar } from './components/Navbar'
import { Logo } from './components/Logo'
import { Router } from '@reach/router'
export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='pet/:id' />
        <Detail path='detail/:detailID' />
      </Router>
      <NavBar />
    </div>
  )
}
