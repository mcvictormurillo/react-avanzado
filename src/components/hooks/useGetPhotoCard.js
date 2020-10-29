import { useQuery, gql } from '@apollo/client'
const query = gql`
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
  const { loading, data, error } = useQuery(query, { variables: { id: '7' } })
  return { loading, data, error }
}
