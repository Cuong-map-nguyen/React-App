import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

class MapDetail extends Component {
  	constructor(props) {
    	super(props);
    	this.state = {
      		region:{
				latitude:16.0364827,
				longitude:108.2182046,
				latitudeDelta:0.1,
				longitudeDelta:0.1,
      		},
      		error: null,
      		marker:{
				latitude:16.0364827,
				longitude:108.2182046,
      		}
    	};
  	}

  	componentWillMount() {
    	navigator.geolocation.getCurrentPosition(
      		(position) => {
        		this.setState({
          			region:{
						latitude:position.coords.latitude,
						longitude:position.coords.longitude,
						latitudeDelta:0.001,
						longitudeDelta:0.001,
          			},
          			error: null,
          			marker:{
						latitude:position.coords.latitude,
						longitude:position.coords.longitude,
          			}
        		});
      		},
      		(error) => this.setState({ error: error.message }),
      		{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    	);
  	}
  	render() {
    	return (
			<MapView style={styles.map} initialRegion={this.state.region}>
				<MapView.Marker 
					title={'Bạn đang ở đây'}
					description={'63 Phan Đăng Lưu, Hòa Cường Nam, Hải Châu, Đà Nẵng'}
					ref={marker => { this.marker = marker }}
					coordinate={this.state.marker}
				/>
			</MapView>
    	);
  	}
}

const styles = StyleSheet.create({
  	map: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
  	},
});

export default MapDetail;