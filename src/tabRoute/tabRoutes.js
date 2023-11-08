import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import People from './src/screens/People';
import Icon, {IconStyle} from './src/constants/fonts';
import Settings from './src/screens/Settings';
import Profile from './src/screens/Profile';
import * as Animatable from 'react-native-animatable';

const Tab = createBottomTabNavigator();
const tbScreens = [
  {
    name: 'Home',
    component: HomeScreen,
    label: 'Home',
    type: IconStyle.Ionicons,
    activeIcon: 'home-sharp',
    UnActiveIcon: 'home-outline',
  },
  {
    name: 'People',
    component: People,
    label: 'People',
    type: IconStyle.MaterialIcons,
    activeIcon: 'people-alt',
    UnActiveIcon: 'people-outline',
  },
  {
    name: 'Add',
    component: People,
    label: 'Add',
    type: IconStyle.Ionicons,
    activeIcon: 'add-circle',
    UnActiveIcon: 'add-circle-outline',
  },

  {
    name: 'Setting',
    component: Settings,
    label: 'Settings',
    type: IconStyle.Ionicons,
    activeIcon: 'settings-sharp',
    UnActiveIcon: 'settings-outline',
  },
  {
    name: 'Profile',
    component: Profile,
    label: 'Profile',
    type: IconStyle.FontAwesome,
    activeIcon: 'picture-o',
    UnActiveIcon: 'file-picture-o',
  },
];
const TabIcon = props => {
  const {item, accessibilityState, onPress} = props;
  const Focused = accessibilityState.selected;
  const AniView = useRef(null);
  const IconView = useRef(null);
  const textAni = useRef(null);
  useEffect(() => {
    if (Focused) {
      AniView.current.animate({
        0: {scale: 1.5, translateY: 0},
        1: {scale: 2, translateY: -20},
      });
      IconView.current.animate({
        0: {scale: 0},
        0.3: {scale: 0.3},
        0.5: {scale: 0.6},
        1: {scale: 1},
      });
      textAni.current.transitionTo();
    } else {
      AniView.current.animate({
        0: {scale: 2, translateY: -20},
        1: {scale: 1.5, translateY: 0},
      });
      IconView.current.animate({
        0: {scale: 1},
        0.3: {scale: 0.6},
        0.5: {scale: 0.3},
        1: {scale: 1},
      });
    }
  }, [Focused]);
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animatable.View
        ref={AniView}
        duration={1000}
        style={{
          width: 30,
          height: 30,
          borderRadius: 50,
          borderWidth: 2,
          borderColor: 'white',
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animatable.View ref={IconView}>
          <Icon
            type={item.type}
            name={Focused ? item.activeIcon : item.UnActiveIcon}
            color={Focused ? '#F02D03' : '#EE5939'}
          />
        </Animatable.View>
      </Animatable.View>
      <Animatable.Text ref={textAni} duration={1000}>
        {item.label}
      </Animatable.Text>
    </TouchableOpacity>
  );
};
const TabRoute = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Add"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 70,
            position: 'absolute',
            left: 16,
            right: 16,
            bottom: 16,
            borderRadius: 10,
          },
        }}>
        {tbScreens.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.name}
              component={item.component}
              options={{
                tabBarButton: props => {
                  return <TabIcon {...props} item={item} />;
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabRoute;
const styles = StyleSheet.create({});
