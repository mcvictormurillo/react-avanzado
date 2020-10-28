import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useQuery, gql } from '@apollo/client'

const withPhotos = gql`
query getPhotos{
  photos{
    id
    categoryId
    src
    userId
    liked
  }
}
`

export const ListOfPhotoCard = () => {
  const { data, loading, error } = useQuery(withPhotos)
  const photos = data ? data.photos : []
  console.log('data graphl', data)
  return (
    <ul>
      {
        photos.map(photo => {
          return (
            <PhotoCard key={photo.id} {...photo} />
          )
        })
      }
    </ul>
  )
}
