/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

// import styles from './styles';
type Props = {};

export default class State extends Component<Props> {

	constructor(props) {
	  super(props);

	  this.state = {
	  	numberlucky : 999
	  };
	}

	clickme() {
		Alert.alert('click me + 1') ;
		this.setState({
			numberlucky : this.state.numberlucky + 1
		});
	}

  	render() {
    	return (
	      <View style={styles.div}> 
	  		<Text style={styles.text}> {this.state.numberlucky} </Text>
	  		<TouchableOpacity onPress={ ()=>{ this.clickme() } }>
	  			<View style={styles.divbutton}>
	  				<Text style={styles.text}> + 1 </Text>
	  			</View>
	  		</TouchableOpacity>
	      </View>
    	);
  	}
}

const styles = StyleSheet.create({
	div : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    text : {
    	fontSize: 42,
    },
    divbutton : {
    	justifyContent : 'center',
        alignItems : 'center',
    	width : 200,
    	height : 50,
    	backgroundColor : 'red',
    }
});