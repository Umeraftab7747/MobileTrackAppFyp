import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {w, h} from 'react-native-responsiveness';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import PolyLine from '@mapbox/polyline';

export class Maps extends Component {
  state = {
    error: null,
    destination: '',
    location: {
      latitude: 0,
      longitude: 0,
    },
    pointCoords: [],
  };
  componentDidMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        });
        this.getRouteDirections();
        // console.warn(this.state.location);
      },
      (error) => {
        this.setState({error: error.message});
        // console.warn(error);s
      },
      {enableHighAccuracy: true},
    );
  }
  async getRouteDirections(destinationPlaceId, destinationName) {
    try {
      const startloc = '44.858,-0.5326';
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${this.state.location.latitude}, ${this.state.location.longitude}&destination=${startloc}&key=AIzaSyD20OffxJ-p1xgD_aVZbHfjwjri3GJJxew`,
      );

      const json = await response.json();

      const points = PolyLine.decode(json.routes[0].overview_polyline.points);
      const Coords = points.map((point) => {
        return {latitude: point[0], longitude: point[1]};
      });
      this.setState({
        pointCoords: Coords,
      });
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          showsUserLocation={true}
          style={styles.map}
          region={{
            latitude: this.state.location.latitude,
            longitude: this.state.location.longitude,
            latitudeDelta: 0.00215,
            longitudeDelta: 0.0001,
          }}>
          <Polyline
            coordinates={this.state.pointCoords}
            strokeWidth={4}
            strokeColor="red"
          />
          <Marker
            coordinate={{latitude: 44.858, longitude: -0.5326}}
            image={require('../assets/gg.png')}
            title="4 pierre curie cenon 33150 France"
            // description="4 pierre curie cenon 33150 France"
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});