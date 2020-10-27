import React, { Fragment, useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'
const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(function () {
    // console.log('element', element.current)
    const observer = new window.IntersectionObserver(function (entries) {
      // console.log('entries', entries)
      const { isIntersecting } = entries[0]
      console.log({ isIntersecting })
      setShow(true)
      observer.disconnect()
    })
    observer.observe(element.current)
  }, [element])
  return (
    <Article ref={element}>
      {
        show && <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size='32px' /> {likes} likes!
          </Button>
        </>
      }

    </Article>
  )
}
