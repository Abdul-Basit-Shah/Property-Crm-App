import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Colors from '../Styles/Colors';
import TextInputComponent from '../Components/TextInputComponent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ButtonComponent from '../Components/ButtonComponent';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import WrapperContainer from '../Components/WrapperContainer';
import Fonts from '../Styles/Fonts';

const Register = ({navigation}) => {
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  const Donavigation = useNavigation();
  const [type, settype] = useState();
  const [selectType, setselectType] = useState('Package');
  const [Menu, setMenu] = useState();
  const [SelectedMenu, setSelectedMenu] = useState('Male');
  const [Country, setCounrty] = useState();
  const [SelectCountry, setSelectCounrty] = useState('Pakistan');
  const [State, setState] = useState();
  const [SelectState, setSelectState] = useState('Sindh');
  const [City, setCity] = useState();
  const [SelectCity, setSelectCity] = useState('Karachi');
  const subheadingFontsize = 16;
  const subheadingFontFamily = Fonts.ComfortaExtraBold;

  return (
    <WrapperContainer>
      <HeaderDrwrCom text={'Register'} />
      <View
        style={{
          paddingHorizontal: 16,
          justifyContent: 'center',
          flex: 1,
        }}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: Fonts.MonstSemiBold,
            color: DarkMode ? Colors.textwhite : Colors.textblack,
            marginVertical: 10,
          }}>
          Register New Account
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginTop: 10}}>
            <Text
              style={{
                color: DarkMode ? Colors.textwhite : Colors.textblack,
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
              }}>
              First Name <Text style={{color: 'red'}}> *</Text>
            </Text>
            <TextInputComponent
              placeholder={'First Name *'}
              placeholderTextColor="gray"
              inputstyle={{height: 40, marginTop: 10}}
              textstyle={{color: DarkMode ? '#fff' : '#000'}}
            />
          </View>
          <View>
            <Text
              style={{
                color: DarkMode ? Colors.textwhite : Colors.textblack,
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
              }}>
              Last Name<Text style={{color: 'red'}}> *</Text>
            </Text>
            <TextInputComponent
              placeholder={'Last Name'}
              placeholderTextColor="gray"
              inputstyle={{height: 40, marginTop: 10}}
              textstyle={{color: DarkMode ? '#fff' : '#000'}}
            />
          </View>

          <View>
            <Text
              style={{
                color: DarkMode ? Colors.textwhite : Colors.textblack,
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
              }}>
              Mobile Number<Text style={{color: 'red'}}> *</Text>
            </Text>
            <TextInputComponent
              placeholder={'Mobile Number  *'}
              placeholderTextColor="gray"
              inputstyle={{height: 40, marginTop: 10}}
              textstyle={{color: DarkMode ? '#fff' : '#000'}}
            />
          </View>
          <Text
            style={{
              color: DarkMode ? Colors.textwhite : Colors.textblack,
              fontSize: subheadingFontsize,
              fontFamily: subheadingFontFamily,
            }}>
            Package<Text style={{color: 'red'}}> *</Text>
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
              paddingHorizontal: 20,
              marginVertical: 10,
              marginBottom: 15,
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
              <FontAwesome
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
          <View>
            <Text
              style={{
                color: DarkMode ? Colors.textwhite : Colors.textblack,
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
              }}>
              Package Amount<Text style={{color: 'red'}}> *</Text>
            </Text>
            <TextInputComponent
              placeholder={'Package Amount'}
              placeholderTextColor="gray"
              inputstyle={{height: 40, marginTop: 10}}
              textstyle={{color: DarkMode ? '#fff' : '#000'}}
            />
          </View>
          <View>
            <Text
              style={{
                color: DarkMode ? Colors.textwhite : Colors.textblack,
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
              }}>
              Gender<Text style={{color: 'red'}}> *</Text>
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setMenu(!Menu);
              }}
              style={{
                width: '100%',
                backgroundColor: DarkMode ? Colors.gray2 : Colors.gray,
                height: Menu ? 70 : 42,
                borderBottomLeftRadius: Menu ? 0 : 5,
                borderBottomRightRadius: Menu ? 0 : 5,
                borderRadius: 5,
                paddingHorizontal: 20,
                marginVertical: 10,
                marginBottom: 15,
              }}>
              <View
                style={{
                  marginVertical: 12,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: DarkMode ? '#fff' : '#000',
                    fontFamily: Fonts.ComfortaBold,
                  }}>
                  {SelectedMenu}
                </Text>
                <FontAwesome
                  name={Menu ? 'caret-up' : 'sort-down'}
                  size={18}
                  color="gray"
                />
              </View>
              {Menu ? (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedMenu(
                      SelectedMenu === 'Male' ? 'Female' : 'Male',
                    );
                    setMenu(false);
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: DarkMode ? '#fff' : '#000',
                      fontFamily: Fonts.ComfortaBold,
                    }}>
                    {SelectedMenu === 'Male' ? 'Female' : 'Male'}
                  </Text>
                </TouchableOpacity>
              ) : null}
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                color: DarkMode ? Colors.textwhite : Colors.textblack,
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
              }}>
              Username<Text style={{color: 'red'}}> *</Text>
            </Text>
            <TextInputComponent
              placeholder={'Username'}
              placeholderTextColor="gray"
              inputstyle={{height: 40, marginTop: 10}}
              textstyle={{color: DarkMode ? '#fff' : '#000'}}
            />
          </View>
          <View>
            <Text
              style={{
                color: DarkMode ? Colors.textwhite : Colors.textblack,
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
              }}>
              Email Address<Text style={{color: 'red'}}> *</Text>
            </Text>
            <TextInputComponent
              placeholder={'Email Address'}
              placeholderTextColor="gray"
              inputstyle={{height: 40, marginTop: 10}}
              textstyle={{color: DarkMode ? '#fff' : '#000'}}
            />
          </View>
          <View>
            <Text
              style={{
                color: DarkMode ? Colors.textwhite : Colors.textblack,
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
              }}>
              Password<Text style={{color: 'red'}}> *</Text>
            </Text>
            <TextInputComponent
              placeholder={'Password'}
              placeholderTextColor="gray"
              inputstyle={{height: 40, marginTop: 10}}
              textstyle={{color: DarkMode ? '#fff' : '#000'}}
            />
          </View>
          <View>
            <Text
              style={{
                color: DarkMode ? Colors.textwhite : Colors.textblack,
                fontSize: subheadingFontsize,
                fontFamily: subheadingFontFamily,
              }}>
              Confirm Password<Text style={{color: 'red'}}> *</Text>
            </Text>
            <TextInputComponent
              placeholder={'Confirm Password'}
              placeholderTextColor="gray"
              inputstyle={{height: 40, marginTop: 10}}
              textstyle={{color: DarkMode ? '#fff' : '#000'}}
            />
          </View>
          <Text
            style={{
              color: DarkMode ? Colors.textwhite : Colors.textblack,
              fontSize: subheadingFontsize,
              fontFamily: subheadingFontFamily,
            }}>
            Country<Text style={{color: 'red'}}> *</Text>
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setCounrty(!Country);
            }}
            style={{
              width: '100%',
              backgroundColor: DarkMode ? Colors.gray2 : Colors.gray,
              borderBottomLeftRadius: Country ? 0 : 5,
              borderBottomRightRadius: Country ? 0 : 5,
              borderRadius: 5,
              paddingHorizontal: 20,
              marginVertical: 10,
              marginBottom: 15,
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
                {SelectCountry}
              </Text>
              <FontAwesome
                name={Country ? 'caret-up' : 'sort-down'}
                size={18}
                color="gray"
              />
            </View>
            {Country ? (
              <View>
                <FlatList
                  data={[
                    'Pakistan',
                    'India',
                    'China',
                    'Nepal',
                    'Iran',
                    'Australia',
                  ]}
                  renderItem={({item, index}) => {
                    if (SelectCountry === item) {
                      return;
                    }
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          setSelectCounrty(item);
                          setCounrty(false);
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
              color: DarkMode ? Colors.textwhite : Colors.textblack,
              fontSize: subheadingFontsize,
              fontFamily: subheadingFontFamily,
            }}>
            State<Text style={{color: 'red'}}> *</Text>
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setState(!State);
            }}
            style={{
              width: '100%',
              backgroundColor: DarkMode ? Colors.gray2 : Colors.gray,
              borderBottomLeftRadius: State ? 0 : 5,
              borderBottomRightRadius: State ? 0 : 5,
              borderRadius: 5,
              paddingHorizontal: 20,
              marginVertical: 10,
              marginBottom: 15,
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
                {SelectState}
              </Text>
              <FontAwesome
                name={State ? 'caret-up' : 'sort-down'}
                size={18}
                color="gray"
              />
            </View>
            {State ? (
              <View>
                <FlatList
                  data={['Sindh', 'Punjab', 'Balochistan', 'KPK']}
                  renderItem={({item, index}) => {
                    if (SelectState === item) {
                      return;
                    }
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          setSelectState(item);
                          setState(false);
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
              color: DarkMode ? Colors.textwhite : Colors.textblack,
              fontSize: subheadingFontsize,
              fontFamily: subheadingFontFamily,
            }}>
            City<Text style={{color: 'red'}}> *</Text>
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setCity(!City);
            }}
            style={{
              width: '100%',
              backgroundColor: DarkMode ? Colors.gray2 : Colors.gray,
              borderBottomLeftRadius: City ? 0 : 5,
              borderBottomRightRadius: City ? 0 : 5,
              borderRadius: 5,
              paddingHorizontal: 20,
              marginVertical: 10,
              marginBottom: 15,
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
                {SelectCity}
              </Text>
              <FontAwesome
                name={City ? 'caret-up' : 'sort-down'}
                size={18}
                color="gray"
              />
            </View>
            {City ? (
              <View>
                <FlatList
                  data={['Karachi', 'NawabShah', 'Sakhar', 'Dera Ghazi Khan']}
                  renderItem={({item, index}) => {
                    if (SelectCity === item) {
                      return;
                    }
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          setSelectCity(item);
                          setCity(false);
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
        </ScrollView>
        <ButtonComponent
          onpress={() => {
            alert('User Registered');
          }}
          style={{
            marginVertical: 10,
            backgroundColor: Colors.buttonColor,
            width: 150,
            alignSelf: 'center',
          }}
          text="Register"
        />
      </View>
    </WrapperContainer>
  );
};

export default Register;

const styles = StyleSheet.create({});
