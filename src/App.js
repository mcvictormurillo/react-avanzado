import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { ListOftCategories } from './components/ListOftCategories'
import { Logo } from './components/Logo'
export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOftCategories />
    <ListOfPhotoCard />
  </div>
)
