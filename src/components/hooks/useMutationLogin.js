import { gql, useMutation } from '@apollo/client'
const LOGIN_MUTATION = gql`
mutation login($input: UserCredentials!) {
  login (input: $input)
}
`

export const useMutationLogin = () => {
  const [login, { loading, error, data }] = useMutation(LOGIN_MUTATION)
  return { login, loading, error, data }
}
