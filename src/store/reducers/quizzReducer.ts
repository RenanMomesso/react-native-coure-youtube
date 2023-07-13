import { produce } from 'immer';
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
  console.log('UPDATE QUIZZ', quizz);
  return {
    type: UPDATE_QUIZZ,
    quizz,
  };
};

export const unselectQuizz = () => ({
  type: UNSELECT_QUIZZ,
});

export const removeQuizz = (quizz: Quizz) => ({});

const quizzReducer = (state = initialState, action) => {
  return produce(state, draft => {
    console.log('state', JSON.stringify(state.selectedQuizz, undefined, 2));
    console.log('draft', JSON.stringify(draft.selectedQuizz, undefined, 2));
    switch (action.type) {
      case ADD_QUIZZ:
        draft.quizz = action.quizz;
        break;
      case ADD_DRAFT_QUIZZ:
        draft.quizz = {
          ...draft.quizz,
          ...action.quizz,
          quizzes: [...draft.quizz.quizzes],
          draftQuizz: {
            ...draft.quizz.draftQuizz,
            ...action.draftQuizz,
          },
        };
        break;
      case ADD_QUESTION:
        draft.quizz = {
          ...draft.quizz,
          quizzes: [
            ...draft.quizz.quizzes,
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
        };
        break;
      case SELECT_QUIZZ:
        draft.selectedQuizz = action.quizz;
        break;
      case UNSELECT_QUIZZ:
        draft.selectedQuizz = {
          isQuizzSelected: false,
        };
        break;
      case UPDATE_QUIZZ:
        draft.quizz.quizzes = draft.quizz.quizzes.map(quizz => {
          if (quizz.quizzId === draft.selectedQuizz?.quizzId) {
            return {
              ...quizz,
              ...action.quizz,
            };
          }
          return quizz;
        });
        break;
      default:
        break;
    }
  });
};

export default quizzReducer;
