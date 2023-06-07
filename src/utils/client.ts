import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const httpLink = createHttpLink({
  uri: 'https://1bf8-2804-7f0-b901-f763-bd96-9e99-85cb-1d26.ngrok-free.app',
});

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('@token');
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${JSON.parse(token)}` : '',
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
