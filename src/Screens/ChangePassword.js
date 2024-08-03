import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import TextInputComponent from '../Components/TextInputComponent';
import Colors from '../Styles/Colors';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import ButtonComponent from '../Components/ButtonComponent';
import WrapperContainer from '../Components/WrapperContainer';
import Fonts from '../Styles/Fonts';

const ChangePassword = () => {
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  const Donavigation = useNavigation();
  const subheadingFontsize = 16;
  const subheadingFontFamily = Fonts.ComfortaExtraBold;
  return (
    <WrapperContainer>
      <HeaderDrwrCom text={'Change Password'} />
      <View style={{flex: 1, paddingHorizontal: 16, justifyContent: 'center'}}>
        <Text
          style={{
            color: DarkMode ? Colors.textwhite : Colors.textblack,
            fontSize: subheadingFontsize,
            fontFamily: subheadingFontFamily,
          }}>
          Old Password<Text style={{color: 'red'}}> *</Text>
        </Text>
        <TextInputComponent
          placeholder={'Old Password *'}
          placeholderTextColor="gray"
          inputstyle={{height: 40, marginTop: 10}}
          textstyle={{color: DarkMode ? '#fff' : '#000'}}
        />
        <Text
          style={{
            color: DarkMode ? Colors.textwhite : Colors.textblack,
            fontSize: subheadingFontsize,
            fontFamily: subheadingFontFamily,
          }}>
          New Password<Text style={{color: 'red'}}> *</Text>
        </Text>
        <TextInputComponent
          placeholder={'New Password *'}
          placeholderTextColor="gray"
          inputstyle={{height: 40, marginTop: 10}}
          textstyle={{color: DarkMode ? '#fff' : '#000'}}
        />
        <Text
          style={{
            color: DarkMode ? Colors.textwhite : Colors.textblack,
            fontSize: subheadingFontsize,
            fontFamily: subheadingFontFamily,
          }}>
          Confirm New Password<Text style={{color: 'red'}}> *</Text>
        </Text>
        <TextInputComponent
          placeholder={'Confirn New Password *'}
          placeholderTextColor="gray"
          inputstyle={{height: 40, marginTop: 10}}
          textstyle={{color: DarkMode ? '#fff' : '#000'}}
        />
        <ButtonComponent
          onpress={() => {}}
          style={{
            backgroundColor: Colors.buttonColor,
            alignSelf: 'center',
            marginVertical: 20,
          }}
          text="Update"
        />
      </View>
    </WrapperContainer>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});
