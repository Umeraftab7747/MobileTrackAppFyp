import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {w, h} from 'react-native-responsiveness';
import {AppText} from '../components';
import auth from '@react-native-firebase/auth';

export class Signup extends Component {
  state = {
    SignupEmail: '',
    SignupPassword: '',
    SignupConfirmPassword: '',
  };

  UserSignUp = () => {
    if (this.state.SignupEmail !== '') {
      if (this.state.SignupPassword !== '') {
        if (this.state.SignupPassword === this.state.SignupConfirmPassword) {
          console.log(this.state.auth);
          auth()
            .createUserWithEmailAndPassword(
              this.state.SignupEmail,
              this.state.SignupPassword,
            )
            .then(() => {
              auth().onAuthStateChanged(function (user) {
                user.sendEmailVerification();
                alert('Verify Email and Login');
                this.props.navigation.navigate('Welcome');
              });
            })
            .catch((error) => {
              if (error.code === 'auth/email-already-in-use') {
                alert('That email address is already in use!');
              }
              if (error.code === 'auth/weak-password') {
                alert('PASSWORD MUST CONTAIN 8 character');
              }
              if (error.code === 'auth/invalid-email') {
                alert('That email address is invalid!');
              }
            });
        } else {
          alert('Password and Confirm Password Dont match');
        }
      } else {
        alert('Passowrd is Requried');
      }
    } else {
      alert('Email is Required !');
    }
  };

  render() {
    return (
      <View style={styles.Container}>
        <Text style={styles.LoginText}>SIGNUP</Text>
        <AppText
          name={'mail'}
          placeholder={'Email'}
          onChangeText={(SignupEmail) => {
            this.setState({SignupEmail});
          }}
        />
        <AppText
          name={'lock-closed-sharp'}
          placeholder={'Password'}
          password={true}
          onChangeText={(SignupPassword) => {
            this.setState({SignupPassword});
          }}
        />
        <AppText
          name={'lock-closed-sharp'}
          placeholder={'Confirm Passoword'}
          password={true}
          onChangeText={(SignupConfirmPassword) => {
            this.setState({SignupConfirmPassword});
          }}
        />

        <TouchableOpacity
          onPress={() => {
            this.UserSignUp();
          }}
          style={styles.LoginButton}>
          <Text style={styles.logintext}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Welcome');
          }}
          style={styles.SignupButton}>
          <Text style={styles.Forgotpass}>Already Have Account? Login!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  LoginText: {
    color: 'black',
    fontSize: h('4%'),
    fontWeight: 'bold',
  },
  lowerContainer: {
    // backgroundColor: 'tomato',
    width: w('82%'),
    height: h('5%'),
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: h('2%'),
  },
  Forgotpass: {
    color: 'black',
    fontSize: h('2%'),
    fontWeight: 'bold',
  },
  LoginButton: {
    backgroundColor: 'black',
    width: w('30%'),
    height: h('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: h('1%'),
    marginTop: h('6%'),
  },
  logintext: {
    color: 'white',
    fontSize: h('2.2%'),
    fontWeight: 'bold',
  },
  SignupButton: {
    marginTop: h('4%'),
  },
});
