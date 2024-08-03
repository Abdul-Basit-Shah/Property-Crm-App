import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import LeftOwn from './LeftOwn';
import RightOwn from './RightOwn';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import WrapperContainer from '../Components/WrapperContainer';
import Colors from '../Styles/Colors';
import Fonts from '../Styles/Fonts';

const Tab = createMaterialTopTabNavigator();

function Home() {
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  const Donavigation = useNavigation();
  return (
    <WrapperContainer>
      <HeaderDrwrCom text={'Details'} />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: DarkMode ? Colors.themecolors1 : Colors.white,
          },
          tabBarActiveTintColor: DarkMode ? Colors.white : Colors.black,
        }}>
        <Tab.Screen
          name="left"
          component={LeftOwn}
          options={{
            tabBarLabel: 'Last Paid Entries',
            tabBarLabelStyle: {fontFamily: Fonts.MonstSemiBold},
          }}
        />
        <Tab.Screen
          name="right"
          component={RightOwn}
          options={{
            tabBarLabel: 'Last UnPaid Entries',
            tabBarLabelStyle: {fontFamily: Fonts.MonstSemiBold},
          }}
        />
      </Tab.Navigator>
    </WrapperContainer>
  );
}

export default Home;
