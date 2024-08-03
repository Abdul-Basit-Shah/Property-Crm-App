import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import WrapperContainer from '../Components/WrapperContainer';
import Fonts from '../Styles/Fonts';
const PendingMem = () => {
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  const Donavigation = useNavigation();
  const dummy = [
    {
      firstname: 'Rizwan',
      lastname: 'Siddiqui',
      username: `Rizwansiddiqui`,
      email: 'Rizwan@gmail.com',
      MobileNo: '03142122144',
      NicNo: '42301-9486570-6',
      Amount: '$240.00',
      fee: '$10.00',
      createdat: '06/10/2023 23:27:40',
    },
    {
      firstname: 'Rizwan',
      lastname: 'Siddiqui',
      username: `Rizwansiddiqui`,
      email: 'Rizwan@gmail.com',
      MobileNo: '03142122144',
      NicNo: '42301-9486570-6',
      Amount: '$240.00',
      fee: '$10.00',
      createdat: '06/10/2023 23:27:40',
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
            First Name
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {' '}
            {item?.firstname}
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
            Last Name
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {' '}
            {item?.lastname}
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
            UserName
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
            Email Address{' '}
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
            Mobile No
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {' '}
            {item?.MobileNo}
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
            NIC No
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {' '}
            {item?.NicNo}
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
            Fee{' '}
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {' '}
            {item?.fee}
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
            CreatedAt{' '}
          </Text>
          <Text
            style={{color: '#000', width: 80, fontFamily: Fonts.ComfortaBold}}>
            {' '}
            {item?.createdat}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <WrapperContainer>
      <HeaderDrwrCom text={'Pending'} />
      <View style={{flex: 1, paddingHorizontal: 16}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{marginTop: 10}}
          data={dummy}
          renderItem={renderItem}
        />
      </View>
    </WrapperContainer>
  );
};

export default PendingMem;
