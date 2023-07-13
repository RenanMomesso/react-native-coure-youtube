import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { addDraftQuizz, updateQuizz } from 'src/store/reducers/quizzReducer';
import { Button, ButtonContainer, ButtonText, Container, NoButton, OkButton, OkButtonText, Title } from './Quizzes.styled';

interface TimeLimitSelectionProps {
    list: number[];
    type: string;
    onPressTime?: (time: number) => void;
    timeLimit?: number | null;
    onPressPoints?: (point: number) => void;
    points?: number | null;
}

const TimeLimitSelection = ({
    list,
    type,
    onPressTime,
    timeLimit,
    onPressPoints,
    points,
}: TimeLimitSelectionProps) => {
    const quizzReducer = useSelector((state: RootState) => state.quizzReducer);
    const { quizz: { draftQuizz }, selectedQuizz } = quizzReducer;

    const isSelectedQuizz = selectedQuizz.isQuizzSelected;
    const quizzTimeLimit = draftQuizz?.quizzTimeLimit;
    const dispatch = useDispatch();

    const onPressHandler = (option: number) => {
        if (type === 'point') {
            if (isSelectedQuizz) {
                dispatch(updateQuizz({ quizzPoints: option }));
            } else dispatch(addDraftQuizz({ quizzPoints: option }));
            onPressPoints && onPressPoints(option);
        } else {
            if (isSelectedQuizz) {
                dispatch(updateQuizz({ quizzTimeLimit: option }));
            } else {
                dispatch(
                    addDraftQuizz({
                        quizzTimeLimit: option,
                    })
                );
            }
            onPressTime && onPressTime(option);
        }
    };

    const renderTimeButtons = () => {
        return list.map((time) => (
            <Button
                key={time}
                type={type}
                isSelected={type === 'time' ? (timeLimit || quizzTimeLimit) === time : points === time}
                onPress={() => onPressHandler(time)}
            >
                <ButtonText>
                    {time} {type === 'point' ? 'pt' : 'sec'}
                </ButtonText>
            </Button>
        ));
    };

    const typeTitle = type === 'point' ? 'Points' : 'Time Limit';

    return (
        <Container>
            <Title>{typeTitle}</Title>
            <ButtonContainer>
                <NoButton onPress={() => onPressHandler(0)}>
                    <ButtonText>{type === 'point' ? 'No points' : 'No time limit'}</ButtonText>
                </NoButton>
                {renderTimeButtons()}
            </ButtonContainer>
            <OkButton onPress={() => onPressHandler(type === 'point' ? points : timeLimit)}>
                <OkButtonText>OK</OkButtonText>
            </OkButton>
        </Container>
    );
};


export default TimeLimitSelection;
