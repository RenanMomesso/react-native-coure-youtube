import Button3D from '@components/Button3D';
import CustomModal from '@components/CustomModal';
import Text from '@components/Text';
import { quizzUseSelector } from '@hooks/useRedux';
import { Row } from '@theme/globalComponents';
import { buttonAnswersProps, buttonsAnswers, nullSelectedAnswer } from '@utils/Quizz';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, Text as RNText } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { addDraftQuizz, addQuizz, updateQuizz } from 'src/store/reducers/quizzReducer';

const ButtonAnswers = () => {
    const { quizz, selectedQuizz } = useSelector(quizzUseSelector)
    const { draftQuizz } = quizz;
    const isQuizzSelected = selectedQuizz.isQuizzSelected;
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);
    const [answers, setAnswers] = useState<buttonAnswersProps[]>(buttonsAnswers)
    const [selectedButtonAnswer, setSelectedButtonAnswer] = useState<buttonAnswersProps>(nullSelectedAnswer);

    useEffect(() => {
        let previousAnswers = buttonsAnswers
        if (isQuizzSelected) previousAnswers = !!selectedQuizz.answers ? selectedQuizz.answers : buttonsAnswers;
        else if (!isQuizzSelected && !!draftQuizz.answers) previousAnswers = draftQuizz.answers
        setAnswers(previousAnswers)
    }, [isQuizzSelected, selectedQuizz?.quizzId, draftQuizz?.quizzId, draftQuizz.answers, selectedQuizz.answers]);

    const openModal = (selectedAnswer: buttonAnswersProps) => {
        setSelectedButtonAnswer(({ ...selectedAnswer }))
        setModalVisible(true);
    };

    const closeModal = () => {
        const answersCopy: buttonAnswersProps[] = [...answers];
        const findCorrectAnswer: buttonAnswersProps | undefined = answersCopy.find((answer: buttonAnswersProps) => answer.isTheRightAnswer === true);
        if (findCorrectAnswer && !!selectedButtonAnswer.isTheRightAnswer && findCorrectAnswer.buttonKey !== selectedButtonAnswer.buttonKey) {
            findCorrectAnswer.isTheRightAnswer = false;
        }
        answersCopy[selectedButtonAnswer.buttonKey] = selectedButtonAnswer;
        const answersVariables = answersCopy.map(answer => ({
            answerKey: answer.buttonKey,
            answerText: answer.answer,
            answerCorrect: answer.isTheRightAnswer,
            answerPosition: answer.buttonKey,
            ...answer
        }))

        setAnswers(answersCopy);
        if (selectedButtonAnswer.answer === "".trim()) {
            Alert.alert("Please add an answer", "You can't add an empty answer")
            return
        }
        if (isQuizzSelected) {
            dispatch(updateQuizz({ answers: answersVariables }))

        } else {
            dispatch(addDraftQuizz({ answers: answersVariables }))

        }
        setModalVisible(false);
        setSelectedButtonAnswer(nullSelectedAnswer);
    };


    return (
        <>
            <CustomModal onClose={closeModal} visible={modalVisible}>
                <Text color='black' style={{ textAlign: 'center', fontSize: 16 }}>Add Answer</Text>
                <View style={{ paddingVertical: 10, marginVertical: 15, borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'lightgray' }}>
                    <Button3D
                        textInput
                        value={selectedButtonAnswer.answer}
                        onChangeText={(e) => setSelectedButtonAnswer({
                            ...selectedButtonAnswer,
                            answer: e,
                        })}
                    />
                </View>
                <Row>
                    <Text style={{ fontSize: 14 }}>Correct answer</Text>
                    <Switch thumbColor="white" trackColor={{
                        false: "gray",
                        true: "green",
                    }} value={selectedButtonAnswer.isTheRightAnswer} onValueChange={e => {
                        setSelectedButtonAnswer({
                            ...selectedButtonAnswer,
                            isTheRightAnswer: e
                        })
                    }} />
                </Row>
            </CustomModal>
            <View style={styles.container}>
                <View style={styles.row}>
                    {answers?.map((answer: buttonAnswersProps) => {
                        return (
                            <Button3D
                                fullwidth
                                onPress={() => openModal(answer)}
                                key={answer.buttonKey}
                                bgColor={answer.buttonColor}
                                text={answer.answer}
                                bgShadowColor={answer.shadowColor}
                            />
                        )
                    })}
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    row: {
        flexDirection: 'row',
        gap: 10,
        flexWrap: 'wrap',
        width: '100%',

    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        height: 80,
        maxHeight: 80,
        elevation: 4
    },
    input: {
        width: '100%',
        borderColor: 'gray',
        padding: 5,
        textAlign: 'center',
        color: "white"
    },
});

export default ButtonAnswers;
