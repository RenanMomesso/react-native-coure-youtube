import axios from 'src/axios';
import fs from 'react-native-fs';
import { convertImagesInObject } from '@utils/imagesToBase64';

class QuizzService {
  async createQuizz(quizzData: any) {
    const copyQuizzData = { ...quizzData };
    delete copyQuizzData.selectedQuizz;
    delete copyQuizzData.draftQuizz;
    const convertedObject = await convertImagesInObject(copyQuizzData);
    console.log(JSON.stringify(convertedObject, undefined, 3));

    const response = await axios.post('/quizz/create', {
      ...convertedObject,
    });

    return response.data;
  }

  async getQuizzes() {
    const response = await axios.get('/quizz/get-all-quizzes');
    return response.data;
  }
}

export const quizzService: QuizzService = new QuizzService();
