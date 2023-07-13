export const quizzMethods = [
  {
    id: 'versusGame',
    name: 'Versus Game',
  },
  {
    id: 'soloGame',
    name: 'Solo Game',
  },

  {
    id: 'questions',
    name: 'Questions',
  },
];

export interface buttonAnswersProps {
  buttonColor: string;
  answer: string;
  buttonKey: number;
  isTheRightAnswer: boolean;
  shadowColor?: string;
}

export const nullSelectedAnswer = {
  buttonColor: '',
  answer: '',
  buttonKey: 100,
  isTheRightAnswer: false,
};

export const buttonsAnswers: buttonAnswersProps[] = [
  {
    buttonColor: '#3779ff',
    answer: 'Add Answer',
    buttonKey: 0,
    isTheRightAnswer: false,
    shadowColor: '#295ecd'
  },
  {
    buttonColor: '#f75555',
    answer: 'Add Answer',
    buttonKey: 1,
    isTheRightAnswer: false,
    shadowColor: '#eb326d',
  },
  {
    buttonColor: '#ff981f',
    answer: 'Add Answer',
    buttonKey: 2,
    isTheRightAnswer: false,
    shadowColor: '#f88107',
  },
  {
    buttonColor: '#12d18e',
    answer: 'Add Answer',
    buttonKey: 3,
    isTheRightAnswer: false,
    shadowColor: '#00b878',
  },
];
