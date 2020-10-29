import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { ListOftCategories } from './components/ListOftCategories'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Logo } from './components/Logo'
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
          ? <PhotoCardWithQuery id={detailID}/>
          : <>
            <ListOftCategories />
            <ListOfPhotoCard categoryId={2} />
          </>
      }

    </div>
  )
}
