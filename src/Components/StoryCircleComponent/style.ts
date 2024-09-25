import {StyleSheet} from 'react-native';
import {ScreenContextType} from '../../Contexts/ScreenContext';
import ColorPalette from '../../Preferences/ColorPalette';

const styles = (
  height: number,
  width: number,
  isTypeTablet: boolean,
  screenContext: ScreenContextType,
) =>
  StyleSheet.create({
    button: {
      borderRadius: 50,
      marginHorizontal: 8,
      alignItems: 'center',
    },pinkBorder:{
      borderWidth: 2.5,
      borderColor: ColorPalette.pink,
      borderRadius: 50,
    },
    imageStyle: {height: 80, width: 80, borderRadius: 50,borderWidth:2,borderColor:ColorPalette.white,},
    plusButton: {
      backgroundColor: ColorPalette.blue,
      padding: 4,
      borderRadius: 30,
      position: 'absolute',
      bottom: 15,
      right: 5,
      borderWidth: 2,
      borderColor: ColorPalette.white,
    },
  });

export default styles;
