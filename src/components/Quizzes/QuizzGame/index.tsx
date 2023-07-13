import AddImage from '@components/AddImage';
import { useNavigation } from '@react-navigation/native';
import { Container } from '@theme/globalComponents';
import React, { useState, useEffect } from 'react';
import QuestionSettings from '../PointsTimeAndQuizzType';
import QuizzMainQuestion from '../QuizzMainQuestion';
import HeaderNavigation from '@components/HeaderNavigation';
import { CloseIcon } from './QuizzGame.styled';
import { NavigationScreenProp } from 'src/dtos';
import PopupMenu, { PopupMenuOptions } from '@components/Popup';
import ButtonAnswers from '../ButtonAnswers';
import { handleGallery } from '@utils/handleGallery';
import { useDispatch, useSelector } from 'react-redux';
import { addDraftQuizz, addQuestionToQuizzes, updateQuizz } from 'src/store/reducers/quizzReducer';
import { quizzUseSelector } from '@hooks/useRedux';
import TrueOrFalseQuizzOption from '../TrueOrFalseQuizz/TrueFalseOption';
import Text from '@components/Text';

const QuizzGame = () => {
    const [questionType, setQuestionType] = useState("");

    const dispatch = useDispatch();
    const navigation = useNavigation<NavigationScreenProp>();
    const { quizz, selectedQuizz } = useSelector(quizzUseSelector)
    const draftQuizz = quizz.draftQuizz;
    const gameId = Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1);

    const isQuizzSelected = selectedQuizz.isQuizzSelected;
    const quizzId = isQuizzSelected ? selectedQuizz?.quizzId : draftQuizz?.quizzId;
    const [bgImg, setBgImg] = useState("");
    const bgQuizzQuestionImg = isQuizzSelected ? selectedQuizz?.bgQuizzQuestionImg : draftQuizz?.bgQuizzQuestionImg ? draftQuizz?.bgQuizzQuestionImg : '';
    const selectedQuestionType = isQuizzSelected ? selectedQuizz?.questionType : draftQuizz?.questionType ? draftQuizz?.questionType : 'quizz';

    useEffect(() => {
        setQuestionType(selectedQuestionType)
    }, [selectedQuestionType, quizzId])


    useEffect(() => {
        if (!draftQuizz?.quizzId) {
            dispatch(addDraftQuizz({ quizzId: gameId }));
        }
    }, [dispatch, draftQuizz?.quizzId, gameId, isQuizzSelected])

    const disabledButton = draftQuizz?.question?.length === 0 || draftQuizz?.question === null || draftQuizz?.question === undefined

    useEffect(() => {
        setBgImg(bgQuizzQuestionImg)
    }, [bgQuizzQuestionImg])


    const handleSaveQuizzQuestion = async () => {
        if (isQuizzSelected) return;
        dispatch(addQuestionToQuizzes([draftQuizz]))
    }

    const handleQuizzQuestion: Record<string, React.ReactElement> = {
        quizz: <ButtonAnswers />,
        trueFalse: <TrueOrFalseQuizzOption />,
    }

    const optionsDefault: PopupMenuOptions[] = [
        {
            label: 'Preview',
            Icon: 'eye-outline',
            onPress: () => console.log('Multiple Choice'),
            disabled: false
        },
        {
            label: 'Duplicate Question',
            Icon: 'content-copy',
            onPress: () => console.log('Multiple Choice'),
            disabled: false
        },
        {
            label: 'Save',
            Icon: 'content-save',
            onPress: handleSaveQuizzQuestion,
            disabled: disabledButton
        },
        {
            label: 'Delete',
            Icon: 'trash-can-outline',
            onPress: () => console.log('Multiple Choice'),
            disabled: false
        },
    ]

    const handleAddImage = async () => {
        const response = await handleGallery()
        if (response) {
            setBgImg(response?.uri)

            if (isQuizzSelected) {
                dispatch(updateQuizz({ bgQuizzQuestionImg: response?.uri }))
            } else {
                dispatch(addDraftQuizz({ bgQuizzQuestionImg: response?.uri }))
            }
        }
    }

    const removeBgImg = () => {
        setBgImg('')
        if (isQuizzSelected) {
            dispatch(updateQuizz({ bgQuizzQuestionImg: '' }))
        } else {
            dispatch(addDraftQuizz({ bgQuizzQuestionImg: '' }))
        }
    }

    return (
        <Container>
            <Text>{JSON.stringify({
                selectedQuestionType,
                bgQuizzQuestionImg
            }, undefined, 2)}</Text>
            <HeaderNavigation
                title='Create Quizzo'
                navigation={navigation}
                leftIcon={<CloseIcon onPress={() => navigation.pop(2)} />}
                rightIcon={<PopupMenu options={optionsDefault} />}
            />
            <AddImage
                removeImg={removeBgImg}
                imgUrl={bgImg}
                onClick={handleAddImage}
                style={{ marginTop: 20 }}
            />
            <QuestionSettings setQuestionType={setQuestionType} questionType={questionType} />
            <QuizzMainQuestion />
            {handleQuizzQuestion[questionType]}
        </Container>
    )
}

export default QuizzGame;