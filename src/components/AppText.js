import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Animated} from 'react-native';
import {h} from 'react-native-responsiveness';
import {Icon} from 'react-native-elements';

export class AppText extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.icon}>
          <Icon
            name={this.props.name}
            type="ionicon"
            color={'#000'}
            size={25}
          />
        </View>
        <TextInput
          {...this.props}
          style={styles.txtinput}
          placeholder={this.props.placeholder}
          placeholderTextColor={'#000'}
          keyboardType={this.props.keyboardType}
          secureTextEntry={this.props.password}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff5',
    width: '85%',
    height: h('7%'),
    borderRadius: h('1.5%'),
    flexDirection: 'row',
    marginTop: h('1%'),
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  txtinput: {
    // backgroundColor: 'tomato',
    width: '85%',
    height: h('7%'),
    paddingLeft: h('1.5%'),
    color: '#000',
  },
  icon: {
    // backgroundColor: 'red',
    width: '15%',
    height: h('7%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
