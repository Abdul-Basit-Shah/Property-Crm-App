import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderDrwrCom from '../Components/HeaderDrwrCom';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import TextInputComponent from '../Components/TextInputComponent';
import Colors from '../Styles/Colors';
import ButtonComponent from '../Components/ButtonComponent';
import WrapperContainer from '../Components/WrapperContainer';
import Fonts from '../Styles/Fonts';

const CreateTicket = () => {
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  const Donavigation = useNavigation();
  const subheadingFontsize = 16;
  const subheadingFontFamily = Fonts.ComfortaExtraBold;
  return (
    <WrapperContainer>
      <HeaderDrwrCom text={'Add Ticket'} />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: DarkMode ? Colors.textwhite : Colors.textblack,
            fontSize: subheadingFontsize,
            fontFamily: subheadingFontFamily,
          }}>
          Title<Text style={{color: 'red'}}> *</Text>
        </Text>
        <TextInputComponent
          placeholder={'Title  *'}
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
          Message<Text style={{color: 'red'}}> *</Text>
        </Text>
        <TextInputComponent
          numberOfLines={2}
          placeholder={'Message  *'}
          placeholderTextColor="gray"
          inputstyle={{height: 80, marginTop: 10}}
          textstyle={{color: DarkMode ? '#fff' : '#000'}}
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
            text="Create"
            textstyle={{fontSize: 15}}
          />
          <ButtonComponent
            onpress={() => {}}
            style={{
              backgroundColor: 'red',
            }}
            text="Cancel"
            textstyle={{fontSize: 15}}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default CreateTicket;

const styles = StyleSheet.create({});
