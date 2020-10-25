import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCard = () => {
  return (
    <ul>
      {
        [1, 2, 3].map(photo => {
          return (
            <PhotoCard key={photo} />
          )
        })
      }
    </ul>
  )
}
