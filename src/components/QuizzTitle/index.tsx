import Text from '@components/Text';
import React from 'react';
import { Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { addDraftQuizz } from 'src/store/reducers/quizzReducer';
import { styled } from 'styled-components/native';

interface QuizzTitleProps {
    quizzTitle: string;
    onPress: () => void;
    quizzId: string;
}

const PressableContainer = styled(Pressable)`
    background-color: #ebe3e383;
    height: 100px;
    width: 45%;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border-width: 1px;
    border-color: lightgray;

`
const QuizzTitle = ({ quizzId, quizzTitle, onPress }: QuizzTitleProps) => {
    const dispatch = useDispatch();
    const quizzReducer = useSelector((state: RootState) => state.quizzReducer);


    const onPressQuizz = () => {
        if (quizzReducer?.draftQuizz?.quizzId) {
            onPress()
            return
        } else {
            dispatch(addDraftQuizz({
                quizzType: quizzId
            }))
            onPress()

        }

    }

    return (
        <PressableContainer onPress={onPressQuizz} android_ripple={{
            color: 'red',
            borderless: false,
            radius: 100

        }}>
            <Text color='bolder'>{quizzTitle}</Text>
        </PressableContainer>
    )
}

export default QuizzTitle;