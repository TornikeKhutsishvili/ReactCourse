import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from "@apollo/client/react";
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import client from './graphql/client.ts';
import './styles/index.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </StrictMode>
)
