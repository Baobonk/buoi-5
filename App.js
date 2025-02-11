import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Button from './components/Button';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [message, setMessage] = useState('');

  const handleClick = (color) => {
    setBackgroundColor(color);
    setMessage(`Button with ${color} color was clicked!`);
    Alert.alert(
      'Button Clicked',
      `Button with ${color} color was clicked!`,
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ]
    );
  };

  const handleReset = () => {
    setBackgroundColor('white');
    setMessage('Background color has been reset!');
    Alert.alert(
      'Reset',
      'Background color has been reset!',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ]
    );
  };

  const colors = [
    { backgroundColor: 'green', titleColor: 'white', colorName: 'green' },
    { backgroundColor: 'red', titleColor: 'white', colorName: 'red' },
    { backgroundColor: 'yellow', titleColor: 'black', colorName: 'yellow' },
    { backgroundColor: 'blue', titleColor: 'white', colorName: 'blue' },
    { backgroundColor: 'brown', titleColor: 'white', colorName: 'brown' },
    { backgroundColor: 'black', titleColor: 'white', colorName: 'black' }
  ];

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text style={styles.title}>Welcome to My App</Text>
      {colors.map((color) => (
        <Button
          key={color.colorName}
          backgroundColor={color.backgroundColor}
          titleColor={color.titleColor}
          colorName={color.colorName}
          onClick={() => handleClick(color.colorName)}
          style={styles.longButton}
        />
      ))}
      <Button
        backgroundColor="grey"
        titleColor="white"
        colorName="Reset"
        onClick={handleReset}
        style={styles.longButton}
      />
      {message && <Text>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  longButton: {
    width: '80%',
    padding: 15,
    margin: 5,
  },
});

export default App;
