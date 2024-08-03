import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../Styles/Colors';
import {useSelector} from 'react-redux';

const WrapperContainer = ({style = {}, children}) => {
  const DarkMode = useSelector(state => state.Darkmode.Theme);

  return (
    <View
      style={{
        ...styles.Container,
        ...style,
        backgroundColor: DarkMode ? Colors.themecolors1 : Colors.white,
      }}>
      <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>
    </View>
  );
};

export default WrapperContainer;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});
