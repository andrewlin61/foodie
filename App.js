import { StatusBar } from 'expo-status-bar';
import React from 'react';
import SignIn from './Screens/SignIn/SignIn.js';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SignIn/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
