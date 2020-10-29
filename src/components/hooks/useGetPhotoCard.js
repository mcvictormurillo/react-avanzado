import { useQuery, gql } from '@apollo/client'
const GET_SINGLE_FOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
export const useGetPhotoCard = id => {
  const { loading, data, error } = useQuery(GET_SINGLE_FOTO, { variables: { id: id } })
  return { loading, data, error }
}
