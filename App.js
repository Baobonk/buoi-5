import React from 'react';
import { View, StyleSheet } from 'react-native';
import Square from './components/square';

const App = () => {
  return (
    <View style={styles.container}>
      <Square text="Hello, world" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
