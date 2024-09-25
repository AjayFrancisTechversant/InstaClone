import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useScreenContext} from '../../Contexts/ScreenContext';
import styles from './style';
import {posts} from '../../Data/DummyPosts';
import PostCardComponent from '../PostCardComponent';

const PostsContainerComponent = () => {
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext.height,
    screenContext.width,
    screenContext.isTypeTablet,
    screenContext,
  );
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <PostCardComponent post={item} />}
    />
  );
};

export default PostsContainerComponent;
