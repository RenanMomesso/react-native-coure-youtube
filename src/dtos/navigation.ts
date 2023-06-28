import { StackNavigationProp } from '@react-navigation/stack';

export type ScreenName = keyof RootStackParamList;
export type NavigationScreenProp = StackNavigationProp<
  RootStackParamList,
  ScreenName
>;

export type RootStackParamList = {
  Home: undefined;
  Signin: undefined;
  Signup: undefined;
  SigninPassword: undefined;
  Onboarding: undefined;
  FillProfileScreen: undefined;
  ImagePickerScreen: undefined;
  Sudoku: undefined;
  PaperScissorsRock: undefined;
  CreateQuizz: undefined;
  SelectQuizz: {
    quizzId: string;
  }
  CreateQuestion: {
    questionType: string;
  }
};
