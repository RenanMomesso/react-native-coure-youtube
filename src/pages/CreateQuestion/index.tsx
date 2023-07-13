import DraftQuizzes from '@components/DraftQuizzes';
import Quizz from '@components/Quizzes/QuizzGame';
import { quizzUseSelector } from '@hooks/useRedux';
import { Container } from '@theme/globalComponents';
import React from 'react';
import { useSelector } from 'react-redux';

const CreateQuestion = () => {
    const { quizz, selectedQuizz } = useSelector(quizzUseSelector)
    const draftQuizz = selectedQuizz ?? quizz?.draftQuizz ?? {}
    const quiizes = quizz?.quizzes.concat(draftQuizz)

    return (
        <Container style={{ padding: 20 }}>
            <Quizz />
            {!!quiizes?.length && <DraftQuizzes />}
        </Container>
    )
}

export default CreateQuestion;