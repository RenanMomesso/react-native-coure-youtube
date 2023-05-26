import { gql } from '@apollo/client';

export const SignupMutation = gql`
  mutation CreateUser($data: UserInput!) {
    createUser(data: $data) {
      message
      success
    }
  }
`;

export const LoginMutation = gql`
  mutation UserLogin($data: LoginUserInput!) {
    userLogin(data: $data) {
      token
      email
      id
      success
      message
      fullname
    }
  }
`;
