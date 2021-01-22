import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, FlatList} from 'react-native';
import {w, h} from 'react-native-responsiveness';

export class Friends extends Component {
  state = {
    DATA: [
      {id: 1, image: require('../assets/eee.jpeg'), name: 'El mehdi'},
      {id: 2, image: require('../assets/sss.jpg'), name: 'Arrad'},
      {id: 3, image: require('../assets/ccv.jpg'), name: 'Clemont '},
      {id: 4, image: require('../assets/sss.jpg'), name: 'Pierre '},
      {id: 5, image: require('../assets/eee.jpeg'), name: 'Ribourt '},
    ],
  };
  renderItem = (item) => (
    <View style={styles.flatlist}>
      <View style={styles.leftFlatList}>
        <View style={styles.imageContainer2}>
          <Image source={item.image} style={styles.image} />
        </View>
      </View>
      <View style={styles.middleflatlist}>
        <Text style={styles.ActiveText3}>{item.name}</Text>
      </View>
    </View>
  );
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.left}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/123.png')}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.middle}>
            <Text style={styles.HeaderText}>PERSONNES</Text>
          </View>
        </View>

        <View style={styles.Activebar}>
          <View style={styles.LeftActive}>
            <View style={styles.active}>
              <Text style={styles.ActiveText}>ACTIFS(26)</Text>
            </View>
          </View>
          <View style={styles.RightActive}>
            <View>
              <Text style={styles.ActiveText2}>STORIES</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={this.state.DATA}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'black',
    width: '100%',
    height: h('8%'),
    flexDirection: 'row',
    borderBottomColor: '#fff1',
    borderBottomWidth: 1,
  },
  left: {
    // backgroundColor: 'red',
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 35,
    height: 35,

    resizeMode: 'contain',
    borderRadius: h('100%'),
  },
  image: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: h('100%'),
  },
  middle: {
    // backgroundColor: 'white',
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderText: {
    color: 'white',
    fontSize: h('2.2%'),
    fontWeight: 'bold',
  },
  Activebar: {
    backgroundColor: 'black',
    width: '100%',
    height: h('7%'),
    flexDirection: 'row',
    marginBottom: h('2%'),
  },
  LeftActive: {
    // backgroundColor: 'green',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  RightActive: {
    // backgroundColor: 'orange',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: '#fff9',
    width: '80%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: h('21%'),
  },
  ActiveText: {
    fontSize: h('2%'),
    color: 'white',
  },
  ActiveText2: {
    fontSize: h('2%'),
    color: '#fff9',
  },
  flatlist: {
    backgroundColor: 'black',
    width: '100%',
    height: h('10%'),
    borderBottomColor: '#fff2',
    borderBottomWidth: 1,
    borderTopColor: '#fff2',
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  leftFlatList: {
    // backgroundColor: 'white',
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleflatlist: {
    // backgroundColor: 'white',
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  imageContainer2: {
    width: 45,
    height: 45,

    resizeMode: 'contain',
    borderRadius: h('100%'),
  },
  ActiveText3: {
    fontSize: h('2.2%'),
    color: 'white',
  },
});
