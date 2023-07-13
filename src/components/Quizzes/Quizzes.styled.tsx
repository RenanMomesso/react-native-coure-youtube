import { styled } from "styled-components/native";

const Container = styled.View`
  width: 60%;
`;

const Title = styled.Text`
  font-size: 16px;
  padding-vertical: 10px;
  text-align: center;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-color: lightgray;
  padding-vertical: 10px;
  margin-vertical: 10px;
  gap: 8px;
`;

const Button = styled.TouchableOpacity<{ type: string; isSelected: boolean }>`
  width: 48%;
  background-color: ${({ type, isSelected }) =>
        type === 'time' ? (isSelected ? '#7052ff' : '#f5f5f5') : isSelected ? '#7052ff' : '#f5f5f5'};
  border-radius: 12px;
  padding-horizontal: 12px;
  padding-vertical: 8px;
  justify-content: center;
  align-items: center;
  max-height: 40px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: ${({ type, isSelected }) => (type === 'time' ? (isSelected ? 'white' : 'black') : isSelected ? 'white' : 'black')};
`;

const NoButton = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: #f5f5f5;
  border-radius: 12px;
`;

const OkButton = styled.TouchableOpacity`
  background-color: #7052ff;
  border-radius: 12px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

const OkButtonText = styled.Text`
  text-align: center;
  padding-vertical: 10px;
  color: white;
`;

export { Container, Title, ButtonContainer, Button, ButtonText, NoButton, OkButton, OkButtonText };