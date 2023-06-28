import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Container = styled(TouchableOpacity)`
  width: 100%;
  margin-horizontal: 20px;
  justify-content: center;
  align-items: center;
  height: 150px;
  border-width: 1px;
  align-self: center;
  border-color: #7052ff;
  border-radius: 8px;
  background-color: #f5f5f5;
`;

const PlusIcon = styled(Icon)`
  margin-bottom: 10px;
`;

const Text = styled.Text`
  font-weight: bold;
  color: #7052ff;
`;

const AddImage = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <PlusIcon name='plus' size={30} color='#7052ff' />
      <Text>Add Cover Image</Text>
    </Container>
  );
};

export default AddImage;
