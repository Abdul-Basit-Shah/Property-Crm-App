import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import WrapperContainer from '../Components/WrapperContainer';
import Fonts from '../Styles/Fonts';

const LeftOwn = navigation => {
  const dummy = [
    {
      username: `salman\nusman\nghani`,
      email: 'salmanusmanghani@gmail.com',
      RegistrationOn: '9/30/2023 4:55:32 PM',
      ActivationOn: '10/6/2023 1:24:31 AM',
      Amount: '$1,220.00',
    },
    {
      username: 'App Admin',
      email: 'info@appcreatorz.com',
      RegistrationOn: '8/16/2020 12:00:00 AM',
      ActivationOn: '8/16/2020 12:00:00 AM',
      Amount: '$50,060.00',
    },
  ];
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          elevation: 10,
          margin: 10,
          padding: 5,
          borderRadius: 10,
          marginBottom: index === dummy.length - 1 ? 20 : null,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderWidth: 1,
            paddingHorizontal: 10,
            padding: 5,
            borderRadius: 10,
            borderColor: 'lightgray',
            marginVertical: 5,
          }}>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaExtraBold}}>
            Username
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {' '}
            {item?.username}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderWidth: 1,
            paddingHorizontal: 10,
            padding: 5,
            borderRadius: 10,
            borderColor: 'lightgray',
          }}>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaExtraBold}}>
            Email{' '}
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {' '}
            {item?.email}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderWidth: 1,
            paddingHorizontal: 10,
            padding: 5,
            borderRadius: 10,
            borderColor: 'lightgray',
            marginVertical: 5,
          }}>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaExtraBold}}>
            Registration On
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item?.RegistrationOn}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderWidth: 1,
            paddingHorizontal: 10,
            padding: 5,
            borderRadius: 10,
            borderColor: 'lightgray',
          }}>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaExtraBold}}>
            Activation On{' '}
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item?.ActivationOn}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderWidth: 1,
            paddingHorizontal: 10,
            padding: 5,
            borderRadius: 10,
            borderColor: 'lightgray',
            marginVertical: 5,
          }}>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaExtraBold}}>
            Amount{' '}
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {' '}
            {item?.Amount}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <WrapperContainer>
      <View style={{paddingHorizontal: 16}}>
        <FlatList data={dummy} renderItem={renderItem} />
      </View>
    </WrapperContainer>
  );
};

export default LeftOwn;
