import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const BASE_URL = import.meta.env.VITE_APP_API_URL;

const client = new ApolloClient({
  link: new HttpLink({
    uri: BASE_URL,
  }),
  cache: new InMemoryCache(),
});

export default client;