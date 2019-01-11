import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class Item extends Component {
  	constructor(props) {
    	super(props);
    	this.state = {reActive: false}
  	}

  	SetActive(r) {
    	this.props.ActiveLink(r);
    	this.setState({ reActive: !this.state.reActive })
  	}
  
  	render() {
    	const { data } = this.props;
    	return (
      		<TouchableOpacity style={data.active ? [styles.btnName, styles.btnNameActive] : styles.btnName} onPress={() => this.SetActive(data.route)}>
        		<Icon name={data.active ? data.iconActive : data.icon} size={25} style={data.active ? [styles.txtActive, styles.txtIconActive] : styles.Active} />
        		<Text style={data.active ? [styles.txtName, styles.txtnameActive] : styles.txtName}> {data.active ? data.caption : data.route} </Text>
      		</TouchableOpacity>
    	);
  	}
}

const styles = StyleSheet.create({
	txtName: {
		fontSize: 16,
		marginLeft: 10,
		color: '#565D6B',
	},
	txtnameActive: {
		color: '#fff'
	},
	btnName: {
		marginTop: 15,
		flexDirection: 'row',
		alignItems: 'center',
		height: 40
	},
	btnNameActive: {
		backgroundColor: '#5FB4EC'
	},
	//Icon Active
	txtIconActive: {
		color: '#fff',
		marginLeft: 15
	},
	txtActive: {
		color: '#565D6B',
		marginLeft: 15
	},
	Active: {
		marginLeft: 15,
	},
});