import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Square = ({ text }) => (
  <View style={styles.square}>
    <Text>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: '#03fc6f',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Square;
