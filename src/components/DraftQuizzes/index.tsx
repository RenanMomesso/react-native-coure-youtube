import Text from '@components/Text';
import { useKeyboard } from '@hooks/useKeyBoard';
import { quizzUseSelector } from '@hooks/useRedux';
import { PlusIcon } from '@theme/globalComponents/icons';
import theme from '@theme/theme';
import React, { useMemo } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { Pressable, Keyboard } from 'react-native';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Quizz, addQuestionToQuizzes, selectQuizz, unselectQuizz } from 'src/store/reducers/quizzReducer';

const DraftQuizzes: React.FC = () => {
    const dispatch = useDispatch()
    const { keyboardVisible } = useKeyboard()
    const { quizz, selectedQuizz } = useSelector(quizzUseSelector)
    const draftQuizz = quizz.draftQuizz || {}
    const alreadyCreatedQuizzes = quizz.quizzes || []
    const allQuizzes = alreadyCreatedQuizzes.concat(draftQuizz)
    const isQuizzSelected: boolean = selectedQuizz?.isQuizzSelected

    const handleSelectQuizz = (quizz: any) => {
        dispatch(selectQuizz({
            ...quizz,
            isQuizzSelected: true
        }))
    }

    const handleSaveQuizzQuestion = async () => {
        dispatch(addQuestionToQuizzes([draftQuizz]))
    }

    if (!allQuizzes?.length || keyboardVisible) return null
    return (
        <View>
            <ScrollView
                horizontal
                contentContainerStyle={{
                    gap: 8,
                }}
                style={{
                    marginRight: 100
                }}
                automaticallyAdjustContentInsets={false}

            >
                {allQuizzes.map((quizz: Quizz, index: number) => {
                    const lastElement = allQuizzes.length - 1;
                    const pressLastElement = index === lastElement;

                    return ( 
                        <Pressable key={index}
                            onPress={pressLastElement ? () => dispatch(unselectQuizz()) : () => handleSelectQuizz(quizz)}
                            style={{
                                borderWidth: 1,
                                opacity: selectedQuizz?.quizzId === quizz?.quizzId ? 1 : draftQuizz?.quizzId === quizz?.quizzId && !isQuizzSelected ? 1 : 0.3,
                                height: 45,
                                width: 75,
                                borderRadius: 4,
                                overflow: 'hidden',
                                borderColor: theme.colors.purpleMain
                            }}>
                            <Text style={{ position: 'absolute', zIndex: 1, left: 0, top: 0, backgroundColor: 'blue', paddingHorizontal: 4, color: "white", borderBottomRightRadius: 8 }}>{index + 1}</Text>
                            {!!quizz?.bgQuizzQuestionImg && <Image source={{ uri: quizz?.bgQuizzQuestionImg }} style={{ height: 55, width: 75 }} />}
                            <Text>{quizz?.questionType}</Text>
                        </Pressable>
                    ) 
                })}
            </ScrollView>
            <TouchableOpacity
                onPress={handleSaveQuizzQuestion}
                style={{
                    height: 45,
                    width: 45,
                    backgroundColor: theme.colors.purpleMain,
                    borderRadius: 12,
                    overflow: 'hidden',
                    position: 'absolute', right: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 40
                }}>
                <PlusIcon name='plusicon' />
            </TouchableOpacity>
        </View>
    )
}

export default DraftQuizzes;