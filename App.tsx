import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  useColorScheme,
  Text,
} from 'react-native';
import ThemeProvider from './src/providers/ThemeProvider';
import Button from './src/components/Button';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={'#fff'}
        />

        <View style={{ flex: 1, marginHorizontal: 20, marginTop: 8, backgroundColor: 'red' }}>

          <Button text='Login with Facebook' bgColor='blue' />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
