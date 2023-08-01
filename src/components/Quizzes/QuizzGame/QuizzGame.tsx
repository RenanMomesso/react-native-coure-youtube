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
import { addDraftQuizz, addQuestionToQuizzes, duplicateQuizz, completedQuizz, updateQuizz } from 'src/store/reducers/quizzReducer';
import { quizzUseSelector } from '@hooks/useRedux';
import TrueOrFalseQuizzOption from '../TrueOrFalseQuizz/TrueFalseOption';
import Text from '@components/Text';
import { gameId } from '@utils/index';
import { quizzService } from 'src/services/api/quizz/quizz.service';
import { Alert } from 'react-native';
import { useAddQuizzMutation, useGetQuizzesQuery } from 'src/store/quizzApi';

const QuizzGame = () => {
    const { refetch } = useGetQuizzesQuery({})
    const [questionType, setQuestionType] = useState("");
    const [addQuizz] = useAddQuizzMutation()

    const dispatch = useDispatch();
    const navigation = useNavigation<NavigationScreenProp>();
    const { quizz, selectedQuizz } = useSelector(quizzUseSelector)

    const draftQuizz = quizz.draftQuizz;

    const isQuizzSelected = selectedQuizz.isQuizzSelected;
    const quizzId = isQuizzSelected ? selectedQuizz?.quizzId : draftQuizz?.quizzId;
    const [bgImg, setBgImg] = useState("");
    const bgQuizzQuestionImg = isQuizzSelected ? selectedQuizz?.bgQuizzQuestionImg : draftQuizz?.bgQuizzQuestionImg ? draftQuizz?.bgQuizzQuestionImg : '';
    const selectedQuestionType = isQuizzSelected ? selectedQuizz?.questionType : draftQuizz?.questionType ? draftQuizz?.questionType : 'quizz';
    const quizzToBeDuplicated = isQuizzSelected ? selectedQuizz : draftQuizz;

    useEffect(() => {
        setBgImg(bgQuizzQuestionImg)
        setQuestionType(selectedQuestionType || 'quizz')
    }, [selectedQuestionType, quizzId, bgQuizzQuestionImg])




    useEffect(() => {
        if (!draftQuizz?.quizzId) {
            dispatch(addDraftQuizz({ quizzId: gameId() }));
        }
    }, [dispatch, draftQuizz?.quizzId, gameId(), isQuizzSelected])

    const disabledButton = draftQuizz?.question?.length === 0 || draftQuizz?.question === null || draftQuizz?.question === undefined
    const handleSaveQuizzConfirm = () => {
        refetch()
        navigation.navigate('Home')
        dispatch(completedQuizz())
    }

    const handleSaveQuizz = async () => {
        const response = await addQuizz(quizz)
        console.log("RESPONSE =========>", response)
        if (response) {
            Alert.alert('Quizz saved successfully', 'All quizzes are saved in database, except incompleted quizzes are not saved.', [
                {
                    text: 'Ok',
                    onPress: handleSaveQuizzConfirm
                }
            ])
        }

    }

    const handleQuizzQuestion: Record<string, React.ReactElement> = {
        quizz: <ButtonAnswers />,
        trueFalse: <TrueOrFalseQuizzOption />,
    }

    const handleDuplicateQuizz = () => {
        dispatch(duplicateQuizz({

            ...quizzToBeDuplicated,
            quizzId: gameId()
        }))
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
            onPress: handleDuplicateQuizz,
            disabled: false
        },
        {
            label: 'Save all',
            Icon: 'content-save',
            onPress: handleSaveQuizz,
            disabled: false
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
            <HeaderNavigation
                title='Create Quizzo'
                leftIcon={<CloseIcon name="test" onPress={() => navigation.pop(2)} />}
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