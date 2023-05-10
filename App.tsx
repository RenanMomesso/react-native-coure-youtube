import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  useColorScheme,
  Text,
} from 'react-native';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'#fff'}
      />
      <View>
        <Text>Sneding changes testingbranch to Stagging</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
