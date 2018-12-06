/* Core */
import React, { Component } from 'react';
import { AsyncStorage } from "react-native";
/* Presentational */
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import Swipeout from 'react-native-swipeout';

class ListItem extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { index, item, arrays } = this.props;
		const swipeRight = [
			{
				text: 'Delete',
				color: 'red',
				fontSize : 16,
				// backgroundColor: 'red',
				// underlayColor: 'red',
				onPress: async() => {
					Alert.alert(
						'Thông báo?',
						'Bạn có chắc chắn xóa? ' + '[' + index + ']',
						[
							{ text: 'No', onPress: () => console.log('Cancel press') },
							{
								text: 'Yes', onPress: async() => {
								 	let request = await arrays.slice();
									let activeItem = await request.filter(click => click.id != item.id);
									if (activeItem) {
										await AsyncStorage.setItem('value',JSON.stringify(activeItem));
										await this.props.clickDelete();
									}
								}
							},
						], { cancelable: true });
				}
			}
		];

		return (
			<Swipeout autoClose={true} right={swipeRight} onOpen={() => { }}>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('Edit', item) }>
					<View style={styles.item}>
						<Text style={styles.text}>STT: {index}</Text>
						<Text style={styles.text}>Nhan đề: {item.title}</Text>
						<Text style={styles.text}>Ngày Tạo: {item.date}</Text>
					</View>
				</TouchableOpacity>
			</Swipeout>
		);
	}
}

export default class List extends Component {

	constructor(props) {
		super(props);
		this.state = {
			active: 0,
		};
	}

	render() {

		return (
			<View style={styles.col}>
				<FlatList
					data={this.props.list}
					keyExtractor={(index) => index.toString()}
					renderItem={({ item, index }) => (
						<View style={styles.md}>
							<ListItem clickDelete={()=>this.props.clickDelete()} 
							index={index} navigation={this.props.navigation} 
							item={item} arrays={this.props.list} />
						</View>
					)} />
			</View>
		);
	}
}
const styles = StyleSheet.create({
	md: {
		width: '100%',
		flex: 1,
		padding: 5,
	},
	col: {
		padding: 5,
		width: '100%',
		flex: 1,
		borderColor: '#adadad',
		borderWidth: 1,
	},
	item: {
		padding: 5,
		justifyContent: 'center',
		width: '100%',
		backgroundColor: '#f8f8f8',
		flex: 1,
		borderColor: '#adadad',
		borderWidth: 1,
	},
	text: {
		color: 'black',
		fontSize: 17,
	}
});