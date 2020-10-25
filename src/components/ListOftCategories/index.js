import React from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
export const ListOftCategories = () => {
  return (
    <List>
      {
        [1, 2, 3, 4, 5].map(cat => {
          return (
            <Item key={cat}>
              <Category />
            </Item>
          )
        })
      }
    </List>
  )
}
