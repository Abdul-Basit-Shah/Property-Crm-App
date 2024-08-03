import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import Icons from '../themes/Icons';
import TextInputComponent from '../Components/TextInputComponent';
import ButtonComponent from '../Components/ButtonComponent';
import WrapperContainer from '../Components/WrapperContainer';
import {useSelector} from 'react-redux';
import Colors from '../Styles/Colors';
import Fonts from '../Styles/Fonts';

const WithReport = () => {
  const subheadingFontsize = 16;
  const subheadingFontFamily = Fonts.ComfortaExtraBold;
  const [type, settype] = useState();
  const [selectType, setselectType] = useState('All');
  const [User, setUser] = useState();
  const [SelectUser, setSelectUser] = useState('User');
  const [Opensearch, setOpensearch] = useState();
  const [Selectsearch, setSelectsearch] = useState();
  const [inputindicator, setinputindicator] = useState();
  const DarkMode = useSelector(state => state.Darkmode.Theme);

  const dummy = [
    {
      total: 'Total ROI',
      totalRoi: '0.00',
    },
    {
      total: 'Total Daily ROI',
      totalRoi: '0.00',
    },
    {
      total: 'Total Team ROI',
      totalRoi: '0.00',
    },
    {
      total: 'Total Team ROI',
      totalRoi: '0.00',
    },
  ];
  const dummy1 = [
    {
      username: 'Salmanusman',
      Leader: 'appadmin',
      daily: '0.00',
      teamroi: '0.00',
      directroi: '0.00',
      totalroi: '0.00',
      reacievablePKr: '0.00',
    },
    {
      username: 'RizwanSiddiqui',
      Leader: '',
      daily: '0.00',
      teamroi: '0.00',
      directroi: '0.00',
      totalroi: '0.00',
      reacievablePKr: '0.00',
    },
  ];
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          width: 200,
          height: 130,
          backgroundColor: '#4169e1',
          borderRadius: 8,
          borderLeftWidth: 3,
          borderColor: 'red',
          padding: 16,
          justifyContent: 'center',
          margin: 10,
          elevation: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 50,
              fontFamily: Fonts.MonstSemiBold,
              color: '#fff',
            }}>
            $
          </Text>

          <View style={{marginHorizontal: 25}}>
            <Text
              style={{
                color: '#fff',
                fontFamily: Fonts.ComfortaExtraBold,
                fontSize: 15,
              }}>
              {item.total}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontFamily: Fonts.ComfortaExtraBold,
                fontSize: 15,
              }}>
              {item.totalRoi}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  const renderItem1 = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
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
            Username
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.username}
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
            Leader
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.Leader}
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
            Daily ROI ($)
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.daily}
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
            Team ROI ($)
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.teamroi}
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
            Direct ROI ($)
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.directroi}
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
            Total ROI ($)
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.totalroi}
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
            Recievable PKR
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.reacievablePKr}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <WrapperContainer>
      <HeaderDrwrCom text={'Withdrawal'} />
      <View style={{flex: 1, paddingHorizontal: 16}}>
        <ScrollView showsVerticalScrollIndicator={false}>
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
                    setSelectUser(SelectUser === 'User' ? 'Leader' : 'User');
                    setUser(false);
                  }}>
                  <Text
                    style={{
                      marginVertical: 5,
                      fontSize: 15,
                      color: DarkMode ? '#fff' : '#000',
                      fontFamily: Fonts.ComfortaBold,
                    }}>
                    {SelectUser === 'User' ? 'Leader' : 'User'}
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
            User/Leader
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
                  textstyle={{color: '#000'}}
                />
                <Text style={{marginBottom: 10, color: '#000'}}>
                  Please enter{Selectsearch} or more characters
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
            Status
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              settype(!type);
            }}
            style={{
              width: '100%',
              backgroundColor: DarkMode ? Colors.gray2 : Colors.gray,

              borderBottomLeftRadius: type ? 0 : 5,
              borderBottomRightRadius: type ? 0 : 5,
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
                {selectType}
              </Text>
              <Icons.FontAwesome
                name={type ? 'caret-up' : 'sort-down'}
                size={18}
                color="gray"
              />
            </View>
            {type ? (
              <View>
                <FlatList
                  data={['Pending', 'Hold', 'Reject', 'Approved']}
                  renderItem={({item, index}) => {
                    if (selectType === item) {
                      return;
                    }
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          setselectType(item);
                          settype(false);
                        }}>
                        <Text
                          style={{
                            color: DarkMode ? '#fff' : '#000',
                            marginVertical: 5,
                            fontSize: 15,
                            fontFamily: Fonts.ComfortaBold,
                          }}>
                          {item}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
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
          <View>
            <FlatList horizontal data={dummy} renderItem={renderItem} />
          </View>
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
              textstyle={{fontSize: 15}}
            />
            <ButtonComponent
              onpress={() => {}}
              style={{
                backgroundColor: 'red',
              }}
              textstyle={{fontSize: 15}}
              text="Cancel"
            />
            <ButtonComponent
              onpress={() => {}}
              style={{
                backgroundColor: '#4169e1',
              }}
              text="Export"
              textstyle={{fontSize: 15}}
            />
          </View>
          <FlatList data={dummy1} renderItem={renderItem1} />
        </ScrollView>
      </View>
    </WrapperContainer>
  );
};

export default WithReport;

const styles = StyleSheet.create({});
