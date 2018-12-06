/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput, FlatList, TouchableHighlight } from 'react-native';
import { ButtonGroup, CheckBox } from 'react-native-elements';
// import styles from './styles';
type Props = {};

import AddTodo from "../Screens/AddTodo.js";
import TodoList from "../Screens/TodoList.js";
import TodoFilter from "../Screens/TodoFilter.js";

export default class Todo extends Component<Props> {

	constructor(props) {
		super(props);
		this.state = {
			todo : [],
			filter: '',
		};
	}

addTodo(todoItem) {
	if (todoItem) {
		this.setState({
			todo : this.state.todo.concat(todoItem),		
		})
	}
		
}

  render() {

    return (
  		<View style={styles.div}>

  			<AddTodo onAddTodo={(todoItem) => {
  				this.addTodo(todoItem)
  			}} /> 	

  			<TodoList todo={this.state.todo} filter={this.state.filter} />

  			<TodoFilter/>
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