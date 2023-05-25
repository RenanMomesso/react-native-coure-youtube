import React from 'react';
import Text from '../../../components/Text';
import { CheckBox, CheckBoxContainer, CheckIcon } from '../Signup.styles';

interface IRememberMeCheckBoxProps {
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;

}

const RememberMeCheckBox: React.FC<IRememberMeCheckBoxProps> = ({ setValue, value }) => {
  return (
    <CheckBoxContainer onPress={() => setValue(!value)}>
      <CheckBox checked={value}>
        {value && <CheckIcon />}
      </CheckBox>
      <Text size='text' color='bolder' style={{ marginLeft: 10 }}>Remember me</Text>
    </CheckBoxContainer>
  )
}

export default RememberMeCheckBox;