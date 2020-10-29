import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { useGetPhotoCard } from '../components/hooks/useGetPhotoCard'
export const PhotoCardWithQuery = ({ id }) => {
  const { data, loading, error } = useGetPhotoCard(id)
  const photo = data ? data.photo : {}
  if (loading) return 'Cargando ...'
  if (error) return 'error ...'
  console.log('data photo card:', data)
  return (
    <PhotoCard {...photo} />
  )
}
