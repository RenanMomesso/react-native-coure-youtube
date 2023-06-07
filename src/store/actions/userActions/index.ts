import {
  CLEAR_ONBOARDING,
  CLEAR_STORE,
  IClearOnboardingAction,
  IClearStoreAction,
  IOnboardingCompleteAction,
  ISetUserAction,
  IUpdateUserAction,
  IUser,
  ONBOARDING_COMPLETE,
  SET_USER,
  UPDATE_USER,
} from '../../types';

export const clearOnboarding = (): IClearOnboardingAction => {
  return {
    type: CLEAR_ONBOARDING,
  };
};

export const onBoardingCompleted = (): IOnboardingCompleteAction => {
  return {
    type: ONBOARDING_COMPLETE,
  };
};

export const clearUserAction = (): IClearStoreAction => {
  return {
    type: CLEAR_STORE,
  };
};

export const setUserAction = (user: IUser): ISetUserAction => {
  return {
    type: SET_USER,
    payload: { ...user },
  };
};

export const updateUserAction = (user: IUser): IUpdateUserAction => {
  console.log({ ...user });
  return {
    type: UPDATE_USER,
    payload: user,
  };
};
