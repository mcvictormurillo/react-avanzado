import React from 'react'
import { GlobalStyle } from '../GlobalStyles'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { ListOftCategories } from './components/ListOftCategories'
export const App = () => (
  <div>
    <GlobalStyle />
    <ListOftCategories />
    <ListOfPhotoCard />
  </div>
)
