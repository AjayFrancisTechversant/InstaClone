import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import propic from '../../Assets/Images/propic.jpg';
import {useScreenContext} from '../../Contexts/ScreenContext';
import styles from './style';
import ColorPalette from '../../Preferences/ColorPalette';

type StoryCircleComponentPropstype = {
  myStory?: boolean;
  item?: any;
};

const StoryCircleComponent: FC<StoryCircleComponentPropstype> = ({
  item,
  myStory,
}) => {
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext.height,
    screenContext.width,
    screenContext.isTypeTablet,
    screenContext,
  );

  return (
      <TouchableOpacity style={screenStyles.button}>
        {!myStory ? (
          <>
            <View
              style={screenStyles.pinkBorder}>
              <Image
                source={{uri: item.picture.thumbnail}}
                style={screenStyles.imageStyle}
              />
            </View>
            <Text>{item.name.first}</Text>
          </>
        ) : (
          <>
            <Image source={propic} style={screenStyles.imageStyle} />
            <Text style={{fontWeight:'bold'}}>Your Story</Text>
            <TouchableOpacity style={screenStyles.plusButton}>
              <Entypo name="plus" color={ColorPalette.white} />
            </TouchableOpacity>
          </>
        )}
      </TouchableOpacity>
  );
};

export default StoryCircleComponent;
