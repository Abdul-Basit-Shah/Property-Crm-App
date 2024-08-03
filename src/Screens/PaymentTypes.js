import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React from 'react';
import Header3 from '../Components/Header3';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import WrapperContainer from '../Components/WrapperContainer';
import Fonts from '../Styles/Fonts';

const PaymentTypes = ({navigation}) => {
  const dummy = [
    {
      Title: 'Top Up',
      Name: '',
      Squence: '7',
      createdat: '05/10/2023 00:00:00',
      createdBy: '',
      updatedat: '05/10/2023 00:00:00',
      updateby: '',
    },
    {
      Title: 'Skrill',
      Name: '',
      Squence: '5',
      createdat: '05/10/2023 00:00:00',
      createdBy: '',
      updatedat: '05/10/2023 00:00:00',
      updateby: '',
    },
    {
      Title: 'Sign up Pin',
      Name: '',
      Squence: '2',
      createdat: '05/10/2023 00:00:00',
      createdBy: '',
      updatedat: '05/10/2023 00:00:00',
      updateby: '',
    },
    {
      Title: 'USDT',
      Name: 'TRC 20',
      Squence: '4',
      createdat: '05/10/2023 00:00:00',
      createdBy: '',
      updatedat: '05/10/2023 00:00:00',
      updateby: '',
    },
    {
      Title: 'USDT TRC 20',
      Name: 'TRC 20',
      Squence: '4',
      createdat: '05/10/2023 00:00:00',
      createdBy: '',
      updatedat: '05/10/2023 00:00:00',
      updateby: '',
    },
    {
      Title: 'Bank',
      Name: 'Account Title:AH Properties',
      Squence: '6',
      createdat: '05/10/2023 00:00:00',
      createdBy: '',
      updatedat: '11/09/2022 00:00:00',
      updateby: 'appadmin',
    },
    {
      Title: 'E-Wallet',
      Name: '',
      Squence: '3',
      createdat: '05/10/2023 00:00:00',
      createdBy: '',
      updatedat: '05/10/2023 00:00:00',
      updateby: '',
    },
    {
      Title: 'Perfect Money',
      Name: 'Wolf Trade',
      Squence: '1',
      createdat: '05/10/2023 00:00:00',
      createdBy: '',
      updatedat: '05/10/2023 00:00:00',
      updateby: '',
    },
  ];
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          margin: 10,
          elevation: 5,
          padding: 5,
          borderRadius: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            padding: 5,
            borderColor: 'lightgray',
            marginVertical: 5,
          }}>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaExtraBold}}>
            Title
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.Title}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            padding: 5,
            borderColor: 'lightgray',
            marginVertical: 5,
          }}>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaExtraBold}}>
            Name
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.Name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            padding: 5,
            borderColor: 'lightgray',
            marginVertical: 5,
          }}>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaExtraBold}}>
            Sequence Order
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.Squence}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            padding: 5,
            borderColor: 'lightgray',
            marginVertical: 5,
          }}>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaExtraBold}}>
            CreatedAt
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.createdat}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            padding: 5,
            borderColor: 'lightgray',
            marginVertical: 5,
          }}>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaExtraBold}}>
            CreatedBy
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.createdBy}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            padding: 5,
            borderColor: 'lightgray',
            marginVertical: 5,
          }}>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaExtraBold}}>
            UpdatedAt
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.updatedat}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            padding: 5,
            borderColor: 'lightgray',
            marginVertical: 5,
          }}>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaExtraBold}}>
            UpdatedBy
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.updateby}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <WrapperContainer>
      <HeaderDrwrCom text={'Payment Types'} />

      <View style={{paddingHorizontal: 16, flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dummy}
          renderItem={renderItem}
        />
      </View>
    </WrapperContainer>
  );
};

export default PaymentTypes;

const styles = StyleSheet.create({});
