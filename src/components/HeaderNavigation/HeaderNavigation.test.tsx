import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import HeaderNavigation, { HeaderNavigationProps } from '.';
import Icon from 'react-native-vector-icons/Entypo';

jest.mock('react-native-vector-icons/Entypo', () => 'Icon');


describe('HeaderNavigation', () => {
    const createTestProps = (props: Partial<HeaderNavigationProps> = {}) => ({
        title: 'Test Title',
        navigation: {
            goBack: jest.fn(),
        } as unknown as StackNavigationProp<any, any>,
        ...props,
    });

    it('should render correctly', () => {
        const props = createTestProps({});
        const { getByText } = render(<HeaderNavigation {...props} />);
        expect(getByText('Test Title')).toBeDefined();
    });

    it('should call navigation.goBack when doesnt have left icon', () => {
        const props = createTestProps();
        const { getByTestId } = render(<HeaderNavigation {...props} />);
        fireEvent.press(getByTestId('back-button'));
        expect(props.navigation.goBack).toHaveBeenCalled();
    });

    it('should not call navigation.goBack when having left icon', () => {
        const props = createTestProps({
            leftIcon: <Icon name="arrow-long-left" size={20} color="black" testID='left-icon' />,
        });
        const { getByTestId } = render(<HeaderNavigation {...props} />);
        fireEvent.press(getByTestId('left-icon'));
        expect(props.navigation.goBack).not.toHaveBeenCalled();
    });
});
