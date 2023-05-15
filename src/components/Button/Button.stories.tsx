import { Button, View } from 'react-native';

export default {
    title: 'Button',
    component: Button,
    decorators: [
        (Story: any) => {
            console.log('Story', Story)
            return (
                <View style={{ margin: 10 }}>
                    <Story />
                </View>
            );
        },
    ],
    parameters: {
        backgrounds: {
            values: [
                { name: 'red', value: '#f00' },
                { name: 'green', value: '#0f0' },
                { name: 'blue', value: '#00f' },
            ],
        },
    },
};