import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header3 from '../Components/Header3';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import WrapperContainer from '../Components/WrapperContainer';
import Fonts from '../Styles/Fonts';

const DailyReturns = ({navigation}) => {
  const dummy = [
    {
      package: 'Realtor',
      date: '29/09/23',
      roi: '0.70',
      status: 'Enable',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
      updateby: 'appadmin',
    },
    {
      package: 'Property',
      date: '29/09/23',
      roi: '0.70',
      status: 'Enable',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
      updateby: 'appadmin',
    },
    {
      package: 'Special',
      date: '29/09/23',
      roi: '0.70',
      status: 'Enable',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
      updateby: 'appadmin',
    },
    {
      package: 'Free',
      date: '29/09/23',
      roi: '0.70',
      status: 'Enable',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
      updateby: '',
    },
    {
      package: 'Free',
      date: '29/09/23',
      roi: '0.70',
      status: 'Enable',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
      updateby: '',
    },
    {
      package: 'Property',
      date: '29/09/23',
      roi: '0.70',
      status: 'Enable',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
      updateby: 'appadmin',
    },
    {
      package: 'Special',
      date: '29/09/23',
      roi: '0.70',
      status: 'Enable',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
      updateby: 'appadmin',
    },
    {
      package: 'Realtor',
      date: '29/09/23',
      roi: '0.70',
      status: 'Enable',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
      updateby: 'appadmin',
    },
    {
      package: 'Property',
      date: '29/09/23',
      roi: '0.70',
      status: 'Enable',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
      updateby: 'appadmin',
    },
    {
      package: 'Special',
      date: '29/09/23',
      roi: '0.70',
      status: 'Enable',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
      updateby: 'appadmin',
    },
    {
      package: 'Realtor',
      date: '29/09/23',
      roi: '0.70',
      status: 'Enable',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
      updateby: 'appadmin',
    },
    {
      package: 'Free',
      date: '29/09/23',
      roi: '0.70',
      status: 'Enable',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
      updateby: '',
    },
    {
      package: 'Special',
      date: '29/09/23',
      roi: '0.70',
      status: 'Enable',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
      updateby: '',
    },
    {
      package: 'Free',
      date: '29/09/23',
      roi: '0.70',
      status: 'Enable',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
      updateby: 'appadmin',
    },
    {
      package: 'Property',
      date: '29/09/23',
      roi: '0.70',
      status: 'Enable',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
      updateby: 'appadmin',
    },
    {
      package: 'Realtor',
      date: '29/09/23',
      roi: '0.70',
      status: 'Enable',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
      updateby: 'appadmin',
    },
    {
      package: 'Realtor',
      date: '29/09/23',
      roi: '0.70',
      status: 'Enable',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
      updateby: 'appadmin',
    },
    {
      package: 'Special',
      date: '29/09/23',
      roi: '0.70',
      status: 'Enable',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
      updateby: 'appadmin',
    },
    {
      package: 'Property',
      date: '29/09/23',
      roi: '0.70',
      status: 'Enable',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
      updateby: 'appadmin',
    },
    {
      package: 'Free',
      date: '29/09/23',
      roi: '0.70',
      status: 'Enable',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
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
            Package
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.package}
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
            Date
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.date}
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
            ROI
          </Text>
          <Text
            style={{
              color: '#000',
              fontFamily: Fonts.ComfortaBold,
              fontFamily: Fonts.ComfortaExtraBold,
            }}>
            {item.roi}
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
      <HeaderDrwrCom text={'Daily Returns'} />

      <View style={{paddingHorizontal: 16, flex: 1}}>
        <FlatList data={dummy} renderItem={renderItem} />
      </View>
    </WrapperContainer>
  );
};

export default DailyReturns;

const styles = StyleSheet.create({});
