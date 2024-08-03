import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header3 from '../Components/Header3';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import WrapperContainer from '../Components/WrapperContainer';
import Fonts from '../Styles/Fonts';

const Sessions = ({navigation}) => {
  const dummy = [
    {
      username: 'appadmin',
      emailaddress: 'info@appcreatorz.com',
      Ipaddress: '39.39.90.156',
      Logindate: '09/11/2023 18:50:19',
      logoutdate: '',
    },
    {
      username: 'appadmin',
      emailaddress: 'info@appcreatorz.com',
      Ipaddress: '39.39.90.156',
      Logindate: '09/11/2023 18:50:19',
      logoutdate: '',
    },
    {
      username: 'appadmin',
      emailaddress: 'info@appcreatorz.com',
      Ipaddress: '39.39.90.156',
      Logindate: '09/11/2023 18:50:19',
      logoutdate: '',
    },
    {
      username: 'appadmin',
      emailaddress: 'info@appcreatorz.com',
      Ipaddress: '39.39.90.156',
      Logindate: '09/11/2023 18:50:19',
      logoutdate: '',
    },
    {
      username: 'appadmin',
      emailaddress: 'info@appcreatorz.com',
      Ipaddress: '39.39.90.156',
      Logindate: '09/11/2023 18:50:19',
      logoutdate: '',
    },
    {
      username: 'appadmin',
      emailaddress: 'info@appcreatorz.com',
      Ipaddress: '39.39.90.156',
      Logindate: '09/11/2023 18:50:19',
      logoutdate: '',
    },
    {
      username: 'appadmin',
      emailaddress: 'info@appcreatorz.com',
      Ipaddress: '39.39.90.156',
      Logindate: '09/11/2023 18:50:19',
      logoutdate: '',
    },
    {
      username: 'appadmin',
      emailaddress: 'info@appcreatorz.com',
      Ipaddress: '39.39.90.156',
      Logindate: '09/11/2023 18:50:19',
      logoutdate: '',
    },
    {
      username: 'appadmin',
      emailaddress: 'info@appcreatorz.com',
      Ipaddress: '39.39.90.156',
      Logindate: '09/11/2023 18:50:19',
      logoutdate: '',
    },
    {
      username: 'appadmin',
      emailaddress: 'info@appcreatorz.com',
      Ipaddress: '39.39.90.156',
      Logindate: '09/11/2023 18:50:19',
      logoutdate: '',
    },
    {
      username: 'appadmin',
      emailaddress: 'info@appcreatorz.com',
      Ipaddress: '39.39.90.156',
      Logindate: '09/11/2023 18:50:19',
      logoutdate: '',
    },
    {
      username: 'appadmin',
      emailaddress: 'info@appcreatorz.com',
      Ipaddress: '39.39.97.60',
      Logindate: '01/11/2023 09:40:43',
      logoutdate: '01/11/2023 09:51:41',
    },
    {
      username: 'appadmin',
      emailaddress: 'info@appcreatorz.com',
      Ipaddress: '39.39.97.60',
      Logindate: '01/11/2023 07:32:17',
      logoutdate: '',
    },
    {
      username: 'appadmin',
      emailaddress: 'info@appcreatorz.com',
      Ipaddress: '39.39.97.60',
      Logindate: '01/11/2023 06:55:41',
      logoutdate: '',
    },
    {
      username: 'appadmin',
      emailaddress: 'info@appcreatorz.com',
      Ipaddress: '202.47.51.122',
      Logindate: '01/11/2023 00:38:54',
      logoutdate: '',
    },
    {
      username: 'appadmin',
      emailaddress: 'info@appcreatorz.com',
      Ipaddress: '202.47.51.122',
      Logindate: '01/11/2023 00:13:25',
      logoutdate: '',
    },
    {
      username: 'appadmin',
      emailaddress: 'info@appcreatorz.com',
      Ipaddress: '202.47.51.122',
      Logindate: '31/10/2023 03:21:11',
      logoutdate: '',
    },
    {
      username: 'appadmin',
      emailaddress: 'info@appcreatorz.com',
      Ipaddress: '202.47.51.122',
      Logindate: '31/10/2023 01:54:34',
      logoutdate: '',
    },
    {
      username: 'appadmin',
      emailaddress: 'info@appcreatorz.com',
      Ipaddress: '39.39.100.152',
      Logindate: '31/10/2023 01:34:50',
      logoutdate: '',
    },
    {
      username: 'appadmin',
      emailaddress: 'info@appcreatorz.com',
      Ipaddress: '202.47.51.122',
      Logindate: '31/10/2023 00:58:53',
      logoutdate: '',
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
            Username
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.username}
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
            Email Address
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.emailaddress}
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
            IP Address
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.Ipaddress}
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
            Login Date Time
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.Logindate}
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
            Logout Date Time
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.logoutdate}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <WrapperContainer>
      <HeaderDrwrCom text={'Member Sessions'} />

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

export default Sessions;

const styles = StyleSheet.create({});
