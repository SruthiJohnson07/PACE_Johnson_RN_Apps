import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Bio</Text>
      <Text>Name: Sruthi Johnson</Text>
      <Text>Email: sruthijohnsonofficial@gmail.com</Text>
      <Text>Mob : 4317922883</Text>
      <Text>Interests: Coding, Reading, Listen to Music</Text>
      <Text>Skills: React Native, JavaScript, Git, SQL</Text>
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
