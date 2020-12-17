import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {w, h} from 'react-native-responsiveness';

export class Welcome extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text>Welcome Screen 2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
