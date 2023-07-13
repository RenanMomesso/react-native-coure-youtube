import axios from 'src/axios';

class QuizzService {
  async createQuizz(data: any) {
    const response = await axios.post('/quizz/create', {
      ...data,
    });

    return response.data;
  }
}

export const quizzService: QuizzService = new QuizzService();
