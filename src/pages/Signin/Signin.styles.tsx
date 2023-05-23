import styled from 'styled-components/native'
import { signinImage } from '../../constants/imagesLink';

export const ContainerImage = styled.View`
  border-radius: 100px;
  overflow: hidden;
  height: 250px;
  align-self: center;
  width: 250px;
  justify-content: center;
  align-items: center;
  margin-vertical: 20px;
`;

export const ImageStyled = styled.Image.attrs({
    source: { uri: signinImage },
})`
  width: 100%;
  height: 100%;
  border-radius: 100px;
  resize-mode: contain;
`;
