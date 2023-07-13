import CustomModal from '@components/CustomModal';
import Text from '@components/Text';
import { Row } from '@theme/globalComponents';
import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components/native';
import QuizzTimerModal from './QuizzTimerModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import ChangeQuizzType from './ChangeQuizzType';

const ButtonOption = styled.TouchableOpacity`
    padding-horizontal: 8px;
    padding-vertical: 4px;
    background-color: #7052ff;
    border-radius: 12px;
`
type modalContentType = 'timer' | 'points'
const timeOptions = [5, 10, 20, 30, 45, 60, 90, 120];
const pointsOptions = [50, 100, 200, 250, 500, 750, 1000, 2000];

const PointsTimeAndQuizzType = ({ setQuestionType, questionType, disableSelectedQuizz }: any) => {
    const quizzReducer = useSelector((state: RootState) => state.quizzReducer);
    const { quizz, selectedQuizz } = quizzReducer;
    const isQuizzSelected = selectedQuizz.isQuizzSelected;
    const [points, setPoints] = useState<number>(100);
    const [timeLimit, setTimeLimit] = useState<number>(10);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState<modalContentType>('points')

    useEffect(() => {
        let draftPoints;
        let draftTimeLimit;
        if (isQuizzSelected) {
            draftPoints = !!selectedQuizz.quizzPoints ? selectedQuizz.quizzPoints : 100;
            draftTimeLimit = !!selectedQuizz.quizzTimeLimit ? selectedQuizz.quizzTimeLimit : 10;
        } else if (!isQuizzSelected && (!!quizz.draftQuizz?.quizzPoints || !!quizz.draftQuizz?.quizzTimeLimit)) {
            draftPoints = quizz.draftQuizz?.quizzPoints ?? 100;
            draftTimeLimit = quizz.draftQuizz?.quizzTimeLimit ?? 10;
        }
        setPoints(draftPoints ?? 100);
        setTimeLimit(draftTimeLimit ?? 10)
    }, [isQuizzSelected, isQuizzSelected?.quizzId, selectedQuizz?.quizzPoints, selectedQuizz?.quizzTimeLimit, quizz.draftQuizz?.quizzPoints, quizz.draftQuizz?.quizzTimeLimit])

    const onPressTimer = (time: number) => {
        setTimeLimit(time);
        closeModal();
    }

    const onPressPoints = (point: number) => {
        setPoints(point);
        closeModal();
    }

    const openModal = (modalType: modalContentType) => {
        setModalVisible(true);
        setModalContent(modalType)
    }
    const closeModal = () => {
        setModalVisible(false);
    }

    const modalContentHandler = {
        timer: <QuizzTimerModal type='time' timeLimit={timeLimit} onPressTime={onPressTimer} list={timeOptions} />,
        points: <QuizzTimerModal type='point' points={points} onPressPoints={onPressPoints} list={pointsOptions} />
    }

    return (
        <>
            <CustomModal onClose={closeModal} visible={modalVisible}>
                {modalContentHandler[modalContent]}
            </CustomModal>
            <Row style={{ marginTop: 20 }}>
                <ButtonOption onPress={() => openModal('timer')}>
                    <Text color='white'>{`${timeLimit !== 0 ? timeLimit + ' sec' : 'No time select'}`}</Text>
                </ButtonOption>
                <ButtonOption onPress={() => openModal('points')}>
                    <Text color='white'>{`${points !== 0 ? points + ' points' : 'No points'}`}</Text>
                </ButtonOption>
               <ChangeQuizzType label={questionType} onSelect={setQuestionType} />
            </Row>
        </>
    )
}

export default PointsTimeAndQuizzType;