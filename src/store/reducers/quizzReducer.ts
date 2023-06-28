const ADD_QUIZZ = 'ADD_QUIZZ';
const REMOVE_QUIZZ = 'REMOVE_QUIZZ';
const UPDATE_QUIZZ = 'UPDATE_QUIZZ';
const ADD_QUESTION = 'ADD_QUESTION';

interface Quizz {
  id: string;
  title: string;
}

export const addQuizz = (quizz: Quizz) => ({});

export const removeQuizz = (quizz: Quizz) => ({});

const quizzReducer = (state: Quizz[] = [], action: any) => {
  switch (action.type) {
    case ADD_QUIZZ:
      return [...state, action.quizz];
    default:
      return state;
  }
};

export default quizzReducer;
