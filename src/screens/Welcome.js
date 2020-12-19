import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {w, h} from 'react-native-responsiveness';
import {AppText} from '../components';

export class Welcome extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text style={styles.LoginText}>LOGIN</Text>
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
          onChangeText={(Password) => {
            this.setState({Password});
          }}
        />
        <View style={styles.lowerContainer}>
          <TouchableOpacity>
            <Text style={styles.Forgotpass}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>
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
});
