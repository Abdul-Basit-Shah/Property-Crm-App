import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {searches} from './Dammy';
import {useNavigation} from '@react-navigation/native';
import WrapperContainer from '../Components/WrapperContainer';
import {useSelector} from 'react-redux';
import Colors from '../Styles/Colors';
import Fonts from '../Styles/Fonts';

const Withdraw = () => {
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
              Withdraw
            </Text>
          </View>
          <View style={styles.Onlinebutton}>
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 15,
            }}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/2211/2211093.png',
              }}
              style={{
                width: 25,
                height: 25,
                tintColor: DarkMode ? Colors.headinglight : Colors.headingdark,
              }}
            />
            <Text
              style={{
                color: DarkMode ? Colors.headinglight : Colors.headingdark,
                fontFamily: Fonts.MonstSemiBold,
                left: 10,
              }}>
              Withdrawable Balance
            </Text>
          </View>
          <Text
            style={{
              color: DarkMode ? Colors.headinglight : Colors.headingdark,
              fontWeight: 'bold',
              alignSelf: 'center',
              fontFamily: Fonts.MonstSemiBold,
            }}>
            $
            <Text
              style={{
                fontSize: 25,
                color: DarkMode ? Colors.headinglight : Colors.headingdark,
                fontFamily: Fonts.MonstSemiBold,
              }}>
              1456
            </Text>
          </Text>
          <View>
            <View style={styles.BankView}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/512/66/66455.png',
                    }}
                    style={{width: 25, height: 25, tintColor: 'gray'}}
                  />
                  <View style={{left: 20}}>
                    <Text
                      style={{color: '#000', fontFamily: Fonts.MonstSemiBold}}>
                      Bank
                    </Text>
                    <Text
                      style={{
                        fontFamily: Fonts.ComfortaExtraBold,
                        color: 'gray',
                      }}>
                      AC 04592****65
                    </Text>
                  </View>
                </View>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/1250/1250925.png',
                  }}
                  style={{width: 20, height: 20, tintColor: '#4169e1'}}
                />
              </View>
            </View>
            <View style={styles.withdrawView}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: Fonts.MonstSemiBold,
                  color: '#00008b',
                }}>
                Withdraw Amount
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  height: 60,
                  width: 300,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#4169e1',
                    fontFamily: Fonts.MonstSemiBold,
                    marginTop: 15,
                  }}>
                  $
                </Text>
                <TextInput
                  style={{
                    width: 300,
                    borderBottomWidth: 0.5,
                    color: '#000',
                    fontFamily: Fonts.ComfortaExtraBold,
                  }}
                  textAlign="center"
                  placeholder="Enter amount"
                  placeholderTextColor={'gray'}
                />
              </View>
              <FlatList
                data={searches}
                horizontal
                renderItem={({item, index}) => {
                  return (
                    <View>
                      <View style={styles.amount}>
                        <Text
                          style={{
                            fontSize: 10,
                            fontFamily: Fonts.ComfortaExtraBold,
                            color: '#4169e1',
                          }}>
                          {item.amount}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />
              <View style={{alignItems: 'center', top: -20}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: Fonts.MonstSemiBold,
                    color: '#00008b',
                  }}>
                  Remark
                </Text>

                <TextInput
                  style={{
                    width: 300,
                    borderBottomWidth: 0.5,
                    color: '#000',
                    fontFamily: Fonts.ComfortaExtraBold,
                  }}
                  textAlign="center"
                  placeholder="Remark text"
                  placeholderTextColor={'gray'}
                />
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.bottomtabbutton}>
          <Text style={{color: '#fff', fontFamily: Fonts.MonstSemiBold}}>
            Send Withdraw Request
          </Text>
        </TouchableOpacity>
      </View>
    </WrapperContainer>
  );
};

export default Withdraw;

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
    marginVertical: 5,
  },

  bottomtabbutton: {
    padding: 10,
    paddingHorizontal: 50,
    borderRadius: 20,
    backgroundColor: '#4169e1',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  withdrawView: {
    height: 270,
    backgroundColor: '#fff',
    elevation: 3,
    marginTop: 10,
    alignItems: 'center',
    padding: 16,
  },
  amount: {
    width: 60,
    height: 25,
    backgroundColor: '#e0eefa',
    borderRadius: 15,
    alignItems: 'center',
    margin: 10,
    justifyContent: 'center',
  },
  BankView: {
    height: 75,
    backgroundColor: '#fff',
    elevation: 3,
    marginTop: 5,
    padding: 16,
  },
  Onlinebutton: {
    width: 80,
    height: 25,
    borderRadius: 20,
    backgroundColor: '#bff4bf',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
