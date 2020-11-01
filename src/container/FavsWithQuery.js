import React from 'react'
import { useGetFavorites } from '../components/hooks/useGetFavorites'
import { ListOfFavs } from '../components/ListOfFavs'
export const FavsWithQuery = () => {
  const { loading, data, error } = useGetFavorites('')
  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error ...</p>
  const { favs } = data
  return <ListOfFavs favs={favs} />
}
