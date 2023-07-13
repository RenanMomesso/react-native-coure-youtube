import { quizzUseSelector } from '@hooks/useRedux';
import { useNavigation } from '@react-navigation/native';
import theme from '@theme/theme';
import { quizzQuetionTypes } from '@utils/games';
import React, { FC, ReactElement, useRef, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
  Alert
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addDraftQuizz, updateQuizz } from 'src/store/reducers/quizzReducer';
import styled from 'styled-components/native';

interface Props {
  label: string;
  onSelect: (item: any) => void;
}

const ChangeQuizzType: FC<Props> = ({ label, onSelect }) => {
  const dispatch = useDispatch();
  const { quizz, selectedQuizz } = useSelector(quizzUseSelector)
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);
  const isQuizzSelected = selectedQuizz.isQuizzSelected;

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = (): void => {
    DropdownButton.current?.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };

  const onItemPress = (item: any): void => {
    if (isQuizzSelected) {
      Alert.alert("IS SELECTED PORRA")
      dispatch(updateQuizz({ ...selectedQuizz, questionType: item.id, answers: null }))
    } else {
      dispatch(addDraftQuizz({ questionType: item.id, answers: null }))
    }
    onSelect(item.id);

    setVisible(false);
  };

  const renderItem = ({ item }): ReactElement<any, any> => (
    <DropdownItem onPress={() => onItemPress(item)}>
      <DropdownItemText>{item.name}</DropdownItemText>
    </DropdownItem>
  );

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <DropdownModal visible={visible} transparent animationType="none">
        <DropdownOverlay onPress={() => setVisible(false)}>
          <DropdownContent style={{ top: dropdownTop }}>
            <FlatList
              data={quizzQuetionTypes}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </DropdownContent>
        </DropdownOverlay>
      </DropdownModal>
    );
  };

  return (
    <>
      <DropdownButtonWrapper ref={DropdownButton} onPress={toggleDropdown}>
        {renderDropdown()}
        <ButtonText>
          {label}
        </ButtonText>
        {/* <Icon style={styles.icon} type="font-awesome" name="chevron-down" /> */}
      </DropdownButtonWrapper>
      <ButtonText>
        {JSON.stringify(quizz?.draftQuizz?.questionType)}
        {JSON.stringify(selectedQuizz?.questionType)}
      </ButtonText>
    </>
  );
};

const DropdownButtonWrapper = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  background-color: white;
  height: 35px;
  margin-left: auto;
  width: 120px;
  border-radius: 12px;
  color: ${theme.colors.purpleMain};
  border-width: 1px;
  border-color: ${theme.colors.purpleMain};
`;

const ButtonText = styled.Text`
  flex: 1;
  text-align: center;
`;

const DropdownModal = styled.Modal``;

const DropdownOverlay = styled(TouchableOpacity)`
  width: 100%;
  height: 100%;
`;

const DropdownContent = styled.View`
  position: absolute;
  background-color: #fff;
  width: 35%;
  margin-left: auto;
  align-self: flex-end;
  elevation: 1;
  margin-right: 20px;
  right: 20px;
  border: 1px solid black;
  border-radius: 8px;

  `;

const DropdownItem = styled.TouchableOpacity`
  padding-horizontal: 10px;
  padding-vertical: 10px;
  border-bottom-width: 1px;

`;

const DropdownItemText = styled.Text``;

export default ChangeQuizzType;
