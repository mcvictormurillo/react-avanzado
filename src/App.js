import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Detail } from './pages/Detail'
import { NavBar } from './components/Navbar'
import { Logo } from './components/Logo'
import { Router } from '@reach/router'
import Context from './Context'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='pet/:id' />
        <Detail path='/detail/:detailID' />
      </Router>
      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router>
              : <Router>
                <NotRegisteredUser path='/favs' />
                <NotRegisteredUser path='/user' />
              </Router>
        }
      </Context.Consumer>
      <NavBar />
    </div>
  )
}
