import React from 'react';
import Text from '../Text';
import { CheckBox, CheckBoxContainer, CheckIcon } from './RememberMeCheckBox.styles';

interface IRememberMeCheckBoxProps {
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;

}

const RememberMeCheckBox: React.FC<IRememberMeCheckBoxProps> = ({ setValue, value, text }) => {
  return (
    <CheckBoxContainer onPress={() => setValue(!value)}>
      <CheckBox checked={value}>
        {value && <CheckIcon />}
      </CheckBox>
      <Text size='text' color='bolder' style={{ marginLeft: 10 }}>{text}</Text>
    </CheckBoxContainer>
  )
}

export default RememberMeCheckBox;