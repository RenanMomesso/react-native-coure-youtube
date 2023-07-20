import AddImage from '@components/AddImage';
import BottomButtons from '@components/BottomButtons';
import TextInput from '@components/TextInputWithIcon';
import { useKeyboard } from '@hooks/useKeyBoard';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Container } from '@theme/globalComponents';
import { quizzMethods } from '@utils/Quizz';
import { handleGallery } from '@utils/handleGallery';
import { gameId } from '@utils/index';
import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, Alert, Keyboard, KeyboardAvoidingView } from 'react-native';
import { Asset } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationScreenProp } from 'src/dtos';
import { quizzService } from 'src/services/api/quizz/quizz.service';
import { RootState } from 'src/store';
import { addDraftQuizz, addQuizz, createQuizz } from 'src/store/reducers/quizzReducer';

const CreateQuizz: React.FC = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation<NavigationScreenProp>()
    const { quizz } = useSelector((state: RootState) => state.quizzReducer)
    const reducerQuizz = useSelector((state: RootState) => state.quizzReducer)
    const { keyboardVisible } = useKeyboard()
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [collection, setCollection] = useState<string | any>('');
    const [quizzType, setQuizzType] = useState<string | any>('');
    const [selectTheme, setSelectTheme] = useState('');
    const [createbgQuizzQuestionImg, setCreatebgQuizzQuestionImg] = useState('');



    useFocusEffect(useCallback(() => {
        if (quizz?.title) setTitle(quizz.title || '')
        if (quizz?.description) setDescription(quizz.description)
        if (quizz?.collection) setCollection(quizz.collection)
        if (quizz?.quizzType) setQuizzType(quizz.quizzType || 'Questions')
        if (quizz?.bgQuizzQuestionImg) setSelectTheme(quizz.bgQuizzQuestionImg)
        return () => {
            if (quizz?.title || quizz?.description || quizz?.collection || quizz?.quizzType || quizz?.bgQuizzQuestionImg) return;
            setTitle('')
            setDescription('')
            setCollection('')
            setQuizzType('')
        }
    }, [quizz?.title, quizz.description, quizz.collection, quizz.quizzType, quizz.theme, quizz.bgQuizzQuestionImg]))

    const createQuizzType = () => {
        dispatch(createQuizz({
            title,
            description,
            collection,
            quizzType: 'questions',
            bgQuizzQuestionImg: createbgQuizzQuestionImg

        }))
        navigation.navigate('SelectQuizz', {
            quizzId: 'questions',
        })
    }

    const saveQuizz = async () => {
        const response = await quizzService.createQuizz(quizz)
    }

    const handleAddImage = async () => {
        const response: Asset = await handleGallery()
        console.log({ response })
        if (response) {
            setCreatebgQuizzQuestionImg(response?.uri)
            dispatch(createQuizz({ bgQuizzQuestionImg: response?.uri }))
        }
    }

    const removeBgImg = () => {
        setCreatebgQuizzQuestionImg('')
        dispatch(createQuizz({
            bgQuizzQuestionImg: ''
        }))
    }



    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <Container style={{ padding: 20, marginTop: keyboardVisible ? -50 : 0 }}>
                <AddImage
                    removeImg={removeBgImg}
                    imgUrl={createbgQuizzQuestionImg}
                    onClick={handleAddImage}
                    style={{ marginTop: 20 }} />
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    placeholder='Quizz Title'
                    topTitle="Title"
                    maxLength={35}
                />
                <TextInput
                    value={description}
                    onChangeText={setDescription}
                    placeholder='Quizz Description'
                    topTitle="Description"
                    maxLength={300}
                    multiline
                    clearButtonMode='always'
                />
                <TextInput
                    value={collection?.name || collection}
                    onChangeText={setCollection}
                    placeholder='Collection'
                    topTitle="Collection"
                    dropDownList={[{ id: '1', name: 'collection 1' }, { id: '1', name: 'collection 2' }]}
                />
            </Container>
            {
                !keyboardVisible && <BottomButtons
                    onPressSave={saveQuizz}
                    rightButtonText={'Add Quizz Question'}
                    onPressRightButton={createQuizzType}
                />
            }

        </ScrollView >
    )
}

export default CreateQuizz;