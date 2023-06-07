export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: { input: any; output: any; }
};

/** The Address model */
export type Address = {
  __typename?: 'Address';
  _id: Scalars['ID']['output'];
  activated: Scalars['Boolean']['output'];
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  houseNumber: Scalars['String']['output'];
  state: Scalars['String']['output'];
  zipcode: Scalars['String']['output'];
};

export type LoginUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: ResponseMessage;
  updateUser: User;
  userLogin: ResponseLoginUser;
};


export type MutationCreateUserArgs = {
  data: UserInput;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
  id: Scalars['String']['input'];
};


export type MutationUserLoginArgs = {
  data: LoginUserInput;
};

export type Query = {
  __typename?: 'Query';
  getUser: User;
  getUsers: Array<User>;
};


export type QueryGetUserArgs = {
  id: Scalars['String']['input'];
};

/** The response from the server after creating a user */
export type ResponseLoginUser = {
  __typename?: 'ResponseLoginUser';
  email: Scalars['String']['output'];
  firstTimeLogging?: Maybe<Scalars['Boolean']['output']>;
  fullname: Scalars['String']['output'];
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token: Scalars['String']['output'];
};

/** The response from the server after creating a user */
export type ResponseMessage = {
  __typename?: 'ResponseMessage';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type UpdateUserInput = {
  birthday?: InputMaybe<Scalars['DateTime']['input']>;
  cpf?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  profilePhoto?: InputMaybe<Scalars['String']['input']>;
};

/** The User model */
export type User = {
  __typename?: 'User';
  OTP: Scalars['Float']['output'];
  OTPExpiration: Scalars['DateTime']['output'];
  _id: Scalars['ID']['output'];
  activatedAccount: Scalars['Boolean']['output'];
  address: Array<Address>;
  birthday: Scalars['DateTime']['output'];
  cpf: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstTimeLogging: Scalars['Boolean']['output'];
  fullname: Scalars['String']['output'];
  isAdmin: Scalars['Boolean']['output'];
  password: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  pinCode: Scalars['Float']['output'];
  profilePhoto: Scalars['String']['output'];
};

export type UserInput = {
  birthday?: InputMaybe<Scalars['DateTime']['input']>;
  cpf?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  fullname?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};
