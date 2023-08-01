import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { gameId } from '@utils/index';

export interface Quizz {
  quizzId: string;
  title: string;
  description: string;

  bgQuizzQuestionImg: string;
  quizzes: Quizz[];
  draftQuizz: Quizz | {};
  quizzType: string;
  isQuizzSelected?: boolean;
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

const quizzSlice = createSlice({
  name: 'quizz',
  initialState: initialState as initialStateProps,
  reducers: {
    addQuizz: (state, action: PayloadAction<Quizz>) => {
      state.quizz = {
        ...state.quizz,
        ...action.payload,
      };
    },
    addDraftQuizz: (state, action: PayloadAction<Quizz>) => {
      state.quizz = {
        ...state.quizz,
        ...action.payload,
        quizzes: [...state.quizz.quizzes],
        draftQuizz: {
          ...state.quizz.draftQuizz,
          ...action.payload,
        },
      };
    },
    addQuestionToQuizzes: (state, action: PayloadAction<any>) => {
      state.quizz = {
        ...state.quizz,
        quizzes: [
          ...state.quizz.quizzes,
          ...(Array.isArray(action.payload)
            ? action.payload
            : [action.payload]),
        ],
        draftQuizz: {
          quizzType: 'quizz',
        },
        selectedQuizz: {
          isQuizzSelected: false,
        },
      };
    },
    selectQuizz: (state, action: PayloadAction<Quizz>) => {
      state.selectedQuizz = action.payload;
    },
    duplicateQuizz: (state, action: PayloadAction<Quizz>) => {
      const isSelectedQuizz = state.selectedQuizz.isQuizzSelected;
      const gameIdQuizz = gameId();
      const duplicateQuizz = {
        ...action.payload,
        quizzId: gameIdQuizz,
      };
      if (isSelectedQuizz) {
        state.quizz.quizzes.push(duplicateQuizz);
        state.selectedQuizz = {
          isSelectedQuizz: true,
          ...duplicateQuizz,
        };
      } else {
        state.quizz.quizzes.push(duplicateQuizz);
      }
    },
    unselectQuizz: state => {
      state.selectedQuizz = {
        isQuizzSelected: false,
      };
    },
    updateQuizz: (state, action: PayloadAction<Quizz>) => {
      const updatedQuizzes = state.quizz.quizzes.map((quizz: Quizz) => {
        if (quizz.quizzId === state.selectedQuizz?.quizzId) {
          return {
            ...quizz,
            ...action.payload,
          };
        }
        return { ...quizz };
      });

      state.quizz.quizzes = updatedQuizzes;
      state.selectedQuizz = {
        ...state.selectedQuizz,
        ...action.payload,
      };
    },
    completedQuizz: state => {
      state.quizz = {
        quizzes: [],
        draftQuizz: {},
        description: '',
        quizzId: '',
        title: '',
        bgQuizzQuestionImg: '',
      };
      state.selectedQuizz = {
        isQuizzSelected: false,
      };
    },
  },
});

export const {
  addQuizz,
  addDraftQuizz,
  addQuestionToQuizzes,
  selectQuizz,
  duplicateQuizz,
  unselectQuizz,
  updateQuizz,
  completedQuizz,
} = quizzSlice.actions;

export default quizzSlice.reducer;
