import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Colors from '../Styles/Colors';
import {useSelector} from 'react-redux';
import Fonts from '../Styles/Fonts';

const TextInputComponent = ({
  inputstyle = {},
  textstyle = {},
  value,
  onChangeText,
  placeholder,
  image = false,
  imageonpress = () => {},
  placeholderTextColor = 'gray',
  numberOfLines,
  maxLength,
  RightView,
  secureTextEntry,
  ...props
}) => {
  const DarkMode = useSelector(state => state.Darkmode.Theme);
  return (
    <View
      style={{
        ...styles.inputstyle,
        backgroundColor: DarkMode ? Colors.gray2 : Colors.gray,
        ...inputstyle,
      }}>
      <TextInput
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        numberOfLines={numberOfLines}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor={placeholderTextColor}
        {...props}
        style={{
          ...styles.textstyle,
          color: DarkMode ? '#fff' : '#000',
          fontFamily: Fonts.ComfortaBold,
          ...textstyle,
        }}
      />

      {!!image ? (
        <TouchableOpacity onPress={imageonpress}>
          {/* <Text onPress={onPressSecure} style={{...styles.textstyle, flex: 0}}>
            {securetext}
          </Text> */}
          <Image
            source={{uri: image}}
            style={{...styles.imagestyle, flex: 0}}
          />
        </TouchableOpacity>
      ) : null}
      {!!RightView ? <View>{RightView}</View> : null}
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  inputstyle: {
    height: 52,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',

    marginBottom: 16,
  },
  textstyle: {
    fontSize: 14,

    flex: 1,
    color: Colors.black,
  },
  imagestyle: {
    width: 15,
    height: 15,
  },
});
