import AddImage from '@components/AddImage';
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Container } from '@theme/globalComponents';
import React, { useState, useEffect } from 'react';
import QuestionSettings from '../PointsTimeAndQuizzType';
import QuizzMainQuestion from '../QuizzMainQuestion';
import ButtonWithTextInput from '../ButtonAnswers';
import HeaderNavigation from '@components/HeaderNavigation';
import { CloseIcon, OptionsIcon } from './TrueOrFalseQuizz.styled';
import { NavigationScreenProp } from 'src/dtos';
import PopupMenu, { PopupMenuOptions } from '@components/Popup';
import ButtonAnswers from '../ButtonAnswers';
import { handleGallery } from '@utils/handleGallery';
import { useDispatch, useSelector } from 'react-redux';
import { addDraftQuizz, addQuestionToQuizzes, updateQuizz } from 'src/store/reducers/quizzReducer';
import { quizzUseSelector } from '@hooks/useRedux';
import { debounce, set } from 'lodash';
import TrueOrFalseQuizzOption from './TrueFalseOption';

const TrueOrFalseQuizz = () => {
    const [bgImg, setBgImg] = useState("");
    const dispatch = useDispatch();
    const navigation = useNavigation<NavigationScreenProp>();
    const { quizz, selectedQuizz } = useSelector(quizzUseSelector)
    const draftQuizz = quizz.draftQuizz;
    const gameId = Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1);

    const isQuizzSelected = selectedQuizz.isQuizzSelected;
    const bgQuizzQuestionImg = isQuizzSelected ? selectedQuizz?.bgQuizzQuestionImg : draftQuizz?.bgQuizzQuestionImg ? draftQuizz?.bgQuizzQuestionImg : '';

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
            <QuestionSettings />
            <QuizzMainQuestion />
            <TrueOrFalseQuizzOption />
        </Container>
    )
}

export default TrueOrFalseQuizz;