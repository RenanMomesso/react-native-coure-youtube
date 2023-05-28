import {
  CLEAR_ONBOARDING,
  ONBOARDING_COMPLETE,
  IUserInitialState,
  UserActionTypes,
  CLEAR_USER,
  SET_USER,
  CLEAR_STORE,
} from '../types/userTypes';

const userInitialState: IUserInitialState = {
  onboardingComplete: false,
  userInfo: {
    name: '',
    email: '',
    firstTimeLogging: false,
    token: '',
    id: '',
  },
};

const userReducer = (
  state: IUserInitialState = userInitialState,
  action: UserActionTypes,
): IUserInitialState => {
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
    case CLEAR_STORE: {
      return userInitialState;
    }
    default:
      return state;
  }
};

export default userReducer;
