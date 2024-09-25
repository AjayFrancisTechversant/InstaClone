import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeScreen from '../Modules/HomeScreen';
import SearchScreen from '../Modules/SearchScreen';
import NewFeedScreen from '../Modules/NewFeedScreen';
import ReelScreen from '../Modules/ReelScreen';
import ProfileScreen from '../Modules/ProfileScreen';
import ColorPalette from '../Preferences/ColorPalette';
import HomeScreenHeaderButtonsComponent from '../Components/HomeScreenHeaderButtonsComponent';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: ColorPalette.black,
        tabBarInactiveTintColor: ColorPalette.gray,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Instagram',
          tabBarIcon: ({color, focused, size}) => (
            <Foundation name="home" color={color} size={size} />
          ),
          headerRight: ({pressColor, pressOpacity, tintColor}) => (
            <HomeScreenHeaderButtonsComponent />
          ),
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <FontAwesome name="search" color={color} size={size} />
          ),
          headerShown: false,
        }}
        name="SearchScreen"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused, size}) => (
            <AntDesign name="plussquareo" color={color} size={size} />
          ),
        }}
        name="NewFeedScreen"
        component={NewFeedScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused, size}) => (
            <Entypo name="video" color={color} size={size} />
          ),
        }}
        name="ReelScreen"
        component={ReelScreen}
      />
      <Tab.Screen
        options={{
          title: 'Profile',
          tabBarIcon: ({color, focused, size}) => (
            <FontAwesome name="user-circle-o" color={color} size={size} />
          ),
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
