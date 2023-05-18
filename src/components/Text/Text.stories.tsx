import React from 'react';
import { ComponentStory } from '@storybook/react-native';
import Text, { FontFamily } from './index';

export default {
    title: 'components/Text',
    component: Text,

}

export const Basic: ComponentStory<typeof Text> = args => (
    <Text {...args} />
);

Basic.args = {
    children: 'Hello World',
    fontFamily: FontFamily['Poppins-SemiBold'],
    style: {
        fontSize: 20,
    }
}
