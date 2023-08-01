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
  BottomTabNavigation: undefined;
  BattleQuizzSearchingOpponent: undefined;
  PickOneVsOneGame: undefined;
  DiscoverScreen: undefined;
  BattleGameScreen: {
    room: any;
  };
  QuizzScreen: {
    quizzId: string;
  };
  SelectQuizz: {
    quizzId: string;
  };
  CreateQuestion: {
    questionType: string;
  };
};
