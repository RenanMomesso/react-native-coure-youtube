import AddImage from '@components/AddImage';
import BottomButtons from '@components/BottomButtons';
import TextInput from '@components/TextInputWithIcon';
import { useNavigation } from '@react-navigation/native';
import { Container } from '@theme/globalComponents';
import { quizzMethods } from '@utils/Quizz';
import React, { useState, useEffect } from 'react';
import { ScrollView, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationScreenProp } from 'src/dtos';
import { quizzService } from 'src/services/api/quizz/quizz.service';
import { RootState } from 'src/store';
import { addDraftQuizz, addQuizz, createQuizz } from 'src/store/reducers/quizzReducer';

const CreateQuizz: React.FC = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation<NavigationScreenProp>()
    const { quizz } = useSelector((state: RootState) => state.quizzReducer)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [collection, setCollection] = useState<string | any>('');
    const [quizzType, setQuizzType] = useState<string | any>('');
    const [selectTheme, setSelectTheme] = useState('');
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        if (quizz?.title) setTitle(quizz.title)
        if (quizz?.description) setDescription(quizz.description)
        if (quizz?.collection) setCollection(quizz.collection)
        if (quizz?.quizzType) setQuizzType(quizz.quizzType)
    }, [quizz?.title, quizz.description, quizz.collection, quizz.quizzType, quizz.theme])


    const typeQuizzTexts: Record<string, string> = {
        'versusGame': 'Add Game',
        soloGame: 'Add Game',
        questions: 'Add Question',
    }

    const typeQuizzText = typeQuizzTexts[quizzType?.id] || 'Add Game';

    const createQuizzType = () => {
        if (!quizzType) return Alert.alert('Select a Quizz Type')
        dispatch(createQuizz({
            title,
            description,
            collection,
            quizzType: quizzType?.id,
        }))
        navigation.navigate('SelectQuizz', {
            quizzId: quizzType?.id,
        })
    }

    const saveQuizz = async () => {
        const response = await quizzService.createQuizz(quizz)

    }

    

    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <Container style={{ padding: 20 }}>
                <AddImage />
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
                <TextInput
                    value={quizzType?.name || quizzType}
                    onChangeText={setQuizzType}
                    placeholder='select one'
                    topTitle="Quizz Type"
                    dropDownList={quizzMethods}
                />
            </Container>
            {(!!quizzType?.name) && <BottomButtons
                onPressSave={saveQuizz}
                rightButtonText={typeQuizzText}
                onPressRightButton={createQuizzType}
            />}

        </ScrollView>
    )
}

export default CreateQuizz;