// actions.js
export const OPEN_BOTTOM_SHEET = 'OPEN_BOTTOM_SHEET';
export const CLOSE_BOTTOM_SHEET = 'CLOSE_BOTTOM_SHEET';

export const openBottomSheet = (children: any = null) => ({
  type: OPEN_BOTTOM_SHEET,
  payload: children,
});

export const closeBottomSheet = () => ({
  type: CLOSE_BOTTOM_SHEET,
});

// reducer.js

const initialState = {
  isOpen: false,
  children: null,
};

const bottomSheetReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case OPEN_BOTTOM_SHEET:
      return {
        ...state,
        isOpen: true,
        children: action.payload,
      };
    case CLOSE_BOTTOM_SHEET:
      return {
        ...state,
        isOpen: false,
        children: null,
      };
    default:
      return state;
  }
};

export default bottomSheetReducer;
