import React from 'react';

import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FundTransfer from './FundTransfer';
import RecieveHistory from './RecieveHistory';
import SendHistory from './SendHistory';
import WrapperContainer from '../Components/WrapperContainer';
import Colors from '../Styles/Colors';
import {useSelector} from 'react-redux';
import Fonts from '../Styles/Fonts';

const FundeTransfers = () => {
  const TopTab = createMaterialTopTabNavigator();
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  return (
    <WrapperContainer>
      <HeaderDrwrCom text={'Fund Transfers'} />
      <TopTab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontFamily: Fonts.MonstSemiBold},
          tabBarStyle: {
            backgroundColor: DarkMode ? Colors.themecolors1 : Colors.white,
          },
          tabBarActiveTintColor: DarkMode ? Colors.white : Colors.black,
        }}>
        <TopTab.Screen name="Fund Transfer" component={FundTransfer} />
        <TopTab.Screen name="Send History" component={SendHistory} />
        <TopTab.Screen name="Recieve History" component={RecieveHistory} />
      </TopTab.Navigator>
    </WrapperContainer>
  );
};

export default FundeTransfers;
