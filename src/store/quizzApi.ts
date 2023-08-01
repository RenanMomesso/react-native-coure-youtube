import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from 'src/axios';

export const quizzApi = createApi({
  reducerPath: 'quizzApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getQuizzes: builder.query({
      query: () => '/quizz/get-all-quizzes',
      transformResponse: (response: any) => {
        response.quizzes.sort((a: any, b: any) => {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        });
        return response;
      },
    }),
    addQuizz: builder.mutation({
      query: (quizzData: any) => {
        const copyQuizzData = { ...quizzData };
        delete copyQuizzData.selectedQuizz;
        delete copyQuizzData.draftQuizz;
        return {
          url: '/quizz/create',
          method: 'POST',
          body: { ...copyQuizzData },
        };
      },
    }),
    getQuizzById: builder.query({
      query: (quizzId: string) => `/quizz/get-quizz/${quizzId}`,
    }),
  }),
});

export const { useGetQuizzesQuery, useAddQuizzMutation, useGetQuizzByIdQuery } =
  quizzApi;
