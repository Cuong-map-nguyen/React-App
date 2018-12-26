import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        region : {
          latitude : 16.0367585, 
          longitude: 108.2194586,
          latitudeDelta : 0.001,
          longitudeDelta: 0.001,
        }
    };
  }
  
  onRegionChange(data){
    console.log(data)
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Text> textInComponent </Text>
        <MapView style={{flex:1}} showsUserLocation={true} onRegionChange={this.onRegionChange.bind(this)}>
        <MapView.Marker  title={'toi o day'} description={'mo ta'} coordinate={this.state.region} />
        </MapView>
      </View>
    );
  }
}
