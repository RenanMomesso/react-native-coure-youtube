import {
  MutationCreateUserArgs,
  MutationUserLoginArgs,
  ResponseLoginUser,
  ResponseMessage,
} from '@graphql/generated';
import { LoginMutation, SignupMutation } from '@graphql/mutations';
import { client } from '@utils/client';
import { Alert } from 'react-native';

export interface ISignupResponse {
  createUser: ResponseMessage;
}

interface ILoginResponse {
  userLogin: ResponseLoginUser;
}

interface IResponseLoginUser {
  message: string;
  success: boolean;
  token?: string;
  email?: string;
  id?: string;
  fullname?: string;
  firstTimeLogging?: boolean;
}

export async function signUp(
  email: string,
  password: string,
): Promise<IResponseLoginUser> {
  try {
    const { data, errors } = await client.mutate<
      ISignupResponse,
      MutationCreateUserArgs
    >({
      mutation: SignupMutation,
      variables: {
        data: { email, password },
      },
    });

    if (!data?.createUser.success || errors?.length) {
      Alert.alert('Error', errors![0].message!);
      return {
        message: errors![0].message!,
        success: false,
      };
    }
    const loginResponse = await login(email, password);
    if (loginResponse.token && loginResponse.success) {
      return {
        message: loginResponse.message,
        success: loginResponse.success,
        token: loginResponse.token,
        email: loginResponse.email,
        id: loginResponse.id,
        firstTimeLogging: loginResponse.firstTimeLogging,
      };
    } else {
      return {
        message: loginResponse.message,
        success: loginResponse.success,
      };
    }
  } catch (error) {
    Alert.alert('Error', (error as Error).message);
    return {
      message: (error as Error).message,
      success: false,
    };
  }
}

export async function login(
  email: string,
  password: string,
): Promise<IResponseLoginUser> {
  try {
    const { data, errors } = await client.mutate<
      ILoginResponse,
      MutationUserLoginArgs
    >({
      mutation: LoginMutation,
      variables: {
        data: { email, password },
      },
    });
    if (!data?.userLogin.success || errors?.length) {
      return {
        success: false,
        message: errors![0].message!,
      };
    }
    return {
      success: data?.userLogin.success!,
      message: data?.userLogin.message!,
      token: data?.userLogin.token!,
      email: data?.userLogin.email!,
      id: data?.userLogin.id!,
      fullname: data?.userLogin.fullname!,
    };
  } catch (error) {
    console.log({ error });
    Alert.alert('Error', (error as Error).message);
    return {
      success: false,
      message: (error as Error).message,
    };
  }
}
