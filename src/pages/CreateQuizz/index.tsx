import AddImage from '@components/AddImage';
import BottomButtons from '@components/BottomButtons';
import TextInput from '@components/TextInputWithIcon';
import { useNavigation } from '@react-navigation/native';
import { Container } from '@theme/globalComponents';
import { quizzMethods } from '@utils/Quizz';
import React, { useState } from 'react';
import { ScrollView, Alert } from 'react-native';
import { NavigationScreenProp } from 'src/dtos';

const CreateQuizz: React.FC = () => {

    const navigation = useNavigation<NavigationScreenProp>()
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [collection, setCollection] = useState<string | any>('');
    const [quizzType, setQuizzType] = useState<string | any>('');
    const [selectTheme, setSelectTheme] = useState('');
    const [quizzes, setQuizzes] = useState([]);

    const typeQuizzTexts: Record<string, string> = {
        'versusGame': 'Add Game',
        soloGame: 'Add Game',
        questions: 'Add Question',
    }

    const typeQuizzText = typeQuizzTexts[quizzType?.id] || 'Add Game';

    const createQuizzType = () => {
        if (!quizzType) return Alert.alert('Select a Quizz Type')
        navigation.navigate('SelectQuizz', {
            quizzId: quizzType?.id,
        })
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
                    dropDownList={[{ name: 'collection 1' }, { name: 'collection 2' }]}
                />
                <TextInput
                    value={quizzType?.name || quizzType}
                    onChangeText={setQuizzType}
                    placeholder='select one'
                    topTitle="Quizz Type"
                    dropDownList={quizzMethods}
                />

            </Container>
            <BottomButtons
                onPressSave={() => { }}
                rightButtonText={typeQuizzText}
                onPressRightButton={createQuizzType}
            />
        </ScrollView>
    )
}

export default CreateQuizz;