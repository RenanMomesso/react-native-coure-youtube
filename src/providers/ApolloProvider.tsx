import { ApolloProvider } from '@apollo/client';
import { client } from '@utils/client';

const ApolloProviderWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
};

export default ApolloProviderWrapper;