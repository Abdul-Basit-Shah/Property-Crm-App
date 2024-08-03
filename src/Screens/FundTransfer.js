import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Colors from '../Styles/Colors';
import Icons from '../themes/Icons';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import ButtonComponent from '../Components/ButtonComponent';
import TextInputComponent from '../Components/TextInputComponent';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import BasicInf from './BasicInf';
import WrapperContainer from '../Components/WrapperContainer';
import Fonts from '../Styles/Fonts';

const FundTransfer = () => {
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  const subheadingFontsize = 16;
  const subheadingFontFamily = Fonts.ComfortaExtraBold;

  return (
    <WrapperContainer>
      <View style={{paddingHorizontal: 16, flex: 1, justifyContent: 'center'}}>
        <Text
          style={{
            color: DarkMode ? Colors.textwhite : Colors.textblack,
            fontSize: subheadingFontsize,
            fontFamily: subheadingFontFamily,
            marginVertical: 10,
          }}>
          Total Balance<Text style={{color: 'red'}}> *</Text>
        </Text>
        <ButtonComponent
          style={{
            paddingHorizontal: 0,
            backgroundColor: DarkMode ? Colors.gray2 : Colors.gray,
          }}
          textstyle={{color: DarkMode ? '#fff' : '#000', marginHorizontal: 16}}
          text="1,784,068.86"
          RighView={
            <ButtonComponent
              text="$"
              style={{backgroundColor: Colors.buttonColor}}
            />
          }
        />
        <Text
          style={{
            color: DarkMode ? Colors.textwhite : Colors.textblack,
            fontSize: subheadingFontsize,
            fontFamily: subheadingFontFamily,
            marginVertical: 10,
          }}>
          Transfer Amount<Text style={{color: 'red'}}> *</Text>
        </Text>
        <TextInputComponent
          placeholder={'0.00'}
          inputstyle={{
            paddingHorizontal: 0,
            paddingLeft: 16,
            marginBottom: 0,
          }}
          textstyle={{color: DarkMode ? Colors.white : Colors.black}}
          RightView={
            <ButtonComponent
              text="Minimum"
              style={{backgroundColor: Colors.buttonColor}}
            />
          }
        />
        <Text
          style={{
            color: DarkMode ? Colors.textwhite : Colors.textblack,
            fontSize: subheadingFontsize,
            fontFamily: subheadingFontFamily,
            marginVertical: 10,
          }}>
          Send To (User ID)<Text style={{color: 'red'}}> *</Text>
        </Text>
        <TextInputComponent
          placeholder={'appadmin'}
          inputstyle={{paddingHorizontal: 0, paddingLeft: 16, marginBottom: 0}}
          RightView={
            <ButtonComponent
              text="Check"
              style={{backgroundColor: Colors.buttonColor}}
            />
          }
        />
        <Text
          style={{
            color: DarkMode ? Colors.textwhite : Colors.textblack,
            fontSize: subheadingFontsize,
            fontFamily: subheadingFontFamily,
            marginVertical: 10,
          }}>
          Transaction Pin<Text style={{color: 'red'}}> *</Text>
        </Text>
        <TextInputComponent placeholder={'Enter Pin'} secureTextEntry={true} />
        <ButtonComponent
          style={{alignSelf: 'center', marginVertical: 50}}
          text="Fund Transfer"
        />
      </View>
    </WrapperContainer>
  );
};

export default FundTransfer;

const styles = StyleSheet.create({});
