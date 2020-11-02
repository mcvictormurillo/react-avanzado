import React from 'react'
import { FavsWithQuery } from '../container/FavsWithQuery'
import { Layout } from '../components/Layout'

export default () => (
  <Layout title='Tus favoritos' subtitle='Aquí puedes contrar tus favoritos'>
    <FavsWithQuery />
  </Layout>
)
