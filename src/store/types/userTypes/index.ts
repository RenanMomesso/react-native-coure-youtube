export const CLEAR_ONBOARDING = 'CLEAR_ONBOARDING';
export const ONBOARDING_COMPLETE = 'ONBOARDING_COMPLETE';
export const SET_USER = 'SET_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const CLEAR_USER = 'CLEAR_USER';
export const CLEAR_STORE = 'CLEAR_STORE';

export interface IUser {
  name?: string;
  email?: string;
  token?: string;
  id?: string;
  firstTimeLogging?: boolean;
  profilePhoto?: string;

}

export type IUserInitialState = {
  onboardingComplete: boolean;
  userInfo: IUser;
};

export interface IOnboardingCompleteAction {
  type: typeof ONBOARDING_COMPLETE;
}

export interface IClearOnboardingAction {
  type: typeof CLEAR_ONBOARDING;
}

export interface ISetUserAction {
  type: typeof SET_USER;
  payload: object;
}

export interface IClearUserAction {
  type: typeof CLEAR_USER;
  payload: object;
}

export interface IUpdateUserAction {
  type: typeof UPDATE_USER;
  payload: object;
}

export interface IClearStoreAction {
  type: typeof CLEAR_STORE;
}

export type UserActionTypes =
  | IOnboardingCompleteAction
  | IClearOnboardingAction
  | ISetUserAction
  | IClearUserAction
  | IClearStoreAction
  | IUpdateUserAction;
