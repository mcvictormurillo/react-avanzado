import React from 'react'
import { Helmet } from 'react-helmet'
import { Div, Title, Subtitle } from './styles'
export const Layout = ({ children, title, subtitle }) => (
  <>
    <Helmet>
      {title && <title>{title} | Petgram 🐶</title>}
      {subtitle && <meta name='description' conten={subtitle} />}
    </Helmet>
    <Div>
      {title && <Title>{title} | Petgram 🐶</Title>}
      {title && <Subtitle>{title} | Petgram 🐶</Subtitle>}
      {children}
    </Div>
  </>
)
