import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Context from './Context'

const client = new ApolloClient({
  uri: 'https://petgram-server-mcvictor.mcvictormurillo.vercel.app/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <Context.Provider value={{ isAuth: false }}>

    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>

  , document.getElementById('app'))
