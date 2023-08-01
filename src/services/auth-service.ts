import {
  MutationCreateUserArgs,
  MutationUpdateUserArgs,
  MutationUserLoginArgs,
  ResponseLoginUser,
  ResponseMessage,
} from '@graphql/generated';
import {
  LoginMutation,
  SignupMutation,
  UpdateUserMutation,
} from '@graphql/mutations';
import { saveDataToStorage } from '@utils/AsyncStorageUtils';
import { client } from '@utils/client';
import { errorResponseHandling } from '@utils/errorResponseHandling';
import { Alert } from 'react-native';
import { IUser } from 'src/store/types';

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

interface IResponseError {
  message: string;
  success: boolean;
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
    console.log({email, password})
    const { data, errors } = await client.mutate<
      ILoginResponse,
      MutationUserLoginArgs
    >({
      mutation: LoginMutation,
      variables: {
        data: { email, password },
      },
    });
    console.log({data,errors})
    if (!data?.userLogin.success || errors?.length) {
      return errorResponseHandling(errors![0].message!);
    }
    if (data?.userLogin?.__typename) {
      delete data?.userLogin.__typename;
    }
    await saveDataToStorage('@token', data?.userLogin.token!);
    return {
      ...data.userLogin,
      firstTimeLogging: data.userLogin.firstTimeLogging ?? false,
    };
  } catch (error) {
    console.log({ error })
    Alert.alert('Error', (error as Error).message);
    return errorResponseHandling((error as Error).message);
  }
}

export async function updateUserService(user: IUser): Promise<IUser | IResponseError> {
  try {

    const variables = {...user}
    delete variables?.gender
    const { data, errors } = await client.mutate<any, MutationUpdateUserArgs>({
      mutation: UpdateUserMutation,
      variables: {
        id: 'asdasdasd' ,
        data: variables
      },
    });
    console.log({ data, errors });
    delete data?.updateUser.__typename;
    return {
      ...data?.updateUser
    }
  } catch (error) {
    console.log({ error });
    Alert.alert('Error', (error as Error).message);
    return errorResponseHandling((error as Error).message);
  }
}
