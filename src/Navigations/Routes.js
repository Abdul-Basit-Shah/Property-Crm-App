import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './Auth';
import MyDrawer from './MyDrawer';
import NavigationStrings from './NavigationStrings';

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={NavigationStrings.AUTH} component={Auth} />
        <Stack.Screen name={NavigationStrings.MY_DRAWER} component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
