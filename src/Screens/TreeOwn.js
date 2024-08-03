import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Icons from '../themes/Icons';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import WrapperContainer from '../Components/WrapperContainer';
import Fonts from '../Styles/Fonts';

const TreeOwn = () => {
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  const Donavigation = useNavigation();
  return (
    <WrapperContainer>
      <HeaderDrwrCom text={'Tree'} />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Icons.Ionicons name="person" color="#4169e1" size={30} />
        <Text
          style={{
            marginVertical: 5,
            color: DarkMode ? '#fff' : '#000',
            fontFamily: Fonts.ComfortaBold,
          }}>
          appadmin
        </Text>
        <Text
          style={{
            color: DarkMode ? '#fff' : '#000',
            fontFamily: Fonts.ComfortaBold,
          }}>
          $50060
        </Text>
        <View
          style={{
            width: 2,
            height: 40,
            backgroundColor: 'blue',
            marginVertical: 10,
          }}></View>
        <Icons.Ionicons name="person" color="#4169e1" size={30} />
        <Text
          style={{
            marginVertical: 5,
            color: DarkMode ? '#fff' : '#000',
            fontFamily: Fonts.ComfortaBold,
          }}>
          Salmanusman
        </Text>
        <Text
          style={{
            color: DarkMode ? '#fff' : '#000',
            fontFamily: Fonts.ComfortaBold,
          }}>
          $1220
        </Text>
      </View>
    </WrapperContainer>
  );
};

export default TreeOwn;
