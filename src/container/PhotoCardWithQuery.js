import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { useGetPhotoCard } from '../components/hooks/useGetPhotoCard'
export const PhotoCardWithQuery = () => {
  const { data } = useGetPhotoCard(1)
  console.log('data photo card', data)
  return (
    <PhotoCard />
  )
}
