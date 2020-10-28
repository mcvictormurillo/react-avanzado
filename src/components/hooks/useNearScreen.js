import { useEffect, useState, useRef } from 'react'
export function useNearScreen () {
  const [show, setShow] = useState(false)
  const element = useRef(null)

  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      // console.log('element', element.current)
      const observer = new window.IntersectionObserver(function (entries) {
        // console.log('entries', entries)
        setShow(true)
        observer.disconnect()
      })
      observer.observe(element.current)
    })
  }, [element])
  return [show, element]
}
