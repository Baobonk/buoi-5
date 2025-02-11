import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ backgroundColor, titleColor, colorName, onClick, style }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor }, style]}
      onPress={onClick}
    >
      <Text style={{ color: titleColor }}>{colorName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default Button;
