import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const httpLink = createHttpLink({
  uri: 'https://0e86-2804-7f0-b901-f763-d1d6-4f23-43bc-efb5.ngrok-free.app',
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
