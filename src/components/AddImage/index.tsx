import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { Image, ImageBackground, TouchableOpacity } from 'react-native';
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
  border-radius: 12px;
  background-color: #f5f5f5;
`;

const PlusIcon = styled(Icon)`
  margin-bottom: 10px;
`;

const Text = styled.Text`
  font-weight: bold;
  color: #7052ff;
`;

const EditIcon = styled(Icon)`
  margin-bottom: 10px;
`;

interface AddImageProps {
  onClick?: () => void;
  [rest: string]: any;
  imgUrl?: string | null;
  removeImg?: () => void;
}

const AddImage = ({ onClick, removeImg, imgUrl, ...rest }: AddImageProps) => {

  const onPressImageContainer = () => {
    if (!!imgUrl) {
      removeImg && removeImg()
    } else {
      onClick && onClick()
    }
  }

 
  return (
    <Container onPress={onPressImageContainer} {...rest}>
      {!!imgUrl ?
        <>
          <EditIcon onPress={removeImg} name='remove' size={20} color='red' style={{
            position: 'absolute',
            top: 5,
            right: 35,
            zIndex: 1,
            backgroundColor: "white",
            padding: 4,
            borderRadius: 3
          }} />
          <EditIcon onPress={onClick} name='edit' size={20} color='black' style={{
            position: 'absolute',
            top: 5,
            right: 5,
            zIndex: 1,
            backgroundColor: "white",
            padding: 4,
            borderRadius: 3
          }} />
          <Image source={{ uri: imgUrl }} style={{ width: '100%', height: '100%', borderRadius: 12, resizeMode: 'cover' }} />
        </>
        :
        <>
          <PlusIcon name='plus' size={30} color='#7052ff' />
          <Text>Add Cover Image</Text>
        </>
      }
    </Container>
  );
};

export default AddImage;
