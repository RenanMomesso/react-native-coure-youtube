import styled from 'styled-components/native';

const Pressable = styled.Pressable<{ horizontal?: boolean }>`
  width: ${({ horizontal }) => (horizontal ? '100%' : '180px')};
  overflow: hidden;
  border-radius: 12px;
  height: 190px;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  margin-bottom: 10px;
  border: 1px solid #97929220;
`;

const BackgroundImage = styled.Image`
  width: 100%;
  height: 55%;
  resize-mode: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const ContentWrapper = styled.View`
  padding: 10px;
  background-color: white;
  width: 100%;
  height: 45%;
`;

const Title = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const CreatorWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CreatorAvatar = styled.Image`
  width: 20px;
  height: 20px;
  border-radius: 15px;
  margin-right: 5px;
`;

const CreatorName = styled.Text`
  color: gray;
  font-size: 11px;
`;

const Shadow = styled.View`
  position: absolute;
  width: 178px;
  height: 170px;
  background-color: lightgray;
  opacity: 0.5;
  border-radius: 12px;
  z-index: -1;
  margin-bottom: 0px;
  margin-right: 10px;
  left: 0;
  bottom: 5;
  right: 0;
`;

export {
  Pressable,
  BackgroundImage,
  ContentWrapper,
  Title,
  CreatorWrapper,
  CreatorAvatar,
  CreatorName,
  Shadow,
};
