import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  useColorScheme,
  Text,
} from 'react-native';
import ThemeProvider from './src/providers/ThemeProvider';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ThemeProvider>
      <SafeAreaView>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={'#fff'}
        />

      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
