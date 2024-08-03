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
import Fonts from '../Styles/Fonts';

const HeaderDrwrCom = ({text}) => {
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  const Donavigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <View
        style={{
          height: 52,
          flexDirection: 'row',
          alignItems: 'center',
          elevation: 3,
          paddingHorizontal: 16,
          backgroundColor: DarkMode ? Colors.themecolors1 : '#fff',
        }}>
        <TouchableOpacity
          onPress={() => {
            Donavigation.goBack();
          }}>
          <Icons.Ionicons
            name="arrow-back"
            size={30}
            color={DarkMode ? '#fff' : '#000'}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 20,

            fontFamily: Fonts.MonstBold,
            color: DarkMode ? '#fff' : '#000',
            marginHorizontal: 20,
          }}>
          {text}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HeaderDrwrCom;

const styles = StyleSheet.create({});
