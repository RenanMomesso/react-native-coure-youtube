import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import Signin from '.';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigations/RootNavigation';
import { render } from '../../utils-test/Test-utils';

jest.mock('react-native-vector-icons/AntDesign', () => 'Icon');

describe('Signin', () => {
    const navigationMock: {
        navigate: jest.Mock<any, any>;
    } = {
        navigate: jest.fn(),
    };

    it('renders correctly', () => {
        const { getByText } = render(<Signin navigation={navigationMock} />);
        expect(getByText('Sign in')).toBeTruthy();
        expect(getByText('Continue with Facebook')).toBeTruthy();
        expect(getByText('Continue with Google')).toBeTruthy();
        expect(getByText('Sign in with password')).toBeTruthy();
        expect(getByText("Don't have any account? Sign up")).toBeTruthy();
    });

    it('navigates to SigninPassword screen when "Sign in with password" button is clicked', () => {

        const { getByText } = render(<Signin navigation={navigationMock} />);
        const signInWithPasswordButton = getByText('Sign in with password');
        fireEvent.press(signInWithPasswordButton);
        expect(navigationMock.navigate).toHaveBeenCalledWith('SigninPassword');
    });

    it('navigates to Signup screen when "Sign up" text is clicked', () => {
        const navigationMock = {
            navigate: jest.fn(),
        };
        const { getByText } = render(<Signin navigation={navigationMock} />);
        const signUpText = getByText("Don't have any account? Sign up");
        fireEvent.press(signUpText);
        expect(navigationMock.navigate).toHaveBeenCalledWith('Signup');
    });
});
