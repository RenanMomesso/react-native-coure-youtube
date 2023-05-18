import React from 'react';
import { ComponentStory, Meta } from '@storybook/react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Row } from '../../globalStyles/globalComponents';
import Icon from 'react-native-vector-icons/Entypo';
import Text from '../Text';
import HeaderNavigation, { HeaderNavigationProps } from '.';

const Template: ComponentStory<typeof HeaderNavigation> = (args) => (
    <Row style={{ marginHorizontal: 10 }}>
        <HeaderNavigation {...args} />
    </Row>
);
// Define the title and component for the Storybook story
export default {
    title: 'Components/HeaderNavigation',
    component: HeaderNavigation,
} as Meta;

export const Default = Template.bind({});
Default.args = {
    leftIcon: null,
    title: 'Header Title',
    rightIcon: null,
    navigation: {
        goBack: () => { },
    } as StackNavigationProp<any, any>,
    goBack: true,
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
    leftIcon: <Icon name="menu" color="black" />,
    title: 'Header Title',
    rightIcon: null,
    navigation: {
        goBack: () => { },
    } as StackNavigationProp<any, any>,
    goBack: true,
};

export const WithoutGoBack = Template.bind({});
WithoutGoBack.args = {
    leftIcon: <Icon name="menu" color="black" />,
    title: 'Header Title',
    rightIcon: null,
    navigation: {
        goBack: () => { },
    } as StackNavigationProp<any, any>,
    goBack: false,
};
