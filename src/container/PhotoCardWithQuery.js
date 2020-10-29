import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { useGetPhotoCard } from '../components/hooks/useGetPhotoCard'
export const PhotoCardWithQuery = ({ id }) => {
  const { data } = useGetPhotoCard(id)
  const photo = data ? data.photo : {}
  console.log('data photo card:', data)
  return (
    <PhotoCard {...photo} />
  )
}
