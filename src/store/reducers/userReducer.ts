import {
  CLEAR_ONBOARDING,
  ONBOARDING_COMPLETE,
  IUserInitialState,
  UserActionTypes,
  CLEAR_USER,
  SET_USER,
} from '../types/userTypes';

const userInitialState: IUserInitialState = {
  onboardingComplete: false,
  userInfo: {},
};

const userReducer = (
  state: IUserInitialState = userInitialState,
  action: UserActionTypes,
) => {
  switch (action.type) {
    case ONBOARDING_COMPLETE:
      return { ...state, onboardingComplete: true };
    case CLEAR_ONBOARDING:
      return { ...state, onboardingComplete: false };
    case SET_USER:
      return { ...state, userInfo: action.payload };
    case CLEAR_USER:
      return {
        ...state,
        userInfo: {},
      };
    default:
      return state;
  }
};

export default userReducer;
