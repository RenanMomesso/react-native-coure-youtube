import { quizzService } from 'src/services/api/quizz/quizz.service';
import {
    FETCH_ALL_QUIZZ_FAILURE, FETCH_ALL_QUIZZ_REQUEST, FETCH_ALL_QUIZZ_SUCCESS
} from '../../types/quizz-types';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { RootState } from 'src/store';

export const fetchAllQuizzRequest = () => ({
    type: FETCH_ALL_QUIZZ_REQUEST
})

export const fetchAllQuizzSuccess = (payload: any) => ({
    type: FETCH_ALL_QUIZZ_SUCCESS,
    payload
})

export const fetchAllQuizzFailure = (error: any) => ({
    type: FETCH_ALL_QUIZZ_FAILURE,
    error
})



export const fetchAllQuizzes = (): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
    console.warn("REQUESTING")
    try {
        dispatch(fetchAllQuizzRequest())
        const response = await quizzService.getQuizzes()
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", response)
        dispatch(fetchAllQuizzSuccess(response))
    } catch (error) {
        dispatch(fetchAllQuizzFailure(error))
    }
};
