import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import ButtonComponent from '../Components/ButtonComponent';
import TextInputComponent from '../Components/TextInputComponent';
import Icons from '../themes/Icons';
import WrapperContainer from '../Components/WrapperContainer';
import {useSelector} from 'react-redux';
import Colors from '../Styles/Colors';
import Fonts from '../Styles/Fonts';

const ActivatedMembers = () => {
  const [User, setUser] = useState();
  const [SelectUser, setSelectUser] = useState('Approved Date');
  const [Opensearch, setOpensearch] = useState();
  const [Selectsearch, setSelectsearch] = useState('');
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  const subheadingFontsize = 16;
  const subheadingFontFamily = Fonts.ComfortaExtraBold;

  const dummy = [
    {
      firstname: 'salman',
      lastname: 'usman ghani',
      Username: 'Salmanusman',
      Email: 'salmanusmanghani@gmail.com',
      Mobile: '0332-2510502',
      NIc: '42301-9486570-5',
      amount: '1,220.00',
      fee: '10.00',
      leader: 'appadmin',
      approvedat: '03/10/2023 23:24:31',
      activatedat: '06/10/2023 01:24:31',
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
            First Name
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.firstname}
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
            Last Name
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.lastname}
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
            Username
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.Username}
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
            {item.Email}
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
            Mobile No
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.Mobile}
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
            NIC Number
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.NIc}
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
            Amount ($)
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.amount}
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
            Fee ($)
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.fee}
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
            Leader
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.leader}
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
            ApprovedAt
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.approvedat}
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
            ActivatedAt
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.activatedat}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <WrapperContainer>
      <HeaderDrwrCom text={'Members'} />
      <View style={{flex: 1, paddingHorizontal: 16}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              color: DarkMode ? '#fff' : '#000',
              fontSize: subheadingFontsize,
              fontFamily: subheadingFontFamily,
              marginVertical: 10,
            }}>
            Leader
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setOpensearch(!Opensearch);
            }}
            style={{
              width: '100%',
              backgroundColor: '#dbd4b4',

              borderBottomLeftRadius: Opensearch ? 0 : 5,
              borderBottomRightRadius: Opensearch ? 0 : 5,
              borderRadius: 5,
              paddingHorizontal: 16,
            }}>
            <View
              style={{
                marginVertical: 11,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
                {Selectsearch}
              </Text>
              <Icons.FontAwesome
                name={Opensearch ? 'caret-up' : 'sort-down'}
                size={18}
                color="gray"
              />
            </View>
            {Opensearch ? (
              <View>
                <TextInputComponent
                  maxLength={3}
                  inputstyle={{
                    backgroundColor: '#fff',
                    borderWidth: 1,
                    borderRadius: 0,
                    height: 40,
                  }}
                  value={Selectsearch}
                  onChangeText={setSelectsearch}
                />
                <Text
                  style={{marginBottom: 10, fontFamily: Fonts.ComfortaBold}}>
                  {Selectsearch.length === 3
                    ? 'Searching..'
                    : `Please enter ${
                        3 - Selectsearch.length
                      } or more characters`}
                </Text>
              </View>
            ) : null}
          </TouchableOpacity>
          <Text
            style={{
              color: DarkMode ? '#fff' : '#000',
              fontSize: subheadingFontsize,
              fontFamily: subheadingFontFamily,
              marginVertical: 10,
            }}>
            Search By
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setUser(!User);
            }}
            style={{
              width: '100%',
              backgroundColor: DarkMode ? Colors.gray2 : Colors.gray,

              borderBottomLeftRadius: User ? 0 : 5,
              borderBottomRightRadius: User ? 0 : 5,
              borderRadius: 5,
              paddingHorizontal: 16,
            }}>
            <View
              style={{
                marginVertical: 11,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: DarkMode ? '#fff' : '#000',
                  fontFamily: Fonts.ComfortaBold,
                }}>
                {SelectUser}
              </Text>
              <Icons.FontAwesome
                name={User ? 'caret-up' : 'sort-down'}
                size={18}
                color="gray"
              />
            </View>
            {User ? (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setSelectUser(
                      SelectUser === 'Approved Date'
                        ? 'Activated Date'
                        : 'Approved Date',
                    );
                    setUser(false);
                  }}>
                  <Text
                    style={{
                      fontFamily: Fonts.ComfortaBold,
                      marginVertical: 5,
                      fontSize: 15,
                      color: DarkMode ? '#fff' : '#000',
                    }}>
                    {SelectUser === 'Approved Date'
                      ? 'Activated Date'
                      : 'Approved Date'}
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </TouchableOpacity>

          <Text
            style={{
              color: DarkMode ? '#fff' : '#000',
              fontSize: subheadingFontsize,
              fontFamily: subheadingFontFamily,
              marginVertical: 10,
            }}>
            From Date
            <Text style={{fontSize: 10, color: 'gray'}}>
              {' '}
              (Format : MM/DD/YYYY)
            </Text>
          </Text>
          <TextInputComponent
            placeholder={'From Date '}
            placeholderTextColor="gray"
            inputstyle={{height: 40, marginBottom: 0}}
          />
          <Text
            style={{
              color: DarkMode ? '#fff' : '#000',
              fontSize: subheadingFontsize,
              fontFamily: subheadingFontFamily,
              marginVertical: 10,
            }}>
            To Date
            <Text style={{fontSize: 10, color: 'gray'}}>
              {' '}
              (Format : MM/DD/YYYY)
            </Text>
          </Text>
          <TextInputComponent
            placeholder={'To Date'}
            placeholderTextColor="gray"
            inputstyle={{height: 40}}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginVertical: 10,
            }}>
            <ButtonComponent
              onpress={() => {}}
              style={{
                backgroundColor: '#4169e1',
              }}
              text="Search"
            />
            <ButtonComponent
              onpress={() => {}}
              style={{
                backgroundColor: 'red',
              }}
              text="Cancel"
            />
            <ButtonComponent
              onpress={() => {}}
              style={{
                backgroundColor: '#4169e1',
              }}
              text="Export"
            />
          </View>

          <FlatList data={dummy} renderItem={renderItem} />
        </ScrollView>
      </View>
    </WrapperContainer>
  );
};

export default ActivatedMembers;

const styles = StyleSheet.create({});
