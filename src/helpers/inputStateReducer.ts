const SET_VALUE = 'SET_VALUE';
const SET_FOCUS = 'SET_FOCUS';

export type TextInputState = {
  value: string;
  isFocused: boolean;
  ref: React.RefObject<any>;
  label: string;
  icon?: string;
  onIconPress?: () => void;
  maskValue?: RegExp[] | string | null | undefined | any;
  maxLength?: number | undefined;
};

export type InputState = Record<string, TextInputState>;

function inputStateReducer(state: any, action: any) {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        [action.input]: { ...state[action.input], value: action.value },
      };
    case SET_FOCUS:
      return {
        ...state,
        [action.input]: { ...state[action.input], isFocused: action.isFocused },
      };
    default:
      return state;
  }
}

export default inputStateReducer;
