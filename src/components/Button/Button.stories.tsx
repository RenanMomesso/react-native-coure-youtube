// stories/MyButton.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

import MyButton from '.'
import { Alert } from 'react-native';
import theme from '../../globalStyles/theme';
import { ThemeProvider } from 'styled-components/native';

export default {
    title: 'MyButton',
    component: MyButton,
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme} >
                <Story />
            </ThemeProvider>
        )
    ],
    argTypes: {
        bgColor: {
            options: ['red', 'green', 'blue'],
            control: { type: 'radio' },
        },
        activeOpacity: {
            options: [0.1, 0.5, 1],
            
            control: { type: 'number', min: 400, max: 1200, step: 50 },
        },
        icon: {
            options: [<Icon name="google" color={"white"} />, <Icon name="facebook" color={"white"} />, <Icon name="twitter" color={"white"} />],
            control: { type: 'radio' },
        }

    },
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'red', value: '#f00' },
                { name: 'green', value: '#0f0' },
                { name: 'blue', value: '#00f' },
            ],

        }
    }
} as ComponentMeta<typeof MyButton>;

export const Basic: ComponentStory<typeof MyButton> = args => (
    <MyButton {...args} />
);

Basic.args = {
    text: 'Sign up',
    textColor: theme.colors.white || '#FFF',
    bgColor: theme.colors.black || '#000',
    onClick: () => { Alert.alert("button is working") },
    circle: false,
    icon: <Icon name="google" color={"white"} /> || null,
    activeOpacity: 0.8
};



