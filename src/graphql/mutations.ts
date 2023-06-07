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
      message
      success
      fullname
      id
      firstTimeLogging
    }
  }
`;

export const UpdateUserMutation = gql`
  mutation UpdateUser($data: UpdateUserInput!) {
    updateUser(data: $data) {
      _id
      fullname
      birthday
      cpf
      email
      firstTimeLogging
      profilePhoto
    }
  }
`;
