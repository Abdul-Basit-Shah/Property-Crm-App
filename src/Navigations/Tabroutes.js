import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigationStrings from './NavigationStrings';
import Dashboard from '../Screens/Dashboard';
import Mywallet from '../Screens/Mywallet';
import Withdraw from '../Screens/Withdraw';
import Icons from '../themes/Icons';
import Colors from '../Styles/Colors';
import {useSelector} from 'react-redux';
import DrawerSceneAnimated from './DrawerSceneAnimated';
import Fonts from '../Styles/Fonts';

const Tab = createBottomTabNavigator();
const Tabroutes = () => {
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  return (
    <DrawerSceneAnimated>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontFamily: Fonts.ComfortaBold},
          headerShown: false,
          tabBarStyle: {
            backgroundColor: DarkMode ? Colors.themecolors1 : Colors.white,
            borderTopWidth: 0,
          },
        }}>
        <Tab.Screen
          name={NavigationStrings.DASHBOARD}
          component={Dashboard}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icons.Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={NavigationStrings.MY_WALLET}
          component={Mywallet}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icons.Ionicons name="wallet" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={NavigationStrings.WITHDRAW}
          component={Withdraw}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icons.FontAwesome5
                name="money-check-alt"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </DrawerSceneAnimated>
  );
};

export default Tabroutes;

const styles = StyleSheet.create({});
