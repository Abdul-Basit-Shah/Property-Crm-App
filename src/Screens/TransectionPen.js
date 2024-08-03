import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Colors from '../Styles/Colors';
import TextInputComponent from '../Components/TextInputComponent';
import ButtonComponent from '../Components/ButtonComponent';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import WrapperContainer from '../Components/WrapperContainer';
import Fonts from '../Styles/Fonts';

const TransectionPin = () => {
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  const Donavigation = useNavigation();
  const subheadingFontsize = 16;
  const subheadingFontFamily = Fonts.ComfortaExtraBold;
  return (
    <WrapperContainer>
      <HeaderDrwrCom text={'Transaction Pin'} />

      <View style={{paddingHorizontal: 16, justifyContent: 'center', flex: 1}}>
        <View style={{marginTop: 30}}>
          <Text
            style={{
              color: DarkMode ? Colors.textwhite : Colors.textblack,
              fontSize: subheadingFontsize,
              fontFamily: subheadingFontFamily,
            }}>
            New Transaction Pin<Text style={{color: 'red'}}> *</Text>
          </Text>
          <TextInputComponent
            placeholder={'Enter 4 Digit Transaction Pin *'}
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
            Confirm New Transaction Pin<Text style={{color: 'red'}}> *</Text>
          </Text>
          <TextInputComponent
            placeholder={'Confirn 4 Digit Transaction Pin *'}
            placeholderTextColor="gray"
            inputstyle={{height: 40, marginTop: 10}}
            textstyle={{color: DarkMode ? '#fff' : '#000'}}
          />
        </View>
        <ButtonComponent
          onpress={() => {}}
          style={{
            marginVertical: 50,
            backgroundColor: Colors.buttonColor,
            width: 150,
            alignSelf: 'center',
          }}
          text="Update"
        />
      </View>
    </WrapperContainer>
  );
};

export default TransectionPin;
