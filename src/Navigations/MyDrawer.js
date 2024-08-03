import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Tabroutes from './Tabroutes';
import NavigationStrings from './NavigationStrings';
import CustomDrawer from './customDrawer';
import {useSelector} from 'react-redux';
import Colors from '../Styles/Colors';
import Withdraw from '../Screens/Withdraw';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Reports from '../Screens/Reports';
import TreeOwn from '../Screens/TreeOwn';
import TransectionPin from '../Screens/TransectionPen';
import WithDrwal from '../Screens/WithDrwal';
import AllMember from '../Screens/AllMember';
import PendingMem from '../Screens/PendingMem';
import PackagesLvl from '../Screens/PackagesLvl';
import SettingCore from '../Screens/SettingCore';
import LevelSetting from '../Screens/LevelSetting';
import DirectLevelPr from '../Screens/DirectLevelPr';
import DailyReturns from '../Screens/DailyReturns';
import UserReward from '../Screens/UserReward';
import PaymentTypes from '../Screens/PaymentTypes';
import Sessions from '../Screens/Sessions';
import CurrencyRates from '../Screens/CurrencyRates';
import Roles from '../Screens/Roles';
import Users from '../Screens/Users';
import MemberKyc from '../Screens/MemberKyc';
import History from '../Screens/History';
import Register from '../Screens/Register';
import DirectTeam from '../Screens/DirectTeam';
import GenReports from '../Screens/GenReports';
import GenPendingMembers from '../Screens/GenPendingMembers';
import FundeTransfers from '../Screens/FundeTransfers';
import SignupPin from '../Screens/SignupPin';
import Rewards from '../Screens/Rewards';
import WithReport from '../Screens/WithReport';
import ActivatedMembers from '../Screens/ActivatedMembers';
import FreezeMembers from '../Screens/FreezeMembers';
import DisableMembers from '../Screens/DisableMembers';
import CreateTicket from '../Screens/CreateTicket';
import TicketHistory from '../Screens/TicketHistory';
import ChangePassword from '../Screens/ChangePassword';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#4169e1',
        drawerStyle: {
          backgroundColor: DarkMode ? '#18314a' : '#223e92',
          width: 260,
          borderColor: DarkMode ? '#18314a' : '#223e92',
          borderWidth: 0.8,
        },
        drawerType: 'slide',
        overlayColor: 'transparent',

        sceneContainerStyle: {
          backgroundColor: DarkMode ? '#18314a' : '#223e92',
          borderColor: DarkMode ? '#18314a' : '#223e92',
          borderWidth: 0.8,
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen options={{}} name={'tabs'} component={Tabroutes} />
      <Drawer.Screen options={{}} name={'Home'} component={Home} />
      <Drawer.Screen options={{}} name={'Profile'} component={Profile} />
      <Drawer.Screen options={{}} name={'Reports'} component={Reports} />
      <Drawer.Screen options={{}} name={'TreeOwn'} component={TreeOwn} />
      <Drawer.Screen options={{}} name={'trasn'} component={TransectionPin} />
      <Drawer.Screen options={{}} name={'WithDr'} component={WithDrwal} />
      <Drawer.Screen options={{}} name={'AllMem'} component={AllMember} />
      <Drawer.Screen options={{}} name={'PendingMem'} component={PendingMem} />
      <Drawer.Screen
        options={{}}
        name={'PackagesLvl'}
        component={PackagesLvl}
      />
      <Drawer.Screen
        options={{}}
        name={'SettingCore'}
        component={SettingCore}
      />
      <Drawer.Screen
        options={{}}
        name={'LevelSetting'}
        component={LevelSetting}
      />
      <Drawer.Screen
        options={{}}
        name={'DirectLevelPr'}
        component={DirectLevelPr}
      />
      <Drawer.Screen
        options={{}}
        name={'DailyReturns'}
        component={DailyReturns}
      />
      <Drawer.Screen options={{}} name={'UserReward'} component={UserReward} />
      <Drawer.Screen
        options={{}}
        name={'PaymentTypes'}
        component={PaymentTypes}
      />
      <Drawer.Screen options={{}} name={'Sessions'} component={Sessions} />
      <Drawer.Screen
        options={{}}
        name={'CurrencyRates'}
        component={CurrencyRates}
      />
      <Drawer.Screen options={{}} name={'Roles'} component={Roles} />
      <Drawer.Screen options={{}} name={'Users'} component={Users} />
      <Drawer.Screen options={{}} name={'MemberKyc'} component={MemberKyc} />
      <Drawer.Screen options={{}} name={'History'} component={History} />
      <Drawer.Screen options={{}} name={'Register'} component={Register} />
      <Drawer.Screen options={{}} name={'DirectTeam'} component={DirectTeam} />
      <Drawer.Screen options={{}} name={'GenReports'} component={GenReports} />
      <Drawer.Screen
        options={{}}
        name={'GenPendingMembers'}
        component={GenPendingMembers}
      />
      <Drawer.Screen
        options={{}}
        name={'FundeTransfers'}
        component={FundeTransfers}
      />
      <Drawer.Screen options={{}} name={'SignupPin'} component={SignupPin} />
      <Drawer.Screen options={{}} name={'Rewards'} component={Rewards} />
      <Drawer.Screen options={{}} name={'WithReport'} component={WithReport} />
      <Drawer.Screen
        options={{}}
        name={'ActivatedMembers'}
        component={ActivatedMembers}
      />
      <Drawer.Screen
        options={{}}
        name={'FreezeMembers'}
        component={FreezeMembers}
      />
      <Drawer.Screen
        options={{}}
        name={'DisableMembers'}
        component={DisableMembers}
      />
      <Drawer.Screen
        options={{}}
        name={'CreateTicket'}
        component={CreateTicket}
      />
      <Drawer.Screen
        options={{}}
        name={'TicketHistory'}
        component={TicketHistory}
      />
      <Drawer.Screen
        options={{}}
        name={'ChangePassword'}
        component={ChangePassword}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
