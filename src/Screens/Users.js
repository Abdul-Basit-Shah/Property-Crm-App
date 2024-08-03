import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Header3 from '../Components/Header3';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import WrapperContainer from '../Components/WrapperContainer';
import {useSelector} from 'react-redux';
import Fonts from '../Styles/Fonts';

const Users = ({navigation}) => {
  const DarkMode = useSelector(state => state.Darkmode.Theme);

  return (
    <WrapperContainer>
      <HeaderDrwrCom text={'Users'} />
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 15,
            color: DarkMode ? '#fff' : '#000',
            fontFamily: Fonts.ComfortaBold,
          }}>
          No data available in table
        </Text>
      </View>
    </WrapperContainer>
  );
};

export default Users;

const styles = StyleSheet.create({});
