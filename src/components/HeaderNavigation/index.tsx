import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { Row } from '../../globalStyles/globalComponents';
import Text from '../Text';

export interface HeaderNavigationProps {
    leftIcon?: React.ReactElement | null;
    title?
    : string;
    rightIcon?: React.ReactElement | null;
    navigation: any
}

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({
    leftIcon = '',
    title,
    rightIcon,
    navigation,
}) => {

    const handleGoBack = () => navigation.goBack();
    return (
        <Row style={{ gap: 8 }}>
            {leftIcon ? leftIcon : <Icon testID='back-button' name="arrow-long-left" size={20} color="black" onPress={handleGoBack} />}
            <Text size='heading' style={{ marginLeft: leftIcon ? 8 : 0 }} color='black'>{title}</Text>
            {rightIcon && rightIcon}
        </Row>
    );
};

export default HeaderNavigation;
