import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDrawerProgress} from '@react-navigation/drawer';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

const DrawerSceneAnimated = ({children}) => {
  const progress = useDrawerProgress();
  const AnimatedResult = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [1, 0.8]);
    const borderRadius = interpolate(progress.value, [0, 1], [0, 40]);
    return {
      transform: [{scale}],
      borderRadius,
    };
  });

  return (
    <Animated.View style={[styles.MainView, AnimatedResult]}>
      {children}
    </Animated.View>
  );
};

export default DrawerSceneAnimated;

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
  },
});
