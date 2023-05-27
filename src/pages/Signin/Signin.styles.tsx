import styled from 'styled-components/native'
import { signinImage, signupImage } from '../../constants/imagesLink';

export const ContainerImage = styled.View`
  border-radius: 100px;
  overflow: hidden;
  height: 200px;
  align-self: center;
  width: 250px;
  justify-content: center;
  align-items: center;
  margin-vertical: 20px;
`;

export const ImageStyled = styled.Image.attrs({
  source: { uri: signupImage },
})`
  width: 100%;
  height: 100%;
  /* border-radius: 100px; */
  resize-mode: contain;
`;

export const ContainerBackground = styled.ImageBackground.attrs({
  source: { uri: signupImage },
})`
  flex: 1;
  width: 100%;
  height: 100%;
`;
