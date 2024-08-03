import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import WrapperContainer from '../Components/WrapperContainer';
import Fonts from '../Styles/Fonts';

const Withdrawal3 = () => {
  const dammy2 = [
    {
      Currency: '$',
      title: 'TOTAL PREMIUM',
      price: '$ 67,037.24',
    },
    {
      Currency: '$',
      title: 'TOTAL WITHDRAWAL',
      price: '$ 0.00',
    },
    {
      Currency: '$',
      title: 'AVAILABLE BALANCE',
      price: '$ 67,037.24',
    },
  ];
  const renderItem = ({item, index}) => {
    return (
      <View>
        <View
          style={{
            backgroundColor: '#4169e1',
            borderRadius: 15,
            padding: 15,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
            marginVertical: 30,
            borderLeftWidth: 4,
            borderColor: '#dc143c',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
                fontFamily: Fonts.ComfortaExtraBold,
                fontSize: 30,
              }}>
              {item.Currency}
            </Text>
            <View style={{marginHorizontal: 30}}>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: Fonts.ComfortaExtraBold,
                  fontWeight: '500',
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: Fonts.ComfortaBold,
                  fontSize: 18,
                }}>
                {item.price}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <WrapperContainer>
      <View style={{flex: 1, paddingHorizontal: 16}}>
        <FlatList data={dammy2} renderItem={renderItem} />
      </View>
    </WrapperContainer>
  );
};
export default Withdrawal3;

const styles = StyleSheet.create({});
