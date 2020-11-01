import React from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { useNearScreen } from '../hooks/useNearScreen'
import { useMuationToogleLike } from '../hooks/useMutationToogleLike'
import { FavButton } from '../FavButton'
import { Link } from '@reach/router'
const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, liked, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const { mutation, mutationLoading, mutationError } = useMuationToogleLike()
  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id }
      }
    })
  }
  // console.log('{ mutation, mutationLoading, mutationError }', { mutation, mutationLoading, mutationError })

  return (
    <Article ref={element}>
      {
        show && <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton
            liked={liked} likes={likes}
            onClick={handleFavClick}
          />
        </>
      }

    </Article>
  )
}
