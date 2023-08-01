import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserInfo {
  name: string;
  email: string;
  firstTimeLogging: boolean;
  token: string;
  id: string;
}

interface UserState {
  onboardingComplete: boolean;
  userInfo: UserInfo;
  jwt: string;
}

const initialState: UserState = {
  onboardingComplete: false,
  userInfo: {
    name: '',
    email: '',
    firstTimeLogging: false,
    token: '',
    id: '',
  },
  jwt: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    completeOnboarding(state) {
      state.onboardingComplete = true;
    },
    clearOnboarding(state) {
      state.onboardingComplete = false;
    },
    setUser(state, action: PayloadAction<UserInfo>) {
      state.userInfo = action.payload;
      state.jwt = action.payload.token;
    },
    updateUser(state, action: PayloadAction<Partial<UserInfo>>) {
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
    clearUser(state) {
      state.userInfo = initialState.userInfo;
    },
    clearStore() {
      return initialState;
    },
  },
});

export const {
  completeOnboarding,
  clearOnboarding,
  setUser,
  updateUser,
  clearUser,
  clearStore,
} = userSlice.actions;

export default userSlice.reducer;
