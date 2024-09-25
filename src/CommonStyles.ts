import {StyleSheet} from 'react-native';
import ColorPalette from './Preferences/ColorPalette';

export const TextStyles = StyleSheet.create({
  boldText: {fontWeight: 'bold'},
  boldBlackText: {fontWeight: 'bold', color: ColorPalette.black},
  whiteText: {color: ColorPalette.white},
  underlinedText: {textDecorationLine: 'underline'},
  bigBoldText: {fontWeight: 'bold', fontSize: 20},
  grayText: {color: ColorPalette.gray},
});
export const ViewStyles = StyleSheet.create({
  flexOne: {flex: 1},
  flexShrinkOne: {flexShrink: 1},
  flexDirectionRow: {flexDirection: 'row'},
  alignSelfCenter: {alignSelf: 'center'},
});
