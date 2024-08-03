import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import BasicInf from '../Screens/BasicInf';
import MoreInfo from '../Screens/MoreInfo';
import NavigationStrings from './NavigationStrings';

const Stack = createNativeStackNavigator();
const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NavigationStrings.LOGIN}>
      <Stack.Screen name={NavigationStrings.LOGIN} component={Login} />
      <Stack.Screen
        name={NavigationStrings.BASIC_INFORMATION}
        component={BasicInf}
      />
      <Stack.Screen
        name={NavigationStrings.MORE_INFORMATION}
        component={MoreInfo}
      />
    </Stack.Navigator>
  );
};

export default Auth;
