import { gameId } from '@utils/index';
import {
  FETCH_ALL_QUIZZ_FAILURE,
  FETCH_ALL_QUIZZ_REQUEST,
  FETCH_ALL_QUIZZ_SUCCESS,
} from '../types/quizz-types';

const ADD_QUIZZ = 'ADD_QUIZZ';
const REMOVE_QUIZZ = 'REMOVE_QUIZZ';
const UPDATE_QUIZZ = 'UPDATE_QUIZZ';
const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_DRAFT_QUIZZ = 'ADD_DRAFT_QUIZZ';
export const SELECT_QUIZZ = 'SELECT_QUIZZ';
export const UNSELECT_QUIZZ = 'UNSELECT_QUIZZ';
export const DUPLICATE_QUIZZ = 'DUPLICATE_QUIZZ';
export const COMPLETED_QUIZZ = 'COMPLETED_QUIZZ';

export interface Quizz {
  id?: string;
  title?: string;
  quizzId?: string;
  quizzPoints?: number;
  bgQuizzQuestionImg?: string;
  bgQuizzQuestionColor?: string;
  bgQuizzQuestion?: string;
  bgQuizzQuestionImgUrl?: string;
  bgQuizzQuestionImgName?: string;
}

interface initialStateProps {
  quizz: {
    title?: string;
    quizzId: string;
    description: string;
    bgQuizzQuestionImg: string;
    quizzes: Quizz[];
    draftQuizz: Quizz | {};
  };
  selectedQuizz: Partial<Quizz> & {
    isQuizzSelected?: boolean;
  };
  allQuizzes: Quizz[];
  loadingQuizzes: boolean;
  error: string | null;
}
export const initialState: initialStateProps = {
  quizz: {
    quizzes: [],
    draftQuizz: {},
    description: '',
    quizzId: '',
    title: '',
    bgQuizzQuestionImg: '',
  },
  selectedQuizz: {
    isQuizzSelected: false,
  },
  allQuizzes: [],
  loadingQuizzes: false,
  error: null,
};

export const addQuizz = (quizz: any) => {
  return {
    type: ADD_QUIZZ,
    quizz,
  };
};

export const addDraftQuizz = (quizz: any) => {
  return {
    type: ADD_DRAFT_QUIZZ,
    draftQuizz: quizz,
  };
};

export const createQuizz = (quizz: any) => ({
  type: ADD_DRAFT_QUIZZ,
  quizz,
});

export const addQuestionToQuizzes = (quizzQuestion: any) => {
  return {
    type: ADD_QUESTION,
    quizzQuestion,
  };
};

export const selectQuizz = (quizz: Quizz) => ({
  type: SELECT_QUIZZ,
  quizz,
});

export const updateQuizz = (quizz: Quizz & Record<string, any>) => {
  return {
    type: UPDATE_QUIZZ,
    quizz,
  };
};

export const unselectQuizz = () => ({
  type: UNSELECT_QUIZZ,
});

export const removeQuizz = (quizz: Quizz) => ({});

export const duplicateQuizz = (quizz: Quizz) => ({
  type: DUPLICATE_QUIZZ,
  quizz,
});

export const finishQuizzCreation = () => ({
  type: COMPLETED_QUIZZ,
});

const quizzReducer = (state: initialStateProps = initialState, action: any) => {
  switch (action.type) {
    case FETCH_ALL_QUIZZ_REQUEST:
      return {
        ...state,
      };
    case FETCH_ALL_QUIZZ_SUCCESS:
      return {
        ...state,
        allQuizzes: action.payload,
      };
    case FETCH_ALL_QUIZZ_FAILURE:
      return {
        ...state,
        allQuizzes: [],
        error: action.payload,
      };
    case ADD_QUIZZ:
      return { ...state, quizz: action.quizz };
    case ADD_DRAFT_QUIZZ:
      return {
        ...state,
        quizz: {
          ...state.quizz,
          ...action.quizz,
          quizzes: [...state.quizz.quizzes],
          draftQuizz: {
            ...state.quizz.draftQuizz,
            ...action.draftQuizz,
          },
        },
      };
    case ADD_QUESTION:
      return {
        ...state,
        quizz: {
          ...state.quizz,
          quizzes: [
            ...state.quizz.quizzes,
            ...(Array.isArray(action.quizzQuestion)
              ? action.quizzQuestion
              : [action.quizzQuestion]),
          ],
          draftQuizz: {
            quizzType: 'quizz',
          },
          selectedQuizz: {
            isQuizzSelected: false,
          },
        },
      };
    case SELECT_QUIZZ:
      return {
        ...state,
        selectedQuizz: action.quizz,
        quizz: {
          ...state.quizz,
        },
      };

    case DUPLICATE_QUIZZ:
      const isSelectedQuizz = state.selectedQuizz.isQuizzSelected;

      const gameIdQuizz = gameId();
      const duplateQuizz = {
        ...action.quizz,
        quizzId: gameIdQuizz,
      };
      if (isSelectedQuizz) {
        return {
          ...state,
          quizz: {
            ...state.quizz,
            quizzes: [...state.quizz.quizzes, duplateQuizz],
          },
          selectedQuizz: {
            isSelectedQuizz: true,
            ...duplateQuizz,
          },
        };
      } else {
        return {
          ...state,
          quizz: {
            ...state.quizz,
            quizzes: [...state.quizz.quizzes, duplateQuizz],
          },
        };
      }

    case UNSELECT_QUIZZ:
      return {
        ...state,
        selectedQuizz: {
          isQuizzSelected: false,
        },
        quizz: {
          ...state.quizz,
        },
      };
    case UPDATE_QUIZZ: {
      const updatedQuizzes = state.quizz.quizzes.map((quizz: Quizz) => {
        if (quizz.quizzId === state.selectedQuizz?.quizzId) {
          return {
            ...quizz,
            ...action.quizz,
          };
        }
        return { ...quizz };
      });

      return {
        ...state,
        quizz: {
          ...state.quizz,
          quizzes: updatedQuizzes,
        },
        selectedQuizz: {
          ...state.selectedQuizz,
          ...action.quizz,
        },
      };
    }
    case COMPLETED_QUIZZ:
      return { ...state };
      return {
        ...state,
        quizz: {
          quizzes: [],
          draftQuizz: {},
          description: '',
          quizzId: '',
          title: '',
        },
        selectedQuizz: {
          isQuizzSelected: false,
        },
      };
    default:
      return state;
  }
};

export default quizzReducer;
