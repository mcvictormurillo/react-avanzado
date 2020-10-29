import React, { Fragment } from 'react'
import { ListOfPhotoCard } from '../components/ListOfPhotoCard'
import { ListOftCategories } from '../components/ListOftCategories'
export const Home = (path) => {
  console.log('SOY HOME', path)
  return (
    <Fragment>
      <ListOftCategories />
      <ListOfPhotoCard categoryId={parseInt(path.id)} />
    </Fragment>
  )
}
