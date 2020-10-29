import React from 'react'
import { Link, Image } from './styles'
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1579820010410-c10411aaaa88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1074&q=80'

export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = 'j' }) => {
  return (
    <div>
      <Link to={`${path}`}>
        <Image src={cover} />
      </Link>
    </div>
  )
}
