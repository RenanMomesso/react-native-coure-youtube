import axios from 'src/axios';

class QuizzService {
  async createQuizz(quizzData: any) {
    const copyQuizzData = { ...quizzData };
    delete copyQuizzData.selectedQuizz;
    delete copyQuizzData.draftQuizz;

    const response = await axios.post('/quizz/create', {
      ...copyQuizzData,
    });

    return response.data;
  }

  async getQuizzes() {
    const response = await axios.get('/quizz/get-all-quizzes');
    return response.data;
  }

  async getQuizzById(quizzId: string) {
    const response = await axios.get(`/quizz/get-quizz/${quizzId}`);
    return response.data;
  }

  async searchOpononentQuizz(quizzId: string) {
    const response = await axios.post('/quizz/search-oponent', {
      quizzId,
    });

    return response.data;
  }

  async getAvailableRooms(userId: string) {
    const body = {
      playerA: userId,
    };
    const response = await axios.post('/quizz/available-rooms', body);
    return response.data;
  }
}

export const quizzService: QuizzService = new QuizzService();
