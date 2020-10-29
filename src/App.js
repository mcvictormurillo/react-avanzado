import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Logo } from './components/Logo'
import { Router } from '@reach/router'
export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailID = urlParams.get('detail')
  console.log('detail', detailID)
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailID
          ? <PhotoCardWithQuery id={detailID} />
          : <Router>
            <Home path='/' />
            <Home path='pet/:id' />
          </Router>
      }
    </div>
  )
}
