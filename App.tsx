import React, { useEffect } from 'react';
import {
    SafeAreaView,
    StatusBar,
    useColorScheme,
} from 'react-native';
import ThemeProvider from './src/providers/ThemeProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import RootNavigation from './src/navigations/RootNavigation';
import StorybbokUI from './.storybook'
import { Provider } from 'react-redux';
import { store, persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './src/components/Loading';
import ApolloProviderWrapper from './src/providers/ApolloProvider';
import { BottomSheetProvider } from 'src/providers/BottomSheetProvider';
import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { quizzApi } from 'src/store/quizzApi';
import DiscoverScreen from '@pages/DiscoverScreen';
import { socketService } from 'src/services/socket/socketConnection';

const IS_STORYBOOK = false
const App: React.FC = () => {
    const isDarkMode = useColorScheme() === 'dark';

    useEffect(() => {
        socketService.setupSocketConnection();
    }, [])

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ThemeProvider>
                <Provider store={store}>
                    <PersistGate loading={<Loading />} persistor={persistor}>
                        <BottomSheetProvider>
                            <SafeAreaView style={{ flex: 1 }} >
                                <StatusBar
                                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                                    backgroundColor={'#fff'}
                                />
                                <RootNavigation />
                            </SafeAreaView>
                        </BottomSheetProvider>
                    </PersistGate>
                </Provider>
            </ThemeProvider>
        </GestureHandlerRootView>
    );
};

export default IS_STORYBOOK ? StorybbokUI : App;


