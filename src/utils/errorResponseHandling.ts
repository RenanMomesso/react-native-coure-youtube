import { ApolloError } from '@apollo/client';

export const errorGraphQLResponseHandling = (error: ApolloError) => {
  const { graphQLErrors, networkError } = error;
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
    });
  }
};

export const errorResponseHandling = (error: string) => {
  return {
    success: false,
    message: error,
  };
};
