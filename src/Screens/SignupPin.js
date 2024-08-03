import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import WrapperContainer from '../Components/WrapperContainer';
import {useSelector} from 'react-redux';
import Fonts from '../Styles/Fonts';

const SignupPin = () => {
  const DarkMode = useSelector(state => state.Darkmode.Theme);

  return (
    <WrapperContainer>
      <HeaderDrwrCom text={'Sign up Pin'} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            color: DarkMode ? '#fff' : '#000',
            fontFamily: Fonts.ComfortaBold,
          }}>
          No data Available
        </Text>
      </View>
    </WrapperContainer>
  );
};

export default SignupPin;

const styles = StyleSheet.create({});
