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
    card: {backgroundColor: ColorPalette.white},
    header: {
      paddingVertical: height * 0.01,
      paddingHorizontal: width * 0.03,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    headerContainer1: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: height * 0.01,
    },
    buttonsContainer: {
      paddingVertical: height * 0.01,
      paddingHorizontal: width * 0.03,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    buttonsContainer1: {flexDirection: 'row', gap: height * 0.01},
  });

export default styles;
