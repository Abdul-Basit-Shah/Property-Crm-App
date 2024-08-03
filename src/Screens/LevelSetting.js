import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Header3 from '../Components/Header3';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import WrapperContainer from '../Components/WrapperContainer';
import Fonts from '../Styles/Fonts';

const LevelSetting = ({navigation}) => {
  const dummy = [
    {
      StartPrice: '1000',
      Endprice: '5000',
      Levelnumber: '17',
      status: 'Disable',
      createdat: '05/10/2023 11:48:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:50:23',
      updateby: 'appadmin',
    },
    {
      StartPrice: '5000',
      Endprice: '500000',
      Levelnumber: '7',
      status: 'Enable',
      createdat: '25/03/2023 10:48:32',
      createdBy: '',
      updatedat: '',
      updateby: '',
    },
    {
      StartPrice: '3000',
      Endprice: '4999.99',
      Levelnumber: '6',
      status: 'Enable',
      createdat: '25/03/2022 16:48:32',
      createdBy: '',
      updatedat: '',
      updateby: '',
    },
    {
      StartPrice: '2000',
      Endprice: '2999.99',
      Levelnumber: '5',
      status: 'Enable',
      createdat: '18/03/2022 01:43:45',
      createdBy: '',
      updatedat: '25/03/2022 16:07:04',
      updateby: '',
    },
    {
      StartPrice: '999.99',
      Endprice: '1999.99',
      Levelnumber: '4',
      status: 'Enable',
      createdat: '17/03/2022 01:43:45',
      createdBy: '',
      updatedat: '25/03/2022 16:07:04',
      updateby: '',
    },
    {
      StartPrice: '0.01',
      Endprice: '999',
      Levelnumber: '3',
      status: 'Enable',
      createdat: '17/03/2022 01:43:45',
      createdBy: '',
      updatedat: '25/03/2022 16:07:04',
      updateby: '',
    },
  ];
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
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
            Start Price
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.StartPrice}
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
            End Price
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.Endprice}
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
            Level Number
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.Levelnumber}
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
            Status
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.status}
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
      <HeaderDrwrCom text={'Level Settings'} />
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

export default LevelSetting;

const styles = StyleSheet.create({});
