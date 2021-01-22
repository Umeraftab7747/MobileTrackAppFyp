/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal} from 'react-native';
import {w, h} from 'react-native-responsiveness';
import {AppText} from '../components';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Welcome extends Component {
  state = {
    Email: '',
    Password: '',
    modalVisible: true,
    ForgotPass: '',
    Name: '',
  };

  componentDidMount = () => {
    AsyncStorage.getItem('userData', (error, data) => {
      const userData = JSON.parse(data);
      if (userData !== null) {
        this.props.navigation.replace('DrawerNavigator');
      } else {
      }
    });
  };

  Login = async () => {
    if (this.state.Name !== '') {
      if (this.state.Email !== '') {
        if (this.state.Password !== '') {
          await auth()
            .signInWithEmailAndPassword(this.state.Email, this.state.Password)
            .then(async (response) => {
              auth().onAuthStateChanged(async (user) => {
                if (user.emailVerified) {
                  const value = {
                    Name: this.state.Name,
                  };
                  AsyncStorage.setItem(
                    'userData',
                    JSON.stringify(value),
                    () => {
                      this.props.navigation.replace('DrawerNavigator');
                    },
                  );
                } else {
                  alert('Email is not Verified');
                }
              });
            })
            .catch((error) => {
              if (error.code === 'auth/wrong-password') {
                alert('This password is Invalid');
              }
              if (error.code === 'auth/user-not-found') {
                alert('This email address not found');
              }
              if (error.code === 'auth/invalid-email') {
                alert('This email address is invalid!');
              }
            });
        } else {
          alert('Password field is empty');
        }
      } else {
        alert('Email field is empty');
      }
    } else {
      alert('Name field is empty');
    }
  };
  render() {
    return (
      <View style={styles.Container}>
        <Text style={styles.LoginText}>LOGIN</Text>
        <AppText
          name={'person-circle-outline'}
          placeholder={'Your Name'}
          onChangeText={(Name) => {
            this.setState({Name});
          }}
        />
        <AppText
          name={'mail'}
          placeholder={'Email'}
          onChangeText={(Email) => {
            this.setState({Email});
          }}
        />
        <AppText
          name={'lock-closed-sharp'}
          placeholder={'Password'}
          password={true}
          onChangeText={(Password) => {
            this.setState({Password});
          }}
        />
        <View style={styles.lowerContainer}>
          <TouchableOpacity>
            <Text style={styles.Forgotpass}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.Login();
          }}
          style={styles.LoginButton}>
          <Text style={styles.logintext}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Signup');
          }}
          style={styles.SignupButton}>
          <Text style={styles.Forgotpass}>Dont Have Account SIGNUP !</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Guest');
          }}
          style={styles.SignupButton}>
          <Text style={styles.Forgotpass}>Login as Guest !</Text>
        </TouchableOpacity>

        {/* modal */}
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
  ModalView: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
