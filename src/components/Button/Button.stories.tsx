// stories/MyButton.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

import MyButton from '.'
import { Alert } from 'react-native';
import { View } from 'react-native';

export default {
    title: 'components/MyButton',
    component: MyButton,
    decorators: [
        (Story) => (
            <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                <Story />
            </View>
        )
    ],
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
    text: 'Hello World',
    textColor: 'purple',
    bgColor: 'red',
    onClick: () => { Alert.alert("button is working") },
    circle: true,
    icon: <Icon name="google" /> || null,

};

