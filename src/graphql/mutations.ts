import { gql } from '@apollo/client';

export const SignupMutation = gql`
  mutation CreateUser($data: UserInput!) {
    createUser(data: $data) {
      message
      success
    }
  }
`;
