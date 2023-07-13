import React, { useRef, useEffect } from "react";
import { TextInput, View, Text, Pressable, Alert } from "react-native";
import styled from "styled-components/native";

interface Button3DProps {
  bgColor?: string;
  bgShadowColor?: string;
  textInput?: boolean;
  text?: string;
  onPress?: () => void;
  onChangeText?: (text: string) => void;
  value?: string;
  placeholder?: string;
  fullwidth?: boolean;
  rest?: any;
  fullHeight?: boolean;
}

const Button3D: React.FC<Button3DProps> = ({
  bgColor = "#3779ff",
  bgShadowColor = "#295ecd",
  textInput = false,
  text = "Answer",
  onPress = () => { },
  onChangeText = () => { },
  value = "",
  placeholder = "Answer",
  fullwidth = false,
  fullHeight = false,
  ...rest
}) => {
  const textInputRef = useRef<TextInput>(null);

  const onPressButton = () => {
    if (textInput) {
      textInputRef.current?.focus();
    } else {
      onPress();
    }
  };


  return (
    <Container fullwidth={fullwidth} fullHeight={fullHeight} {...rest}>
      <CustomPressable onPress={onPressButton} bgColor={bgColor}>
        {textInput ? (
          <CustomTextInput
            autoFocus
            showSoftInputOnFocus={false}
            selectTextOnFocus={true}
            ref={textInputRef}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="white"
          />
        ) : (
          <ButtonText>{text}</ButtonText>)}
      </CustomPressable>
      <ShadowView bgShadowColor={bgShadowColor} />
    </Container>
  );
};

const Container = styled(View) <{ fullwidth: boolean; fullHeight?: boolean }>`
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  height: ${({ fullHeight }) => (fullHeight ? "100%" : "85px")};
  max-height: ${({ fullHeight }) => (fullHeight ? "100%" : "85px")};
  elevation: 4;
  ${({ fullwidth }) => (fullwidth ? "width: 48.5%;" : "flex: 1;")}
`;

const CustomPressable = styled(Pressable) <{ bgColor: string }>`
  width: 100%;
  height: 100%;
  background-color: ${({ bgColor }) => bgColor};
  position: absolute;
  bottom: 0;
  z-index: 1;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

const CustomTextInput = styled(TextInput)`
  font-size: 20px;
  color: white;
`;

const ButtonText = styled(Text)`
  font-size: 20px;
  color: white;
`;

const ShadowView = styled(View) <{ bgShadowColor: string }>`
  width: 98%;
  height: 100%;
  background-color: ${({ bgShadowColor }) => bgShadowColor};
  position: absolute;
  bottom: -5px;
  z-index: 0;
  border-radius: 12px;
`;

export default Button3D;