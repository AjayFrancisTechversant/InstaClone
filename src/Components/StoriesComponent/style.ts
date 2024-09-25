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
    container: {
      height: height * 0.15,
      borderBottomWidth: 0.2,
      borderColor: ColorPalette.gray,
      backgroundColor:ColorPalette.white,
    },
    contentContainerStyle:{alignItems: 'center'}
  });

export default styles;
