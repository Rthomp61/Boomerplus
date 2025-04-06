import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Boomer+!</Text>
      <Text style={styles.instructions}>Your Medication Reminder App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  welcome: {
    fontSize: 24,
    margin: 10,
    fontWeight: 'bold',
  },
  instructions: {
    fontSize: 16,
    margin: 5,
  },
});

