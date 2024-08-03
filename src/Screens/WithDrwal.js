import React from 'react';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Withdrawal1 from './Withdrawal1';
import Withdrawal2 from './Withdrawal2';
import Withdrawal3 from './Withdrawal3';
import WrapperContainer from '../Components/WrapperContainer';
import {useSelector} from 'react-redux';
import Colors from '../Styles/Colors';
import Fonts from '../Styles/Fonts';

const Tab = createMaterialTopTabNavigator();
const WithDrwal = () => {
  const DarkMode = useSelector(state => state.Darkmode.Theme);

  return (
    <WrapperContainer>
      <HeaderDrwrCom text={'Wiithdrawal'} />
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontFamily: Fonts.MonstSemiBold},
          tabBarStyle: {
            backgroundColor: DarkMode ? Colors.themecolors1 : Colors.white,
          },
          tabBarActiveTintColor: DarkMode ? Colors.white : Colors.black,
        }}>
        <Tab.Screen name="Rental" component={Withdrawal1} />
        <Tab.Screen name="Team Premium" component={Withdrawal2} />
        <Tab.Screen name="Realtors Earning" component={Withdrawal3} />
      </Tab.Navigator>
    </WrapperContainer>
  );
};

export default WithDrwal;
