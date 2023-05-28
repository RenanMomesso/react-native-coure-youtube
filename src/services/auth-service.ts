import {
  MutationCreateUserArgs,
  MutationUserLoginArgs,
  ResponseLoginUser,
  ResponseMessage,
} from '@graphql/generated';
import { LoginMutation, SignupMutation } from '@graphql/mutations';
import { client } from '@utils/client';
import { errorResponseHandling } from '@utils/errorResponseHandling';
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
      return errorResponseHandling(errors![0].message!);
    }
    const loginResponse = await login(email, password);
    if (loginResponse.token && loginResponse.success) {
      return { ...loginResponse };
    } else {
      return errorResponseHandling(loginResponse.message!);
    }
  } catch (error) {
    Alert.alert('Error', (error as Error).message);
    return errorResponseHandling((error as Error).message);
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
      return errorResponseHandling(errors![0].message!);
    }
    if (data?.userLogin?.__typename) {
      delete data?.userLogin.__typename;
    }

    return { ...data.userLogin };
  } catch (error) {
    Alert.alert('Error', (error as Error).message);
    return errorResponseHandling((error as Error).message);
  }
}
