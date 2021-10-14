import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import 'firebase/firestore';
import firebase from 'firebase';
import { Button } from 'react-native-elements';
class SignUpScreen extends React.Component {
  state = { displayName: '', email: '', password: '', errorMessage: '', loading: false };
  onLoginSuccess() {
    this.props.navigation.navigate('App');
  }
  onLoginFailure(errorMessage) {
    this.setState({ error: errorMessage, loading: false });
  }
  renderLoading() {
    if (this.state.loading) {
      return (
        <View>
          <ActivityIndicator size={'large'} />
        </View>
      );
    }
  }
  async signInWithEmail() {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onLoginSuccess.bind(this))
      .then( () => {
        const user = firebase.auth().currentUser;
        return user.updateProfile({
          displayName: this.state.displayName
        })
      })
      .catch(error => {
          let errorCode = error.code;
          let errorMessage = error.message;
          if (errorCode == 'auth/weak-password') {
              this.onLoginFailure.bind(this)('Weak Password!');
          } else {
              this.onLoginFailure.bind(this)(errorMessage);
          }
      });
  }
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.titleContainerStyle}>
              <Text style={styles.pageTitleStyle}>Cadence</Text>
            </View>
            <View style={styles.formContainerStyle}>
              <TextInput
                style={styles.textInputStyle}
                placeholder="Name"
                returnKeyType="next"
                textContentType="name"
                value={this.state.displayName}
                onChangeText={displayName => this.setState({ displayName })}
              />
              <TextInput
                style={styles.textInputStyle}
                placeholder="Email"
                returnKeyType="next"
                keyboardType="email-address"
                textContentType="emailAddress"
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
              <TextInput
                style={styles.textInputStyle}
                placeholder="Password"
                returnKeyType="done"
                textContentType="newPassword"
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
            </View>
            {this.renderLoading()}
            <Text
              style={{
                fontSize: 18,
                textAlign: 'center',
                color: 'red',
                width: '80%'
              }}
            >
              {this.state.error}
            </Text>
            <View style={styles.signInButtonContainerStyle}>
              <Button 
                onPress={() => this.signInWithEmail()}
                buttonStyle={styles.loginButton}
                title="Sign Up"
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Text
                style={{ fontWeight: '200', fontSize: 17, textAlign: 'center' }}
                onPress={() => {
                  this.props.navigation.navigate('SignIn');
                }}
              >
                Already have an account?
              </Text>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#E0E0E0"
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  },
  loginButton: {
    backgroundColor: "#5DB075",
    width: 343,
    borderRadius: 20,
    marginTop: 10
  },
  textInputStyle: {
    backgroundColor: "#FFFFFF",
    width: 343,
    height: 50,
    borderRadius: 7,
    margin: 7,
    paddingLeft: 15
  },
  headerTitleStyle: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: "700",
  },
  headerContainerStyle: {
    height: 100,
    justifyContent: 'center',
  },
  pageTitleStyle: {
    textAlign: 'center',
    fontSize:72,
    lineHeight: 84,
    fontWeight:"normal",
    fontStyle: "italic",
  },
  formContainerStyle: {
    height: 200,
  },
  signInButtonContainerStyle: {
    height: 100,

  },
  titleContainerStyle: {
    height: 150,
    paddingTop:30,
  },
});
export default SignUpScreen;