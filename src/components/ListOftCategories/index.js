import React from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { categories } from '../../../api/db.json'
export const ListOftCategories = () => {
  return (
    <List>
      {
        categories.map(category => {
          return (
            <Item key={category}>
              <Category {...category} />
            </Item>
          )
        })
      }
    </List>
  )
}
