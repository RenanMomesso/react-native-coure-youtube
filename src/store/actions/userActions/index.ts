import {
  CLEAR_ONBOARDING,
  CLEAR_STORE,
  IClearOnboardingAction,
  IClearStoreAction,
  IOnboardingCompleteAction,
  ISetUserAction,
  IUser,
  ONBOARDING_COMPLETE,
  SET_USER,
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
  console.log(JSON.stringify({ ...user }), undefined, 3);
  return {
    type: SET_USER,
    payload: { ...user },
  };
};
