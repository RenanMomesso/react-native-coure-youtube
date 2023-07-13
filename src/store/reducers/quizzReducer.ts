const ADD_QUIZZ = 'ADD_QUIZZ';
const REMOVE_QUIZZ = 'REMOVE_QUIZZ';
const UPDATE_QUIZZ = 'UPDATE_QUIZZ';
const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_DRAFT_QUIZZ = 'ADD_DRAFT_QUIZZ';
export const SELECT_QUIZZ = 'SELECT_QUIZZ';
export const UNSELECT_QUIZZ = 'UNSELECT_QUIZZ';

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
    quizzes: Quizz[];
    draftQuizz: Quizz | {};
  };
  selectedQuizz: Partial<Quizz> & {
    isQuizzSelected?: boolean;
  };
}
export const initialState: initialStateProps = {
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
  console.log("UPDATE QUIZZ", quizz)
  return {
    type: UPDATE_QUIZZ,
    quizz,
  };
};

export const unselectQuizz = () => ({
  type: UNSELECT_QUIZZ,
});

export const removeQuizz = (quizz: Quizz) => ({});

const quizzReducer = (state: initialStateProps = initialState, action: any) => {
  switch (action.type) {
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
    case UPDATE_QUIZZ:
      return {
        ...state,
        quizz: {
          ...state.quizz,
          quizzes: [
            ...state.quizz.quizzes.map((quizz: Quizz) => {
              if (quizz.quizzId === state.selectedQuizz?.quizzId) {
                return {
                  ...quizz,
                  ...action.quizz,
                };
              }
              return { ...quizz };
            }),
          ],
        },
      };
    default:
      return state;
  }
};

export default quizzReducer;
