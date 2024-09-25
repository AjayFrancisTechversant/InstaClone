import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useScreenContext} from '../../Contexts/ScreenContext';
import {PostType} from '../../Data/DummyPosts';
import styles from './style';
import {Avatar} from 'react-native-paper';
import {AvatarImageSource} from 'react-native-paper/lib/typescript/components/Avatar/AvatarImage';
import {TextStyles} from '../../CommonStyles';
import ColorPalette from '../../Preferences/ColorPalette';

type PostCardComponentPropsType = {
  post: PostType;
};

const PostCardComponent: FC<PostCardComponentPropsType> = ({post}) => {
  const screenContext = useScreenContext();
  const screenStyles = styles(
    screenContext.height,
    screenContext.width,
    screenContext.isTypeTablet,
    screenContext,
  );
  return (
    <View style={screenStyles.card}>
      <View style={screenStyles.header}>
        <View style={screenStyles.headerContainer1}>
          <Avatar.Image source={{uri: post.profileThumbnail}} size={40} />
          <Text style={TextStyles.boldText}>{post.username}</Text>
        </View>
        <TouchableOpacity>
          <Entypo
            name="dots-three-horizontal"
            color={ColorPalette.black}
            size={20}
          />
        </TouchableOpacity>
      </View>
      <Text>Image</Text>
      <View style={screenStyles.buttonsContainer}>
        <View style={screenStyles.buttonsContainer1}>
          <TouchableOpacity>
            <AntDesign name="hearto" color={ColorPalette.black} size={20} />
          </TouchableOpacity>
          <Text style={TextStyles.boldBlackText}>{post.likes.length}</Text>
          <TouchableOpacity>
            <Fontisto name="comment" color={ColorPalette.black} size={20} />
          </TouchableOpacity>
          <Text style={TextStyles.boldBlackText}>{post.comments.length}</Text>
          <TouchableOpacity>
            <Ionicons
              name="paper-plane-outline"
              color={ColorPalette.black}
              size={20}
            />
          </TouchableOpacity>
          <Text style={TextStyles.boldBlackText}>{post.shares}</Text>
        </View>
        <TouchableOpacity>
          <FontAwesome name="bookmark-o" color={ColorPalette.black} size={20} />
        </TouchableOpacity>
      </View>
      <Text>
        Liked by{' '}
        <Text style={TextStyles.boldText}>
          {post.likes[Math.floor(Math.random() * post.likes.length)]}
        </Text>
        {post.likes.length - 1 > 0 && (
          <>
            {' '}
            and{' '}
            <Text style={TextStyles.boldText}>
              {post.likes.length - 1} others
            </Text>
          </>
        )}
      </Text>
      <Text>
        <Text style={TextStyles.boldText}>{post.username}</Text> {post.caption}
      </Text>
    </View>
  );
};

export default PostCardComponent;
