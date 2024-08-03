import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {
  AssignedView,
  Cashdetails,
  DashboardFirstView,
  orderstatus,
} from './Dammy';
import {useNavigation} from '@react-navigation/native';
import WrapperContainer from '../Components/WrapperContainer';
import {useSelector} from 'react-redux';
import Colors from '../Styles/Colors';
import Darkmode from '../Store/Reducers/Darkmode';
import Fonts from '../Styles/Fonts';
import Icons from '../themes/Icons';
const Dashboard = ({navigation}) => {
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  const Donavigation = useNavigation();
  const Sizee = 30;
  const Dummy = [
    {
      Icon: 'https://cdn-icons-png.flaticon.com/512/10176/10176180.png',
      text: 'Send',
    },
    {
      Icon: 'https://cdn-icons-png.flaticon.com/512/1235/1235446.png',
      text: 'Payment',
    },
    {
      Icon: 'https://cdn-icons-png.flaticon.com/512/2618/2618479.png',
      text: 'Deposit',
    },
    {
      Icon: 'https://cdn-icons-png.flaticon.com/512/10044/10044666.png',
      text: 'Exchange',
    },
    {
      Icon: 'https://cdn-icons-png.flaticon.com/512/7868/7868298.png',
      text: 'Bill Pay',
    },
    {
      Icon: 'https://cdn-icons-png.flaticon.com/512/1435/1435872.png',
      text: 'Withdraw',
    },
    {
      Icon: 'https://cdn-icons-png.flaticon.com/512/711/711894.png',
      text: 'Invoice',
    },
    {
      Icon: 'https://cdn-icons-png.flaticon.com/512/10044/10044666.png',
      text: 'Request',
    },
    {
      Icon: 'https://cdn-icons-png.flaticon.com/512/815/815252.png',
      text: 'Voucher',
    },
    {
      Icon: 'https://cdn-icons-png.flaticon.com/512/2549/2549922.png',
      text: 'More',
    },
  ];
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
              Dashboard
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
        <ScrollView>
          <View
            style={{
              height: 220,
              borderBottomLeftRadius: 25,
              borderBottomRightRadius: 25,
              backgroundColor: '#4169e1',
              padding: 10,
            }}>
            <FlatList
              data={DashboardFirstView}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          left: 15,
                          marginTop: -20,
                        }}>
                        <Image
                          source={{uri: item.Profile}}
                          style={{width: 40, height: 40, borderRadius: 30}}
                        />

                        <Text
                          style={{
                            fontSize: 16,
                            color: '#fff',
                            left: 15,
                            fontFamily: Fonts.ComfortaBold,
                          }}>
                          {item.Name}
                        </Text>
                      </View>
                      <View style={{marginTop: 10, right: 20}}>
                        <Text
                          style={{
                            color: '#fff',
                            alignSelf: 'flex-end',
                            fontFamily: Fonts.ComfortaBold,
                          }}>
                          {item.Curreny}
                          <Text style={{fontWeight: '600', fontSize: 25}}>
                            {item.AvailableBalance}
                          </Text>
                        </Text>
                        <Text
                          style={{
                            color: '#fff',
                            fontSize: 16,
                            marginTop: 5,
                            fontFamily: Fonts.ComfortaBold,
                          }}>
                          {item.MainBalance}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
            <FlatList
              style={{}}
              horizontal
              data={Cashdetails}
              renderItem={({item, index}) => {
                return (
                  <View style={{flexDirection: index === 4 ? 'row' : null}}>
                    <View style={{margin: 4, alignSelf: 'center'}}>
                      <View
                        style={{
                          width: index === 3 ? 100 : 80,
                          height: 80,
                          backgroundColor: '#4169e1',
                          elevation: 5,
                          borderRadius: 10,
                          top: 10,
                        }}>
                        <Text
                          style={{
                            color: '#fff',
                            alignSelf: 'center',
                            marginTop: 8,
                            fontFamily: Fonts.ComfortaBold,
                          }}>
                          {item.Curreny}
                          <Text
                            style={{
                              fontSize: 20,
                              fontWeight: 'bold',
                              fontFamily: Fonts.ComfortaBold,
                            }}>
                            {item.Cash}
                          </Text>
                        </Text>
                        <Text
                          style={{
                            color: '#fff',
                            fontSize: 12,
                            alignSelf: 'center',
                            padding: 6,
                            fontFamily: Fonts.ComfortaBold,
                          }}>
                          {item.CashDescription}
                        </Text>
                      </View>
                    </View>
                    {index === 3 ? (
                      <View style={{top: -75, alignSelf: 'flex-end', right: 4}}>
                        <Image
                          source={{uri: item.Arrowimage}}
                          style={{width: 30, height: 30, tintColor: '#fff'}}
                        />
                      </View>
                    ) : null}
                  </View>
                );
              }}
            />
          </View>
          <View style={{paddingHorizontal: 16, marginTop: 15, flex: 1}}>
            {/* <Text
              style={{
                fontFamily: Fonts.MonstSemiBold,
                color: DarkMode ? Colors.headinglight : Colors.headingdark,
                fontSize: 16,
                paddingHorizontal: 5,
              }}>
              Order Status
            </Text> */}
            <View style={{marginTop: 15}}>
              {/* <FlatList
                data={orderstatus}
                renderItem={({item, index}) => {
                  return (
                    <View>
                      <View
                        style={{
                          height: 50,
                          padding: 16,
                          backgroundColor:
                            index === 0
                              ? '#e0eefa'
                              : index === 1
                              ? '#f6ebbd'
                              : index === 2
                              ? '#bff4bf'
                              : null,
                          borderRadius: 10,
                          marginBottom: 5,
                          justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}>
                          <View style={{flexDirection: 'row'}}>
                            <Image
                              source={{uri: item.image}}
                              style={{width: 22, height: 22}}
                            />
                            <Text
                              style={{
                                color: '#000',
                                marginHorizontal: 10,
                                fontFamily: Fonts.ComfortaExtraBold,
                              }}>
                              {item.Detail}
                              <Text
                                style={{
                                  fontSize: 10,
                                  fontFamily: Fonts.ComfortaBold,
                                }}>
                                {item.Incomp}
                              </Text>
                            </Text>
                          </View>
                          <View
                            style={{
                              width: 35,
                              height: 30,
                              borderRadius: 5,
                              backgroundColor:
                                index === 0
                                  ? '#c6e0f5'
                                  : index === 1
                                  ? '#f6e7ab'
                                  : index === 2
                                  ? '#a5eea5'
                                  : null,
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <Text
                              style={{
                                color: '#00008b',
                                fontFamily: Fonts.ComfortaBold,
                              }}>
                              {item.numbers}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                }}
              /> */}

              <FlatList
                numColumns={4}
                data={Dummy}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={{
                        margin: 10,
                        marginHorizontal: 14,
                      }}>
                      <View style={{alignItems: 'center'}}>
                        <View
                          style={{
                            padding: 10,
                            borderRadius: 8,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor:
                              index === 0
                                ? '#e6ecff'
                                : index === 1
                                ? '#fffae6'
                                : index === 2
                                ? '#ffe6e6'
                                : index === 3
                                ? '#e6ffee'
                                : index === 4
                                ? '#f5e6ff'
                                : index === 5
                                ? '#ffe6ff'
                                : index === 6
                                ? '#f2e6ff'
                                : index === 7
                                ? '#ffe6e6'
                                : index === 8
                                ? '#e6fffa'
                                : index === 9
                                ? '#e6ffff'
                                : '#d7d7d7',
                            paddingHorizontal: 15,
                          }}>
                          <Image
                            source={{uri: item.Icon}}
                            style={{
                              width: 35,
                              height: 35,
                              tintColor:
                                index === 0
                                  ? '#385dcd'
                                  : index === 1
                                  ? '#e6b800'
                                  : index === 2
                                  ? '#800000'
                                  : index === 3
                                  ? '#009933'
                                  : index === 4
                                  ? '#9900ff'
                                  : index === 5
                                  ? '#990099'
                                  : index === 6
                                  ? '#6600cc'
                                  : index === 7
                                  ? '#ff0000'
                                  : index === 8
                                  ? '#00cca3'
                                  : index === 9
                                  ? '#00e6e6'
                                  : null,
                            }}
                          />
                        </View>
                        <Text
                          style={{
                            fontFamily: Fonts.ComfortaRegular,
                            color: DarkMode ? '#fff' : '#000',
                            marginTop: 5,
                            fontSize: 13,
                          }}>
                          {item.text}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingVertical: 16,
                  paddingHorizontal: 3,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: DarkMode ? Colors.headinglight : Colors.headingdark,
                    fontSize: 16,
                    fontFamily: Fonts.MonstSemiBold,
                  }}>
                  Assigned to Me
                </Text>
                <View style={styles.ViewallButton}>
                  <Text
                    style={{
                      color: '#000',
                      fontFamily: Fonts.ComfortaExtraBold,
                    }}>
                    View all
                  </Text>
                </View>
              </View>

              <FlatList
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                data={AssignedView}
                renderItem={({item, index}) => {
                  return (
                    <View style={styles.OrderDetailsView}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text
                          style={{
                            fontSize: 18,
                            fontFamily: Fonts.MonstSemiBold,
                            color: '#000',
                          }}>
                          {item.OrderNo}
                        </Text>
                        <View>
                          <View style={{flexDirection: 'row'}}>
                            <Text
                              style={{
                                fontSize: 12,
                                fontFamily: Fonts.ComfortaBold,
                              }}>
                              {item.Assignd}
                              <Text
                                style={{
                                  color: '#000',
                                  fontFamily: Fonts.ComfortaExtraBold,
                                }}>
                                {item.Dated}
                              </Text>
                            </Text>
                            <Image
                              source={{uri: item.ordrimage}}
                              style={{
                                width: 20,
                                height: 20,
                                tintColor: '#bcddf8',
                                left: 5,
                              }}
                            />
                          </View>
                          <Text style={{fontSize: 12, marginTop: 2}}>
                            {item.Expected}
                            <Text style={{color: '#000', fontWeight: 'bold'}}>
                              {item.Dated1}
                            </Text>
                          </Text>
                        </View>
                      </View>

                      <View style={{flexDirection: 'row'}}>
                        <View>
                          <Image
                            source={{uri: item.sellerimage}}
                            style={{
                              width: 20,
                              height: 20,
                              tintColor: '#4d88db',
                            }}
                          />
                          <Image
                            source={{uri: item.opt}}
                            style={{
                              width: 20,
                              height: 20,
                            }}
                          />
                        </View>

                        <View style={{marginHorizontal: 15}}>
                          <Text
                            style={{
                              color: '#0650b9',
                              fontFamily: Fonts.MonstSemiBold,
                            }}>
                            {item.seller}
                          </Text>
                          <Text
                            style={{
                              fontFamily: Fonts.MonstSemiBold,
                              fontSize: 13,
                              color: '#000',
                              marginVertical: 2,
                            }}>
                            {item.sellerName}
                          </Text>
                          <Text
                            style={{
                              fontSize: 11,
                              fontFamily: Fonts.ComfortaBold,
                            }}>
                            {item.Shopaddress}
                          </Text>
                        </View>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <View>
                          <Image
                            source={{uri: item.opt}}
                            style={{
                              width: 20,
                              height: 20,

                              tintColor: '#efda87',
                            }}
                          />
                          <Image
                            source={{uri: item.sellerimage}}
                            style={{
                              width: 20,
                              height: 20,
                              tintColor: '#e4b90b',
                            }}
                          />
                        </View>
                        <Text
                          style={{
                            color: '#e8c32f',
                            fontFamily: Fonts.MonstSemiBold,
                            marginHorizontal: 15,
                            marginTop: 20,
                          }}>
                          {item.customer}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </WrapperContainer>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  Container: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,

    paddingHorizontal: 16,
  },
  BackLogo: {
    width: 25,
    height: 25,
  },
  // Onlinebutton: {
  //   width: 80,
  //   height: 25,
  //   borderRadius: 20,
  //   backgroundColor: '#bff4bf',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  OrderDetailsView: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    margin: 5,
  },
  ViewallButton: {
    width: 70,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
