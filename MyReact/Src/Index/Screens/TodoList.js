/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput, FlatList, TouchableHighlight } from 'react-native';
import { ButtonGroup, CheckBox } from 'react-native-elements';
// import styles from './styles';
type Props = {};

export default class TodoList extends Component<Props> {

	constructor(props) {
		super(props);
		this.state = {
			text : '',
			todo : [],
			mang : [],
 			id: 0,
			active : false,
			index: 0,
		};
	}

	active = (item) => {
		let currentTodos = this.state.todo.slice();
		let activeItem = currentTodos.filter(t => t.id == item.id)[0];
		if (activeItem) {
			activeItem.active = !activeItem.active;
		}
		this.setState({
			todo: currentTodos,

		})
	}

	updateIndex = (index) => {
    this.setState({index})
    	if (index == 0) {
    		this.setState({
			todo : this.state.todo,
			})
    	}else if (index == 1) {
    		let current = this.state.todo.slice(); 
			// clone
			var activec = current.filter(t => t.active == true );
			// filter
			if (activec) {
				this.setState({
					mang : activec,
				})
			}
    	} else {
    		let current1 = this.state.todo.slice();
			let current2 = this.state.mang.slice();
			// clone
			var activec1 = current1.filter(t => t.active == false );
			var activec2 = current2.filter(t => t.active == false );
			// filter
			this.setState({
				todo : activec1,
				mang : activec2,
			})
    	}
  	}


	render() {

		return (
			<View style={styles.div}> 
					<FlatList
			          data={this.state.index == 0 || this.state.index == 2 ? this.state.todo : this.state.mang}
			          keyExtractor={(item, index) => index.toString()}
			          renderItem={({item, index}) => (
				          	<View style={styles.section}>

				          		<Text style={styles.title}>
				          			Todo : 
				          		</Text>
	        					<Text style={item.active == true ? styles.itemStrike : styles.item }>
	        						{item.text}
	        					</Text>
	        					<CheckBox
	        					title={index.toString()}
	        					checked={item.active} 
	        					onPress={()=> this.active(item)} >
	        					</CheckBox>

	      					</View>
			          	)}
			        />		    
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
