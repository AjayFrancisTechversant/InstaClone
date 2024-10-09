import React, {useMemo} from 'react';
import {Animated, FlatList, ListRenderItem} from 'react-native';
import {useScreenContext} from '../../Contexts/ScreenContext';
import StoriesComponent from '../../Components/StoriesComponent';
import PostsContainerComponent from '../../Components/PostsContainerComponent';
import styles from './style';

const HomeScreen: React.FC = () => {
  const screenContext = useScreenContext();
  const screenStyles = useMemo(() => styles(
    screenContext.height,
    screenContext.width,
    screenContext.isTypeTablet,
    screenContext,
  ), [screenContext]);

  const renderItem: ListRenderItem<never> = () => null;

  return (
    <FlatList
      style={screenStyles.container}
      ListHeaderComponent={StoriesComponent}
      ListFooterComponent={PostsContainerComponent}
      data={[]}
      renderItem={renderItem}
    />
  );
};

export default HomeScreen;
