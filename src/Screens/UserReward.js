import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import WrapperContainer from '../Components/WrapperContainer';
import {useSelector} from 'react-redux';
import Fonts from '../Styles/Fonts';

const UserReward = () => {
  const DarkMode = useSelector(state => state.Darkmode.Theme);

  return (
    <WrapperContainer>
      <HeaderDrwrCom text={'User Rewards'} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 16,
        }}>
        <Text
          style={{
            color: DarkMode ? '#fff' : '#000',
            fontFamily: Fonts.ComfortaBold,
          }}>
          UserReward
        </Text>
      </View>
    </WrapperContainer>
  );
};

export default UserReward;

const styles = StyleSheet.create({});
