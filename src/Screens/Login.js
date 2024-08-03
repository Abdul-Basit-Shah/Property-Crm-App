import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import TextInputComponent from '../Components/TextInputComponent';
import ButtonComponent from '../Components/ButtonComponent';
import NavigationStrings from '../Navigations/NavigationStrings';
import WrapperContainer from '../Components/WrapperContainer';
import ModalComponent from '../Components/ModalComponent';
import {useDispatch, useSelector} from 'react-redux';
import {isdark} from '../Store/Actions/Sign';
import Colors from '../Styles/Colors';
import Fonts from '../Styles/Fonts';

const Login = ({navigation}) => {
  const [show, setshow] = useState(false);
  const [value, setvalue] = useState(false);
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  const dispatch = useDispatch();
  return (
    <WrapperContainer>
      <View style={{padding: 20}}>
        <TouchableOpacity
          onPress={() => {
            setshow(true);
          }}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3019/3019014.png',
            }}
            style={{
              width: 30,
              height: 30,
              alignSelf: 'flex-end',
              tintColor: DarkMode ? '#fff' : '#000',
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: Fonts.MonstBold,
            fontSize: 25,
            color: DarkMode ? Colors.textwhite : Colors.textblack,
            marginTop: 10,
          }}>
          Login to
        </Text>
        <View style={{marginTop: 30}}>
          <Text
            style={{
              color: DarkMode ? Colors.textwhite : Colors.textblack,
              fontSize: 15,
              fontFamily: Fonts.ComfortaExtraBold,
            }}>
            Username or E-mail Address<Text style={{color: 'red'}}> *</Text>
          </Text>
          <TextInputComponent
            placeholder={'Username or E-mail Address'}
            placeholderTextColor="gray"
            inputstyle={{height: 40, marginTop: 10}}
            textstyle={{color: DarkMode ? '#fff' : '#000'}}
          />
        </View>
        <View style={{}}>
          <Text
            style={{
              color: DarkMode ? Colors.textwhite : Colors.textblack,
              fontSize: 15,
              fontFamily: Fonts.ComfortaExtraBold,
            }}>
            Password<Text style={{color: 'red'}}> *</Text>
          </Text>
          <TextInputComponent
            placeholder={'Password'}
            inputstyle={{height: 40, marginVertical: 10}}
            textstyle={{color: DarkMode ? '#fff' : '#000'}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{}}>
            <TouchableOpacity
              onPress={() => {
                setvalue(!value);
              }}
              activeOpacity={0.9}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderWidth: 1,
                  borderRadius: 2,
                  backgroundColor: '#fff',
                }}>
                {value ? (
                  <Image
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/512/5291/5291032.png',
                    }}
                    style={{width: 18, height: 18, alignSelf: 'center'}}
                  />
                ) : null}
              </View>

              <Text
                style={{
                  fontSize: 13,
                  marginHorizontal: 5,
                  color: DarkMode ? Colors.textwhite : Colors.textblack,
                  fontFamily: Fonts.ComfortaBold,
                }}>
                Rememder me
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              textDecorationLine: 'underline',
              color: DarkMode ? Colors.textwhite : Colors.textblack,
              fontFamily: Fonts.ComfortaBold,
              fontSize: 13,
            }}>
            Forgot Password
          </Text>
        </View>
        <ButtonComponent
          onpress={() => {
            navigation.navigate(NavigationStrings.MY_DRAWER);
          }}
          style={{marginTop: 50, backgroundColor: Colors.buttonColor}}
          text="Sign In"
        />
        <Text
          style={{
            marginTop: 15,
            alignSelf: 'center',
            fontSize: 14,
            color: DarkMode ? Colors.textwhite : Colors.textblack,
            fontFamily: Fonts.ComfortaExtraBold,
          }}>
          Don't have an account yet?{' '}
          <Text
            onPress={() => {
              navigation.navigate(NavigationStrings.BASIC_INFORMATION);
            }}
            style={{
              textDecorationLine: 'underline',
              fontFamily: Fonts.ComfortaBold,
            }}>
            Sign Up!
          </Text>
        </Text>
        <ModalComponent
          style={{justifyContent: 'flex-end', margin: 0}}
          isVisible={show}
          onBackdropPress={() => {
            setshow(false);
          }}>
          <View style={{minHeight: 200, backgroundColor: '#fff', padding: 20}}>
            <Text
              style={{
                fontSize: 18,
                color: '#000',
                fontFamily: Fonts.MonstBold,
              }}>
              {' '}
              Day/Night theme
            </Text>
            <View style={{marginTop: 10, paddingHorizontal: 15}}>
              <TouchableOpacity
                onPress={() => {
                  if (DarkMode === false) {
                    dispatch(isdark(true));
                  }
                }}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#000',
                    fontFamily: Fonts.ComfortaBold,
                  }}>
                  Night Dark
                </Text>
                <View
                  activeOpacity={0.9}
                  style={{
                    width: 20,
                    height: 20,
                    borderWidth: 1,
                    borderRadius: 2,
                  }}>
                  {DarkMode === true ? (
                    <Image
                      source={{
                        uri: 'https://cdn-icons-png.flaticon.com/512/5291/5291032.png',
                      }}
                      style={{width: 18, height: 18, alignSelf: 'center'}}
                    />
                  ) : null}
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (DarkMode === true) {
                    dispatch(isdark(false));
                  }
                }}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#000',
                    fontFamily: Fonts.ComfortaBold,
                  }}>
                  Day Light
                </Text>
                <View
                  activeOpacity={0.9}
                  style={{
                    width: 20,
                    height: 20,
                    borderWidth: 1,
                    borderRadius: 2,
                  }}>
                  {DarkMode === false ? (
                    <Image
                      source={{
                        uri: 'https://cdn-icons-png.flaticon.com/512/5291/5291032.png',
                      }}
                      style={{width: 18, height: 18, alignSelf: 'center'}}
                    />
                  ) : null}
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ModalComponent>
      </View>
    </WrapperContainer>
  );
};

export default Login;

const styles = StyleSheet.create({});
