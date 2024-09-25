import { View, Text } from 'react-native'
import React from 'react'
import { useScreenContext } from '../../Contexts/ScreenContext';
import styles from './style';

const NewFeedScreen = () => {
    const screenContext = useScreenContext();
    const screenStyles = styles(
       screenContext.height,
      screenContext.width ,
      screenContext.isTypeTablet,
      screenContext,
    ); 
  return (
    <View style={screenStyles.container}>
      <Text>NewFeedScreen</Text>
    </View>
  )
}

export default NewFeedScreen