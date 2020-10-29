import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useGetPhotos } from '../hooks/useGetPhotos'

export const ListOfPhotoCard = ({ categoryId = 1 }) => {
  const { data, loading, error } = useGetPhotos(categoryId)
  const photos = data ? data.photos : []
  // console.log('data graphl', data)
  if (loading) return 'Cargando...'
  if (error) return 'error al obtener datos'

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
