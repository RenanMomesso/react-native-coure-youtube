import React from 'react';
import { View, Image, Text } from 'react-native';
import styled from 'styled-components/native';

// Define styles using styled-components
const Container = styled(View)`
  width: 100%;
`;

const BackgroundImage = styled(Image)`
  width: 100%;
  height: 200px;
  resize-mode: cover;
  border: 1px solid black;
`;

const ContentWrapper = styled(View)`
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
`;

const Title = styled(Text)`
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const CreatorWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const CreatorAvatar = styled(Image)`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 5px;
`;

const CreatorName = styled(Text)`
  color: white;
  font-size: 16px;
`;

const QuizItem = ({ backgroundImage, title, creatorAvatar, creatorName }) => {
    console.log("🚀 ~ file: index.tsx:118 ~ QuizItem ~ backgroundImage", backgroundImage)
    return (
        <Container>
            <BackgroundImage source={{ uri: backgroundImage }} />
            <ContentWrapper>
                <Title>{title}</Title>
                <CreatorWrapper>
                    <CreatorAvatar source={creatorAvatar} />
                    <CreatorName>{creatorName}</CreatorName>
                </CreatorWrapper>
            </ContentWrapper>
        </Container>
    );
};

export default QuizItem;
