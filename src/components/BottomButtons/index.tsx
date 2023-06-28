import React from 'react';
import styled from 'styled-components/native';
import { View, TouchableOpacity } from 'react-native';
import Text from '@components/Text';
import { useKeyboard } from '@hooks/useKeyBoard';

const Container = styled(View) <{ keyboardVisible: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding-horizontal: 20px;
  gap: 12px;
  elevation: 1;
  background-color: white;
  border-top-width: 1px;
  border-top-color: #cdc9e089;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: ${({ keyboardVisible }) => (keyboardVisible ? 'none' : 'flex')};
`;

const Button = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-vertical: 12px;
  border-radius: 20px;
`;

const SaveButton = styled(Button)`
  background-color: #cdc9e089;
`;

const AddGameButton = styled(Button)`
  background-color: #7052ff;
`;

interface BottomButtonsProps {
  onPressSave: () => void;
  onPressRightButton?: () => void;
  rightButtonText: string;
}


const BottomButtons = ({ onPressRightButton, onPressSave = () => { }, rightButtonText }: BottomButtonsProps) => {
  const { keyboardVisible } = useKeyboard();
  return (
    <Container keyboardVisible={keyboardVisible}>
      <SaveButton onPress={onPressSave}>
        <Text style={{ color: "#7052ff" }}>Save</Text>
      </SaveButton>
      <AddGameButton onPress={onPressRightButton}>
        <Text color="white">{rightButtonText}</Text>
      </AddGameButton>
    </Container>
  );
};

export default BottomButtons;
