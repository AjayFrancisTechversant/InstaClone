import {FlatList} from 'react-native';
import React from 'react';
import {useScreenContext} from '../../Contexts/ScreenContext';
import StoriesComponent from '../../Components/StoriesComponent';
import PostsContainerComponent from '../../Components/PostsContainerComponent';
import styles from './style';

const HomeScreen = () => {
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext.height,
    screenContext.width,
    screenContext.isTypeTablet,
    screenContext,
  );
  return (
    <FlatList
    style={screenStyles.container}
    ListHeaderComponent={<StoriesComponent/>}
    ListFooterComponent={<PostsContainerComponent/>}
      data={[]}
      renderItem={() => null}
    />
     
  );
};

export default HomeScreen;
