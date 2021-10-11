import { StatusBar } from 'expo-status-bar';
import React from 'react';
import SignIn from './Screens/SignIn/SignIn.js';
import Profile from './Screens/Profile/Profile.js';
import Matches from './Screens/Matches/Matches.js';
import Recipe from './Screens/Recipe/Recipe.js';
import Swipe from './Screens/Swipe/Swipe.js';
import Exemple from './Screens/Swipe/test.js';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Swipe/>
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
