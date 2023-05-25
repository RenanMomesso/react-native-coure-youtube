import {
  CLEAR_ONBOARDING,
  IClearOnboardingAction,
  IOnboardingCompleteAction,
  ISetUserAction,
  IUser,
  ONBOARDING_COMPLETE,
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

export const setUserAction = (user: IUser): ISetUserAction => {
  return {
    type: 'SET_USER',
    payload: { ...user },
  };
};
