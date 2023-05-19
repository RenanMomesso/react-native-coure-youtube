import React from 'react';
import { ComponentStory } from '@storybook/react-native';
import Text, { FontFamily, IColors } from '.';

export default {
    title: 'components/Text',
    component: Text,
    argTypes: {
        color: {
            options: ['black', 'white', 'disabled'],
            control: { type: 'radio' },
        },
        size: {
            options: ['heading', 'text', 'button'],
            control: { type: 'radio' },
        }
    },

}

export const Basic: ComponentStory<typeof Text> = args => (
    <Text {...args} />
);

Basic.args = {
    children: 'Hello World',
    fontFamily: FontFamily['Poppins-SemiBold'],
    color: "black",
    size: "heading",
    
}
