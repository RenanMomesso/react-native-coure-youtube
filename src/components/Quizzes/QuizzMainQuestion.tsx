import React, { useState, useEffect } from 'react';
import { Pressable, TextInput, StyleSheet, Text, Alert, Keyboard, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { addDraftQuizz, updateQuizz } from 'src/store/reducers/quizzReducer';
import { debounce } from 'lodash';
import { quizzUseSelector } from '@hooks/useRedux';
import { TouchableWithoutFeedback } from 'react-native';
import CustomModal from '@components/CustomModal';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    borderColor: '#7052ff',
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    marginTop: 20,
    width: '100%',
    elevation: 1,
  },
  input: {
    fontWeight: 'bold',
    padding: 8,
    width: 150,
    alignSelf: 'center',
    textAlign: 'center',
  },
});


const QuizzMainQuestion: React.FC = () => {
  const textRef = React.useRef<TextInput>(null)
  const [questionDraft, setQuestionDraft] = useState("")
  const [openModal, setOpenModal] = useState(false)
  const dispatch = useDispatch()
  const { quizz, selectedQuizz } = useSelector(quizzUseSelector)

  const isQuizzSelected: boolean = selectedQuizz.isQuizzSelected

  useEffect(() => {
    let question = ''
    if (isQuizzSelected) {
      question = selectedQuizz?.question
    } else if (!isQuizzSelected && !!quizz.draftQuizz.question) {
      question = quizz.draftQuizz.question
    }
    setQuestionDraft(question)
  }, [isQuizzSelected, quizz.draftQuizz.question, selectedQuizz?.question]);

  const closeModal = () => {
    if (isQuizzSelected) {
      dispatch(updateQuizz({ question: questionDraft }))
    } else if (!isQuizzSelected && !!questionDraft) {
      dispatch(addDraftQuizz({ question: questionDraft }))
    }
    setOpenModal(false)
  }



  return (
    <>
      <CustomModal onClose={closeModal} visible={openModal}>
        <Text style={{ textAlign: 'center', fontSize: 16 }}>Add Answer</Text>
        <View style={{ paddingVertical: 10, marginVertical: 15, borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'lightgray' }}>
          <TextInput
            autoFocus
            showSoftInputOnFocus={false}
            selectTextOnFocus={true}
            ref={textRef}
            value={questionDraft}
            onChangeText={(e) => setQuestionDraft(e)}
            placeholder="Question"
            style={styles.input}
            multiline
            numberOfLines={4}
            maxLength={200}
          />
        </View>

      </CustomModal>

      <Pressable onPress={() => setOpenModal(true)} style={styles.container}>
        <Text>{!!questionDraft ? questionDraft : 'Tap to add question'}</Text>
      </Pressable>
    </>
  );
};

export default QuizzMainQuestion;
