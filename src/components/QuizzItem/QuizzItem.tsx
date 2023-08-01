import Text from '@components/Text';
import { useNavigation } from '@react-navigation/native';
import React, { memo } from 'react';
import { View, Image, Dimensions } from 'react-native';
import { NavigationScreenProp } from 'src/dtos';
import { BackgroundImage, ContentWrapper, CreatorAvatar, CreatorName, CreatorWrapper, Pressable, Shadow, Title } from './QuizzItem.styled'
import { avatarImage } from 'src/utils/avatarImage';

interface QuizItemProps {
  backgroundImage: string;
  title: string;
  creatorAvatar: string;
  creatorName: string;
  horizontal?: boolean;
  quizzId?: string;

}

const QuizItem = ({ backgroundImage, title, creatorAvatar, creatorName, horizontal = false, quizzId = '' }: QuizItemProps) => {
  const navigation = useNavigation<NavigationScreenProp>();

  const navigationToQuizz = () => {
    navigation.navigate('QuizzScreen', { quizzId })
  }
  if (backgroundImage === '' || !backgroundImage) return;
  return (
    <>
      <Shadow />
      <Pressable onPress={navigationToQuizz} horizontal={horizontal}>
        <BackgroundImage source={{ uri: backgroundImage }} />
        <ContentWrapper>
          <Title>{title}</Title>
          <CreatorWrapper>
            <CreatorAvatar source={{ uri: avatarImage(creatorAvatar) }} />
            <CreatorName>{creatorName}</CreatorName>
          </CreatorWrapper>
        </ContentWrapper>
      </Pressable>
    </>
  );
};

export default memo(QuizItem);
