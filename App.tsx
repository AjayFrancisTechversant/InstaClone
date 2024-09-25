import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import TabStack from './src/Navigation/TabStack';
import {ScreenContextProvider} from './src/Contexts/ScreenContext';
import ColorPalette from './src/Preferences/ColorPalette';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        animated={true}
        backgroundColor={ColorPalette.white}
        barStyle={'dark-content'}
      />
      <TabStack />
    </SafeAreaView>
  );
}

const Main = () => {
  return (
    <ScreenContextProvider>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </NavigationContainer>
    </ScreenContextProvider>
  );
};

export default Main;
