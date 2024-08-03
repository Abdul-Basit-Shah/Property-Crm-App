import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';

import {useSelector} from 'react-redux';
import Icons from '../themes/Icons';

const Header3 = ({text, navigation, istwo, three, Title}) => {
  const isDark = useSelector(state => state?.darkModa?.data);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{margin: 10, width: 20}}
        onPress={() => {
          navigation.goBack();
        }}>
        <Icons.AntDesign name="left" size={30} color={'gray'} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          marginHorizontal: 10,
          fontWeight: '600',
          color: '#000',
        }}>
        {text}
      </Text>
    </View>
  );
};

export default Header3;
