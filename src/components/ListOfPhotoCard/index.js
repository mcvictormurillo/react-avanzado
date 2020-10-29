import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useGetPhotos } from '../hooks/useGetPhotos'

export const ListOfPhotoCard = ({ categoryId = 1 }) => {
  const { data } = useGetPhotos(categoryId)
  const photos = data ? data.photos : []
  // console.log('data graphl', data)
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
