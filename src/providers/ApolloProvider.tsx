import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://74ab-2804-7f0-b901-f763-e594-2691-80f1-de5e.ngrok-free.app/',
    cache: new InMemoryCache(),
});


const ApolloProviderWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
};

export default ApolloProviderWrapper;