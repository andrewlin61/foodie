import { StatusBar } from 'expo-status-bar';
import React from 'react';
import SignIn from './Screens/SignIn/SignIn.js';
import Profile from './Screens/Profile/Profile.js';
import Matches from './Screens/Matches/Matches.js';
import Recipe from './Screens/Recipe/Recipe.js';
import Swipe from './Screens/Swipe/Swipe.js';
import Exemple from './Screens/Swipe/test.js';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

function SwipeScreen() {
  return (
    <Swipe/>
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text>Home!</Text>
    // </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Text>Settings!</Text> */}
      <Profile/>
    </View>
  );
}

function MatchesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Text>Settings!</Text> */}
      <Matches/>
    </View>
  );
}

export default function App() {
  return (
    // <Swipe/>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Swipe') {
              iconName = focused ? <Image source={require("./assets/images/fill-17-2.png")}style={styles.item2Image}/> : <Image source={require("./assets/images/fill-17.png")}style={styles.item2Image}/>;
            } else if (route.name === 'Settings') {
              iconName = focused ? <Image source={require("./assets/images/group-5-3.png")}style={styles.item2Image}/> : <Image source={require("./assets/images/group-5-2.png")}style={styles.item2Image}/>;
            } else if (route.name === 'Matches') {
              iconName = focused ? <Image source={require("./assets/images/item-2.png")}style={styles.item2Image}/> : <Image source={require("./assets/images/item-2-2.png")}style={styles.item2Image}/>;
            }

            // You can return any component that you like here!
            // return <Ionicons name={iconName} size={size} color={color} />;
            return iconName;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Swipe" component={SwipeScreen} />
        <Tab.Screen name="Matches" component={MatchesScreen} />
        <Tab.Screen name="Settings" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
