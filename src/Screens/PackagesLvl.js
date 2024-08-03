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

const PackagesLvl = ({navigation}) => {
  const dummy = [
    {
      package: 'Property',
      LevelNumber: '16',
      Profitpercentage: '0.25',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
      updateby: 'appadmin',
    },
    {
      package: 'Realtor',
      LevelNumber: '15',
      Profitpercentage: '0',
      createdat: '21/04/2021 03:20:10',
      createdBy: '',
      updatedat: '01/07/2021 17:29:10',
      updateby: '',
    },
    {
      package: 'Special',
      LevelNumber: '15',
      Profitpercentage: '0.25',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
      updateby: 'appadmin',
    },
    {
      package: 'Property',
      LevelNumber: '16',
      Profitpercentage: '0.25',
      createdat: '05/10/2023 11:26:32',
      createdBy: '',
      updatedat: '05/10/2023 11:44:23',
      updateby: '',
    },
    {
      package: 'Realtor',
      LevelNumber: '14',
      Profitpercentage: '0',
      createdat: '21/04/2021 03:20:10',
      createdBy: '',
      updatedat: '01/07/2021 17:29:10',
      updateby: '',
    },
    {
      package: 'Special',
      LevelNumber: '14',
      Profitpercentage: '0',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
      updateby: 'appadmin',
    },
    {
      package: 'Property',
      LevelNumber: '14',
      Profitpercentage: '0',
      createdat: '05/10/2023 11:26:32',
      createdBy: '',
      updatedat: '05/10/2023 11:44:23',
      updateby: '',
    },
    {
      package: 'Realtor',
      LevelNumber: '13',
      Profitpercentage: '0',
      createdat: '21/04/2021 03:20:10',
      createdBy: '',
      updatedat: '01/07/2021 17:29:10',
      updateby: '',
    },
    {
      package: 'Special',
      LevelNumber: '13',
      Profitpercentage: '0',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
      updateby: 'appadmin',
    },
    {
      package: 'Property',
      LevelNumber: '13',
      Profitpercentage: '0',
      createdat: '05/10/2023 11:26:32',
      createdBy: '',
      updatedat: '05/10/2023 11:44:23',
      updateby: '',
    },
    {
      package: 'Realtor',
      LevelNumber: '12',
      Profitpercentage: '0',
      createdat: '21/04/2021 03:20:10',
      createdBy: '',
      updatedat: '01/07/2021 17:29:10',
      updateby: '',
    },
    {
      package: 'Special',
      LevelNumber: '12',
      Profitpercentage: '0',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
      updateby: 'appadmin',
    },
    {
      package: 'Property',
      LevelNumber: '12',
      Profitpercentage: '0',
      createdat: '05/10/2023 11:26:32',
      createdBy: '',
      updatedat: '05/10/2023 11:44:23',
      updateby: '',
    },
    {
      package: 'Realtor',
      LevelNumber: '11',
      Profitpercentage: '0',
      createdat: '21/04/2021 03:20:10',
      createdBy: '',
      updatedat: '01/07/2021 17:29:10',
      updateby: '',
    },
    {
      package: 'Special',
      LevelNumber: '11',
      Profitpercentage: '0',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
      updateby: 'appadmin',
    },
    {
      package: 'Property',
      LevelNumber: '11',
      Profitpercentage: '0',
      createdat: '05/10/2023 11:26:32',
      createdBy: '',
      updatedat: '05/10/2023 11:44:23',
      updateby: '',
    },
    {
      package: 'Realtor',
      LevelNumber: '10',
      Profitpercentage: '0.5',
      createdat: '21/04/2021 03:20:10',
      createdBy: '',
      updatedat: '01/07/2021 17:29:10',
      updateby: '',
    },
    {
      package: 'Special',
      LevelNumber: '10',
      Profitpercentage: '0.5',
      createdat: '05/10/2023 11:26:32',
      createdBy: 'appadmin',
      updatedat: '05/10/2023 11:44:23',
      updateby: 'appadmin',
    },
    {
      package: 'Property',
      LevelNumber: '10',
      Profitpercentage: '0.5',
      createdat: '05/10/2023 11:26:32',
      createdBy: '',
      updatedat: '05/10/2023 11:44:23',
      updateby: '',
    },
    {
      package: 'Realtor',
      LevelNumber: '9',
      Profitpercentage: '0.5',
      createdat: '21/04/2021 03:20:10',
      createdBy: '',
      updatedat: '01/07/2021 17:29:10',
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
            Level Number
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.LevelNumber}
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
            Profit Percentage
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.Profitpercentage}
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
          <Text style={{color: '#000', fontFamily: Fonts.Comforta}}>
            {item.updateby}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <WrapperContainer>
      <HeaderDrwrCom text={'Level ROI'} />

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

export default PackagesLvl;

const styles = StyleSheet.create({});
