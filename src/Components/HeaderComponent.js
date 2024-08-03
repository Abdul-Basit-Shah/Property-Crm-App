import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const HeaderComponent = ({
  Containerstyle = {},
  image,
  imagestyle = {},
  text = '',
  textstyle = {},
  Rightimage,
  Righviewstyle,
  Rightimagestyle = {},
  Righviewtext = '',
  Righttextstyle = {},
}) => {
  return (
    <View style={{...styles.Container, Containerstyle}}>
      <TouchableOpacity style={{flex: 1}}>
        <Image
          source={{
            uri: image,
          }}
          style={{imagestyle, ...styles.BackLogo}}
        />
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <Text style={{...styles.textstyle, textstyle}}>{text}</Text>
      </View>
      {!!Rightimage ? (
        <View style={{...styles.Righviewstyle, Righviewstyle}}>
          <Text style={{...styles.Righttextstyle, Righttextstyle}}>
            {Righviewtext}
          </Text>
          <Image
            source={{
              uri: Rightimage,
            }}
            style={{...styles.Rightimagestyle, Rightimagestyle}}
          />
        </View>
      ) : null}
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  Container: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  BackLogo: {
    width: 25,
    height: 25,
  },
  Rightimagestyle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginTop: -2,
  },
  Righviewstyle: {
    width: 80,
    height: 25,
    borderRadius: 20,
    backgroundColor: '#bff4bf',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Righttextstyle: {
    fontWeight: 'bold',
    color: 'green',
    paddingLeft: 8,
    marginVertical: 2,
  },
  textstyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    right: 20,
  },
});
