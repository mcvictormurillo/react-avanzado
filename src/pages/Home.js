import React from 'react'
import { ListOfPhotoCard } from '../components/ListOfPhotoCard'
import { ListOftCategories } from '../components/ListOftCategories'
import { Layout } from '../components/Layout'

const HomePage = ({ id }) => {
  return (
    <Layout title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domésticos'>
      <ListOftCategories />
      <ListOfPhotoCard categoryId={parseInt(id)} />
    </Layout>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id // si son iguales no se renderiza
})
