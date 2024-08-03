import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Colors from '../Styles/Colors';
import TextInputComponent from '../Components/TextInputComponent';
import ButtonComponent from '../Components/ButtonComponent';
import Icons from '../themes/Icons';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import WrapperContainer from '../Components/WrapperContainer';
import Fonts from '../Styles/Fonts';

const GenReports = () => {
  const subheadingFontsize = 16;
  const subheadingFontFamily = Fonts.ComfortaExtraBold;
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  const Donavigation = useNavigation();
  const [level, setlevel] = useState();
  const [selectlevel, setselectlevel] = useState('Level');
  const [type, settype] = useState();
  const [selectType, setselectType] = useState('Package');
  const dummy = [
    {
      srNo: '1',
      Name: 'salman usman ghani',
      username: '',
      sponsor: 'appadmin',
      package: 'Special',
      Amount: '1220.00',
      Joining: '30/09/2023 16:55:32',
      Status: 'Enable',
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
            Sr.No
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.srNo}
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
            Name
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.Name}
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
            {item.username}
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
            Sponsor
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.sponsor}
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
            {item.srNo}
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
            Joining Date
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.Joining}
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
            Status
          </Text>
          <Text style={{color: '#000', fontFamily: Fonts.ComfortaBold}}>
            {item.Status}
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
            Top Up History
          </Text>
          <ButtonComponent
            onpress={() => {
              alert('No Record Found');
            }}
            text="View"
            textstyle={{fontSize: 15}}
            style={{height: 35, backgroundColor: Colors.buttonColor}}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <WrapperContainer>
      <HeaderDrwrCom text={'Report'} />
      <View style={{paddingHorizontal: 16, flex: 1}}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: Fonts.MonstSemiBold,
            color: DarkMode ? Colors.textwhite : Colors.textblack,
            marginVertical: 10,
          }}>
          List
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              color: DarkMode ? '#fff' : '#000',
              fontSize: subheadingFontsize,
              fontFamily: subheadingFontFamily,
              marginVertical: 10,
            }}>
            Level
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setlevel(!level);
            }}
            style={{
              width: '100%',
              backgroundColor: DarkMode ? Colors.gray2 : Colors.gray,

              borderBottomLeftRadius: level ? 0 : 5,
              borderBottomRightRadius: level ? 0 : 5,
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
                {selectlevel}
              </Text>
              <Icons.FontAwesome
                name={level ? 'caret-up' : 'sort-down'}
                size={18}
                color="gray"
              />
            </View>
            {level ? (
              <View>
                <FlatList
                  data={[
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8',
                    '9',
                    '10',
                    '11',
                    '12',
                    '13',
                    '14',
                    '15',
                  ]}
                  renderItem={({item, index}) => {
                    if (selectlevel === item) {
                      return;
                    }
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          setselectlevel(item);
                          setlevel(false);
                        }}>
                        <Text
                          style={{
                            marginVertical: 5,
                            fontSize: 15,
                            fontFamily: Fonts.ComfortaBold,
                            paddingBottom: index === 5 ? 5 : 0,
                            color: DarkMode ? '#fff' : '#000',
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
            Type
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
                  data={[
                    'Package',
                    'Free',
                    'Rising Star',
                    'Property',
                    'Special',
                    'Realtor',
                  ]}
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
                            marginVertical: 5,
                            fontSize: 15,
                            paddingBottom: index === 5 ? 5 : 0,
                            color: DarkMode ? '#fff' : '#000',
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 30,
              justifyContent: 'space-around',
            }}>
            <ButtonComponent
              onpress={() => {}}
              style={{
                backgroundColor: '#4169e1',
                width: 150,
                alignSelf: 'center',
              }}
              text="Search"
            />
            <ButtonComponent
              onpress={() => {}}
              style={{
                backgroundColor: 'red',
                width: 150,
                alignSelf: 'center',
              }}
              text="Cancel"
            />
          </View>
          <Text
            style={{
              fontSize: 15,
              fontFamily: Fonts.ComfortaExtraBold,
              color: DarkMode ? '#fff' : '#000',
            }}>
            Grand Total : $1,220.00
          </Text>
          <FlatList data={dummy} renderItem={renderItem} />
        </ScrollView>
      </View>
    </WrapperContainer>
  );
};

export default GenReports;

const styles = StyleSheet.create({});
