import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WrapperContainer from '../Components/WrapperContainer';
import {useSelector} from 'react-redux';
import Colors from '../Styles/Colors';
import Fonts from '../Styles/Fonts';

const SendHistory = () => {
  const DarkMode = useSelector(state => state.Darkmode.Theme);

  return (
    <WrapperContainer>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            color: DarkMode ? Colors.white : Colors.black,
            fontFamily: Fonts.ComfortaBold,
          }}>
          No Send History Found
        </Text>
      </View>
    </WrapperContainer>
  );
};

export default SendHistory;

const styles = StyleSheet.create({});
