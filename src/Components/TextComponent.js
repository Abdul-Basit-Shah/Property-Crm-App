import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../Styles/Colors';

import {useSelector} from 'react-redux';

const TextComponent = ({text = '', style = {}, children, ...props}) => {
  const DarkMode = useSelector(state => state.Darkmode.Theme);

  return (
    <View>
      <Text
        style={{
          ...styles.textstyle,
          ...style,
          color: DarkMode ? Colors.white : Colors.black,
        }}>
        {text} {children}
      </Text>
    </View>
  );
};

export default TextComponent;

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 12,
  },
});
