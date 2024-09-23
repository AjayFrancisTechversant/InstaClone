import React from 'react';
import {SafeAreaView} from 'react-native';
import { ScreenContextProvider } from './src/Contexts/ScreenContext';
import HomeScreen from './src/Modules/HomeScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex:1}}>
      <HomeScreen/>
    </SafeAreaView>
  );
}

const Main = () => {
  return (
    <ScreenContextProvider>
      <App/>
    </ScreenContextProvider>
  );
};

export default Main;
