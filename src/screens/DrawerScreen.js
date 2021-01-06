/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {w, h} from 'react-native-responsiveness';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class DrawerScreen extends Component {
  state = {
    Name: '',
  };

  componentDidMount = () => {
    AsyncStorage.getItem('userData', (error, data) => {
      const userData = JSON.parse(data);
      if (userData !== null) {
        this.setState({
          Name: userData.Name,
        });
      } else {
        console.warn('No data found');
      }
    });
  };

  removeData = () => {
    AsyncStorage.removeItem('userData', () => {
      this.props.navigation.replace('Welcome');
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'#000'} />
        <SafeAreaView />
        <View style={styles.name}>
          <View style={styles.leftr}>
            <Text style={styles.ntxt}>Name: {this.state.Name} </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.removeData();
          }}
          style={[
            styles.ItemView,
            {
              marginTop: h('70.3%'),
              borderWidth: h('0.1'),
            },
          ]}>
          <View style={styles.iconContainer}>
            <Icon
              name={'log-out-outline'}
              type={'ionicon'}
              color={'#fff'}
              size={h('4%')}
            />
          </View>
          <View style={styles.txtContainer}>
            <Text style={[styles.txt, {fontWeight: 'bold'}]}>LOGOUT</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ItemView: {
    height: h('8%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: h('0.05%'),
    borderColor: '#000',
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  txt: {
    fontSize: h('2.5%'),
    marginLeft: h('5%'),
    color: '#000',
  },
  name: {
    height: h('18%'),

    borderBottomWidth: h('0.05%'),
    backgroundColor: '#000',
    flexDirection: 'row',
  },
  ntxt: {
    fontSize: h('2%'),
    color: '#fff',
    marginTop: h('6%'),
    // marginRight: h('12%'),
    fontWeight: 'bold',
  },
  leftc: {
    backgroundColor: 'yellow',
    width: h('20%'),
    height: h('18%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftr: {
    width: h('41%'),
    height: h('18%'),

    paddingLeft: h('2%'),
  },
  dtxt: {fontSize: h('1.5%'), color: '#fff'},
  img: {
    resizeMode: 'center',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    borderRadius: h('10%'),
  },
  imgC: {
    backgroundColor: 'white',
    width: '60%',
    height: '66%',
    borderRadius: h('20%'),
  },
  txtContainer: {
    // backgroundColor: 'green',
    width: '80%',
    height: '100%',
    justifyContent: 'center',
  },
  iconContainer: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    // backgroundColor: 'red',
    alignItems: 'center',
    marginTop: 'auto',
  },
});
