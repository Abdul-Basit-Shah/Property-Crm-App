import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../Styles/Colors';
import {useSelector} from 'react-redux';
import Fonts from '../Styles/Fonts';

const ButtonComponent = ({
  onpress = () => {},
  text = '',
  style = {},
  Rightimage = null,
  textstyle = {},
  imagestyle = {},
  LeftView = null,
  AdditionalView,
  RighView,
}) => {
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  return (
    <TouchableOpacity onPress={onpress} activeOpacity={0.7}>
      <View
        style={{
          ...styles.Container,
          backgroundColor: DarkMode ? Colors.gray2 : Colors.buttonColor,
          ...style,
        }}>
        {Rightimage || LeftView || RighView ? null : <View />}
        {LeftView ? <View>{LeftView}</View> : null}
        <Text
          style={{
            ...styles.textstyle,
            fontFamily: Fonts.MonstBold,
            ...textstyle,
          }}>
          {text}
        </Text>

        {!!Rightimage ? (
          <Image
            source={{uri: Rightimage}}
            style={{...styles.imagestyle, ...imagestyle}}
          />
        ) : (
          <View />
        )}
        {!!RighView ? <View>{RighView}</View> : null}
      </View>
      <View>{AdditionalView}</View>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  Container: {
    height: 52,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  textstyle: {
    fontSize: 16,
    color: Colors.white,
  },
  imagestyle: {
    width: 10,
    height: 10,
    tintColor: 'gray',
  },
});
