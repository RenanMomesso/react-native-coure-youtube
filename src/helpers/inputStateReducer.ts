const SET_VALUE = 'SET_VALUE';
const SET_FOCUS = 'SET_FOCUS';

// reducer for managing input state
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
