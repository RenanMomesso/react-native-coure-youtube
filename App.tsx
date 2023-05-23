import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    useColorScheme,
} from 'react-native';
import ThemeProvider from './src/providers/ThemeProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import RootNavigation from './src/navigations/RootNavigation';
import StorybbokUI from './.storybook'

const IS_STORYBOOK = false
const App: React.FC = () => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ThemeProvider>
                <SafeAreaView style={{ flex: 1 }}>
                    <StatusBar
                        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                        backgroundColor={'#fff'}
                    />
                    <RootNavigation />
                </SafeAreaView>
            </ThemeProvider>
        </GestureHandlerRootView>
    );
};

export default IS_STORYBOOK ? StorybbokUI : App;


