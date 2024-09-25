import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useScreenContext} from '../../Contexts/ScreenContext';
import styles from './style';
import ColorPalette from '../../Preferences/ColorPalette';

const HomeScreenHeaderButtonsComponent = () => {
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext.height,
    screenContext.width,
    screenContext.isTypeTablet,
    screenContext,
  );
  return (
    <View style={screenStyles.container}>
      <TouchableOpacity>
        <AntDesign name="hearto" size={30} color={ColorPalette.black} />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name="message1" size={30} color={ColorPalette.black} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreenHeaderButtonsComponent;
