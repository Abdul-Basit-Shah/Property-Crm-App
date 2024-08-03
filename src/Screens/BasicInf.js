import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../Styles/Colors';
import TextInputComponent from '../Components/TextInputComponent';
import ButtonComponent from '../Components/ButtonComponent';
import NavigationStrings from '../Navigations/NavigationStrings';
import WrapperContainer from '../Components/WrapperContainer';
import {useSelector} from 'react-redux';
import Fonts from '../Styles/Fonts';

const BasicInf = ({navigation}) => {
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  const subheadingFontsize = 16;
  const subheadingFontFamily = Fonts.ComfortaExtraBold;
  return (
    <WrapperContainer>
      <View style={{padding: 20, flex: 1}}>
        <View
          style={{
            height: 45,
            backgroundColor: Colors.buttonColor,
            marginTop: 30,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              fontWeight: '600',
              color: Colors.white,
              marginVertical: 7,
              fontFamily: Fonts.MonstBold,
            }}>
            Basic Information
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View>
            <View>
              <Text
                style={{
                  color: DarkMode ? Colors.textwhite : Colors.textblack,
                  fontSize: subheadingFontsize,
                  fontFamily: subheadingFontFamily,
                }}>
                First Name<Text style={{color: 'red'}}> *</Text>
              </Text>
              <TextInputComponent
                placeholder={'First Name'}
                inputstyle={{width: 160, height: 45, marginTop: 10}}
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
                placeholder={'Mobile Number'}
                inputstyle={{width: 160, height: 45, marginTop: 10}}
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
                inputstyle={{width: 160, height: 45, marginTop: 10}}
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
                inputstyle={{width: 160, height: 45, marginTop: 10}}
              />
            </View>
          </View>
          <View>
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
                inputstyle={{width: 160, height: 45, marginTop: 10}}
              />
            </View>
            <View>
              <Text
                style={{
                  color: DarkMode ? Colors.textwhite : Colors.textblack,
                  fontSize: subheadingFontsize,
                  fontFamily: subheadingFontFamily,
                }}>
                NIC Number <Text style={{color: 'red'}}> *</Text>
              </Text>
              <TextInputComponent
                placeholder={'NIC Number'}
                inputstyle={{width: 160, height: 45, marginTop: 10}}
              />
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
                inputstyle={{width: 160, height: 45, marginTop: 10}}
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
                inputstyle={{width: 160, height: 45, marginTop: 10}}
              />
            </View>
          </View>
        </View>
        <ButtonComponent
          onpress={() => {
            navigation.navigate(NavigationStrings.MORE_INFORMATION);
          }}
          style={{
            width: 100,
            alignSelf: 'flex-end',
            backgroundColor: Colors.buttonColor,
          }}
          text="Next"
          textstyle={{fontSize: 18, fontWeight: '600'}}
        />
        <Text
          style={{
            fontSize: 18,
            fontFamily: Fonts.ComfortaExtraBold,
            color: DarkMode ? '#fff' : Colors.black,
            alignSelf: 'center',
            marginTop: 20,
          }}>
          Already have an account?{' '}
          <Text
            onPress={() => {
              navigation.navigate(NavigationStrings.LOGIN);
            }}
            style={{
              textDecorationLine: 'underline',
              fontFamily: Fonts.ComfortaBold,
            }}>
            Sign In
          </Text>
        </Text>
      </View>
    </WrapperContainer>
  );
};

export default BasicInf;

const styles = StyleSheet.create({});
