import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import WrapperContainer from '../Components/WrapperContainer';
import Fonts from '../Styles/Fonts';

const Rewards = () => {
  const dummy = [
    {
      Level: '1',
      Rank: 'Silver',
      Levelsale: '12,000.00 U',
      incentive: '50,000.00',
    },
    {
      Level: '2',
      Rank: 'Gold',
      Levelsale: '36,000.00 U',
      incentive: '200,000.00',
    },
    {
      Level: '3',
      Rank: 'Diamond',
      Levelsale: '108,000.00 U',
      incentive: '1,350,000.00',
    },
    {
      Level: '4',
      Rank: 'Blue Diamond',
      Levelsale: '324,000.00 U',
      incentive: '4,850,000.00',
    },
    {
      Level: '5',
      Rank: 'Platimun',
      Levelsale: '927,000.00 U',
      incentive: '10,000,000.00',
    },
    {
      Level: '6',
      Rank: 'Ambassador',
      Levelsale: '2,916,000.00 U',
      incentive: '15,000,000.00',
    },
    {
      Level: '7',
      Rank: 'G Ambassador',
      Levelsale: '8,748,000.00 U',
      incentive: '25,000,000.00',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
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
            Level Number
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.Level}
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
            Rank
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.Rank}
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
            Level Sale
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.Levelsale}
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
            Incentive
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.incentive}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <WrapperContainer>
      <HeaderDrwrCom text={'Rewards'} />
      <View style={{flex: 1, paddingHorizontal: 16}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dummy}
          renderItem={renderItem}
        />
      </View>
    </WrapperContainer>
  );
};

export default Rewards;

const styles = StyleSheet.create({});
