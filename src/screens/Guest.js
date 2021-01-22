import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {w, h} from 'react-native-responsiveness';
import {AppText} from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Guest extends Component {
  state = {
    Name: '',
  };

  Login = async () => {
    if (this.state.Name !== '') {
      const value = {
        Name: this.state.Name,
      };
      AsyncStorage.setItem('userData', JSON.stringify(value), () => {
        this.props.navigation.replace('DrawerNavigator');
      });
    } else {
      alert('Name field is empty');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.GuestNameText}> GUEST NAME ! </Text>
        <AppText
          name={'person-circle-outline'}
          placeholder={'Your Name'}
          onChangeText={(Name) => {
            this.setState({Name});
          }}
        />

        <TouchableOpacity
          onPress={() => {
            this.Login();
          }}
          style={styles.LoginButton}>
          <Text style={styles.logintext}>Guest Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  GuestNameText: {
    color: 'black',
    fontSize: h('3%'),
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
});
