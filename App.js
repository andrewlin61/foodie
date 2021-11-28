import { StatusBar } from 'expo-status-bar';
import React from 'react';
import SignIn from './Screens/SignIn.js';
import SignUp from './Screens/SignUp.js';
import Profile from './Screens/Profile/Profile.js';
import Matches from './Screens/Matches/Matches.js';
import Recipe from './Screens/Recipe/Recipe.js';
import Swipe from './Screens/Swipe/Swipe.js';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Button, KeyboardAvoidingView, Keyboard, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()


function SignInScreen({ navigation }) {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={true}>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.signInView}>
          <Image source={require("./assets/images/bitmap-3.png")}
            style={styles.logoImage}/>
          <View style={styles.editTextIconView}>
            <TextInput
              pointerEvents="box-none"
              style={{
                width: 113,
                height: 23,
                marginLeft: 8,
                flexDirection: "row",
                alignItems: "flex-start",
              }}
              placeholder="Email"/>
            </View>
          <View style={styles.editTextIconView}>
            <TextInput 
              secureTextEntry={true} 
              pointerEvents="box-none"
              style={{
                flex: 1,
                height: 23,
                marginLeft: 8,
                flexDirection: "row",
                alignItems: "flex-start",
              }}
              placeholder="Password"/>
            </View>

          <View style={styles.loginBtn}>
          <Button
              color="white"
              type="solid"
              title="LOGIN"
              onPress={() => navigation.reset({ index: 0, routes: [{name: "Home"}]
              })
            }
            />
          </View>
          <TouchableOpacity style={styles.signUpText}>
            <Button 
                onPress={() => navigation.navigate("SignUp")}
                title="Don't have an account? Sign Up"
              />
              </TouchableOpacity>

        </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
  );
}

function SignUpScreen({ navigation }) {
  return (
    <View style={styles.signInView}>
      <Image source={require("./assets/images/bitmap-3.png")}
        style={styles.logoImage2}/>
      <View style={styles.editTextIconView}>
        <TextInput
          pointerEvents="box-none"
          style={{
            width: 113,
            height: 23,
            marginLeft: 8,
            flexDirection: "row",
            alignItems: "flex-start",
          }}
          placeholder="Email"/>
        </View>
      <View style={styles.editTextIconView}>
        <TextInput
          secureTextEntry={true} 
          pointerEvents="box-none"
          style={{
            width: 113,
            height: 23,
            marginLeft: 8,
            flexDirection: "row",
            alignItems: "flex-start",
          }}
          placeholder="Password"/>
        </View>
        <View style={styles.editTextIconView}>
        <TextInput
          secureTextEntry={true} 
          pointerEvents="box-none"
          style={{
            width: 113,
            height: 23,
            marginLeft: 8,
            flexDirection: "row",
            alignItems: "flex-start",
          }}
          placeholder="Confirm Password"/>
        </View>
      

      <TouchableOpacity style={styles.loginBtn}>
        <Button color="#FFFFFF"
            onPress={() => navigation.reset({ index: 0, routes: [{name: "Home"}]})}
            title="SIGN UP"
          />
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpText}>
        <Button 
            onPress={() => navigation.navigate("Login")}
            title="Already have an account? Login"
          />
          </TouchableOpacity>

    </View>
  );
}

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

function Home() {
  return (
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
        <Tab.Screen name="Swipe" component={SwipeScreen}  options={{header: () => null}} />
        <Tab.Screen name="Matches" component={MatchesScreen} options={{header: () => null}} />
        <Tab.Screen name="Settings" component={ProfileScreen} options={{header: () => null}} />
      </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome!">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Welcome!" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{header: () => null}} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAC898',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInView: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "center",
	},
	logoImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "stretch",
		width: null,
		height: 300,
		marginTop: 20,
	},
  logoImage2: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "stretch",
		width: null,
		height: 300,
		marginTop: 50,
	},
	editTextIconView: {
		width:"80%",
		backgroundColor:"#FAD7A0",
		borderRadius:25,
		height:50,
		marginTop:20,
		justifyContent:"center",
		padding:20
	},
	loginBtn: {
		width:"80%",
    	backgroundColor:"#fb5b5a",
		borderRadius:25,
		height:50,
		alignItems:"center",
		justifyContent:"center",
		marginTop:40,
		marginBottom:10
	},
	loginText: {
		color: "white",
	},
	forgotPasswordText: {
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 164,
		marginTop: 10,
	},
	signUpText: {
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 200,
		marginTop: 50,
	},
	loginfbView: {
		backgroundColor: "transparent",
		width: 232,
		height: 58,
		marginBottom: 131,
	},
	facebookImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
	},
	signInWithFacebookText: {
		color: "white",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 166,
		marginTop: 3,
	},
});