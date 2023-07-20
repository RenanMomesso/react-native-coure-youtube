import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { Row } from '../../globalStyles/globalComponents';
import Text from '../Text';
import theme from '../../globalStyles/theme';
import { useNavigation } from '@react-navigation/native';

export interface HeaderNavigationProps {
    leftIcon?: React.ReactElement | null;
    title?
    : string;
    rightIcon?: React.ReactElement | null;
    onPress?: () => void;
}

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({
    leftIcon = '',
    title,
    rightIcon,
    onPress
}) => {

    const navigation = useNavigation()

    const handleGoBack = () => navigation.goBack();
    return (
        <Row style={{ gap: 8 }}>
            {leftIcon ? leftIcon : <Icon testID='back-button' name="arrow-long-left" size={20} color={theme.colors.normalBlack} onPress={onPress || handleGoBack} />}
            <Text size='medium' style={{ marginLeft: leftIcon ? 8 : 0 }} color='bolder'>{title}</Text>
            {rightIcon && rightIcon}
        </Row>
    );
};

export default HeaderNavigation;
