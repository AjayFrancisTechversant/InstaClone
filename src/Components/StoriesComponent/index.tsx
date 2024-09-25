import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useScreenContext} from '../../Contexts/ScreenContext';
import styles from './style';
import {useQuery} from '@tanstack/react-query';
import StoryCircleComponent from '../StoryCircleComponent';

const StoriesComponent = () => {
  const {isPending, error, data} = useQuery({
    queryKey: ['stories'],
    queryFn: () =>
      fetch('https://randomuser.me/api/?results=25').then(res => res.json()),
  });

  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext.height,
    screenContext.width,
    screenContext.isTypeTablet,
    screenContext,
  );
  return (
    <FlatList
      contentContainerStyle={screenStyles.contentContainerStyle}
      style={screenStyles.container}
      data={data?.results}
      ListEmptyComponent={() => <Text>Loading...</Text>}
      horizontal
      ListHeaderComponent={() => <StoryCircleComponent myStory />}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <StoryCircleComponent item={item} />}
    />
  );
};

export default StoriesComponent;
