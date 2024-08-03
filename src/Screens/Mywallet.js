import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {FirstView, SecondeView, ThirdView, orderinfo} from './Dammy';
import Colors from '../Styles/Colors';
import {useNavigation} from '@react-navigation/native';
import WrapperContainer from '../Components/WrapperContainer';
import {useSelector} from 'react-redux';
import Fonts from '../Styles/Fonts';

const Mywallet = () => {
  const Donavigation = useNavigation();
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  return (
    <WrapperContainer>
      <View style={{flex: 1}}>
        <View
          style={{
            ...styles.Container,
            backgroundColor: DarkMode ? '#000' : '#fff',
          }}>
          <TouchableOpacity
            onPress={() => {
              Donavigation.openDrawer();
            }}
            style={{}}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/8336/8336402.png',
              }}
              style={{
                ...styles.BackLogo,
                tintColor: DarkMode ? '#fff' : '#000',
              }}
            />
          </TouchableOpacity>
          <View style={{}}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: Fonts.MonstBold,
                color: DarkMode ? '#fff' : '#000',
              }}>
              My Wallet
            </Text>
          </View>
          <View
            style={{
              width: 80,
              height: 25,
              borderRadius: 20,
              backgroundColor: '#bff4bf',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontFamily: Fonts.MonstBold,
                color: 'green',
                paddingLeft: 8,
                marginVertical: 2,
              }}>
              Online
            </Text>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
              }}
              style={{width: 30, height: 30, borderRadius: 15, marginTop: -2}}
            />
          </View>
        </View>
        <View style={{flex: 1, paddingHorizontal: 16}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
              data={FirstView}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={{
                      width: 350,
                      height: 150,
                      borderRadius: 10,
                      backgroundColor: '#4169e1',
                      alignSelf: 'center',
                      marginVertical: 10,
                    }}>
                    <View style={{flex: 1, padding: 20, paddingHorizontal: 25}}>
                      <Image
                        source={{uri: item.Walletimage}}
                        style={{
                          width: 30,
                          height: 30,
                          tintColor: '#fff',
                          marginTop: 5,
                        }}
                      />
                      <View style={{alignItems: 'center', marginTop: -30}}>
                        <Text
                          style={{
                            fontSize: 12,
                            color: '#fff',
                            fontFamily: Fonts.ComfortaMedium,
                          }}>
                          {item.Withdrawable}
                        </Text>
                        <Text
                          style={{
                            fontSize: 18,
                            fontFamily: Fonts.MonstSemiBold,
                            color: '#fff',
                            alignSelf: 'center',
                            marginVertical: 15,
                          }}>
                          {item.Rs}
                        </Text>

                        <View
                          style={{
                            width: 200,
                            height: 35,
                            borderRadius: 20,
                            backgroundColor: '#fff',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 13,
                              color: '#4169e1',
                              fontFamily: Fonts.MonstSemiBold,
                            }}>
                            {item.SendReq}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              }}
            />

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={SecondeView}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <View
                      style={{
                        width: 120,
                        height: 110,
                        backgroundColor:
                          index === 0 ? '#4169e1' : Colors.lightgrayforbtn,
                        borderRadius: 8,
                        margin: 8,
                        left: 8,
                        marginTop: 10,
                      }}>
                      <View style={{alignItems: 'center'}}>
                        <Image
                          source={{uri: item.logo}}
                          style={{
                            width: 20,
                            height: 20,
                            tintColor: index === 0 ? '#fff' : '#4169e1',
                            marginVertical: 10,
                          }}
                        />
                        <Text
                          style={{
                            fontFamily: Fonts.MonstSemiBold,
                            color: index === 0 ? '#fff' : '#4169e1',
                          }}>
                          {item.Amount}
                        </Text>
                        <Text
                          style={{
                            fontSize: 10,
                            fontFamily: Fonts.ComfortaExtraBold,
                            marginTop: 5,
                            paddingHorizontal: 5,
                            color: index === 0 ? '#fff' : '#4169e1',
                          }}>
                          {item.description}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
            <FlatList
              data={ThirdView}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingHorizontal: 10,

                      marginTop: 10,
                    }}>
                    <View style={styles.ThirdViews}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginVertical: 7,
                        }}>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Image
                            source={{uri: item.Deliverybag}}
                            style={{
                              width: 15,
                              height: 15,
                              tintColor: '#4169e1',

                              marginTop: 2,
                            }}
                          />
                          <Text
                            style={{
                              color: '#4169e1',
                              fontSize: 13,
                              marginHorizontal: 8,
                              fontFamily: Fonts.ComfortaBold,
                            }}>
                            {item.Date}
                          </Text>
                        </View>
                        <View>
                          <Image
                            source={{uri: item.Arrow}}
                            style={{
                              width: 20,
                              height: 20,
                              tintColor: '#4169e1',
                            }}
                          />
                        </View>

                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Image
                            source={{uri: item.Deliverybag}}
                            style={{
                              width: 15,
                              height: 15,
                              tintColor: '#4169e1',
                              marginTop: 2,
                              marginHorizontal: 8,
                            }}
                          />
                          <Text
                            style={{
                              color: '#4169e1',
                              fontSize: 13,

                              fontFamily: Fonts.ComfortaBold,
                            }}>
                            {item.Date1}
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={styles.FilterView}>
                      <Image
                        source={{uri: item.Filter}}
                        style={{
                          width: 22,
                          height: 22,
                          alignSelf: 'center',
                          tintColor: '#fff',
                          marginVertical: 9,
                        }}
                      />
                    </View>
                  </View>
                );
              }}
            />
            <Text
              style={{
                fontFamily: Fonts.MonstSemiBold,
                color: DarkMode ? Colors.headinglight : Colors.headingdark,
                fontSize: 16,
                padding: 16,
              }}>
              Delivery Wise Earn
            </Text>
            <View style={{backgroundColor: '#fff', padding: 16}}>
              <FlatList
                data={orderinfo}
                renderItem={({item, index}) => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        margin: 10,
                        alignItems: 'center',
                        paddingBottom: 10,
                        borderBottomWidth: 0.5,
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <View>
                          <Image
                            source={{uri: item.bikeimage}}
                            style={{width: 22, height: 22}}
                          />
                        </View>
                        <View style={{left: 5}}>
                          <Text
                            style={{
                              color: '#4169e1',
                              fontFamily: Fonts.ComfortaBold,
                            }}>
                            {item.Order}
                          </Text>
                          <Text
                            style={{
                              marginVertical: 5,
                              fontSize: 12,
                              fontFamily: Fonts.ComfortaMedium,
                            }}>
                            {item.OrderDate}
                          </Text>

                          <Text
                            style={{
                              color: '#4169e1',
                              fontFamily: Fonts.ComfortaExtraBold,
                            }}>
                            {item.OrderAmount}
                          </Text>
                        </View>
                      </View>
                      <View style={{marginTop: 20}}>
                        <View
                          style={{
                            width: 120,
                            height: 25,
                            borderRadius: 20,
                            backgroundColor: '#bff4bf',
                            alignItems: 'center',
                            left: index === 2 ? 30 : 0,
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 12,
                              color: 'green',
                              fontFamily: Fonts.ComfortaExtraBold,
                            }}>
                            {item.DeliveryFee}
                            <Text
                              style={{
                                color: 'green',
                                fontSize: 16,
                              }}>
                              {item.fee}
                            </Text>
                          </Text>
                        </View>
                        <Text
                          style={{
                            fontSize: 10,
                            marginTop: 5,
                            fontFamily: Fonts.ComfortaMedium,
                          }}>
                          {item.Additional}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </WrapperContainer>
  );
};

export default Mywallet;

const styles = StyleSheet.create({
  Container: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  BackLogo: {
    width: 25,
    height: 25,
  },
  FilterView: {
    width: 55,
    height: 38,
    borderRadius: 20,
    backgroundColor: '#4169e1',
    marginTop: -2,
    left: 10,
  },
  ThirdViews: {
    width: 280,
    height: 35,
    backgroundColor: '#e0eefa',
    borderRadius: 20,
    paddingHorizontal: 20,
  },
});
