import React from 'react'
import { ListOfPhotoCard } from '../components/ListOfPhotoCard'
import { ListOftCategories } from '../components/ListOftCategories'
import { Layout } from '../components/Layout'

export const Home = (path) => {
  console.log('SOY HOME', path)
  return (
    <Layout title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domésticos'>
      <ListOftCategories />
      <ListOfPhotoCard categoryId={parseInt(path.id)} />
    </Layout>
  )
}
