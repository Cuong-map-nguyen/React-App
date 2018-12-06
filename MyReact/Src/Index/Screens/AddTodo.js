/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput, FlatList, TouchableHighlight } from 'react-native';
import { ButtonGroup, CheckBox } from 'react-native-elements';

import Todo from "../Components/Todo.js";
type Props = {};

export default class AddTodo extends Component<Props> {

		constructor(props) {
		super(props);
		this.state = {
			text : '',
		};
	}

	
	click = () => {

		if (this.state.text == null || this.state.text == "") {
				Alert.alert("input not empty");
			} else {
				let todos = {
					id: Math.random(),
					text: this.state.text,
					active: false
				}
				if (this.props.onAddTodo) {
					this.props.onAddTodo(todos);
				}
		}
	}
	render() {
		return (
			<View style={styles.col}>
				<View style={styles.divInput}>
					<TextInput
						style={styles.textInput}
						placeholder = 'Enter Todo'
						onChangeText={(text) => this.setState({text})}
						value={this.state.text} 
						keyboardType = 'default'/>	
					<TouchableOpacity
						 onPress={this.click}  
						style={styles.clickbt}>
						<Text style={{fontSize : 30,color : '#ffff'}}>+</Text>
					</TouchableOpacity>

				</View> 
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
	col : {
		justifyContent : 'center',
		alignItems : 'center',
		flexDirection: "row",
	},
	md : {
		marginTop : 10,
		width : '100%',
		justifyContent : 'center',
		alignItems : 'center',
		flex : 1,

	},
	footer : {
		alignItems : 'flex-end',
		flexDirection : 'row',
		flex : 0.2,
	},
	textInput : {
		justifyContent : 'center',
		alignItems : 'center',
		backgroundColor : '#ffff', 
	},
	divInput : {
		width: '98%',
		justifyContent : 'center',
		alignItems : 'center',
		backgroundColor : '#ffff',
	},
	item: {
		padding: 10,
		fontSize: 20,
	},
	itemStrike: {
		padding: 10,
		fontSize: 20,
		textDecorationLine: 'line-through', 
		textDecorationStyle: 'solid'
	},
	section: {
		width : '100%',
		backgroundColor:'#ffff',
		flexDirection: 'row',
		justifyContent : 'center',
		alignItems : 'center',
		flex : 1,
		borderBottomColor : 'gray' ,
		borderBottomWidth : 1 ,
	},
	href : {
		color: 'blue',
		fontSize : 20 ,
		textDecorationLine: "underline",
		textDecorationStyle: "solid",
		textDecorationColor: "#000",
	},
	clickbt : {
		width: '100%',
		height: 50, 
		backgroundColor: 'blue', 
		borderRadius: 10, 
		justifyContent: 'center', 
		alignItems: 'center'
	},
	title : {
		fontSize: 20,
		color : 'red',
	}
});
