/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, StyleSheet, Text, ActivityIndicator, Image, Alert, FlatList } from 'react-native';

// import styles from './styles';

export default class Api extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isLoading : true,
	  	deleteRowkey : null,
	  	dataSource : [],
	  };
	}

	componentDidMount () {

		return fetch('https://apihotel.herokuapp.com/api/v1/admin/rooms')
			.then ( (response) => response.json() )
			.then ( (responseJson) => {

				this.setState({
					isLoading : false,
					dataSource : responseJson.data,
				})


			})

			.catch((error) => { 
				console.log(error)
			});

	}
	_onPressButton = () => {
        console.log(this.state.dataSource)
    }
  	render() {
  		if (this.state.isLoading) {
  			return (
  				<View style={styles.div}>
  					<ActivityIndicator/>
  				</View>
  				)
  		} else {
  			return (
		     	<View style={styles.div}>
		     		<View style={styles.md}>

					<FlatList
			          data={this.state.dataSource}
			          keyExtractor={(item, index) => index.toString()}
			          renderItem={({item, index}) => (
				          	<View style={styles.section}>
				          		<Text style={styles.title}>
				          			{item.name}
				          		</Text>
	      					</View>
			          	)}
			        />		    
				</View>
		     	</View>
	     	);
  		}
	  }
	}

const styles = StyleSheet.create({
  	div : {
  		flex : 1,
  		backgroundColor : '#ffff',
  		alignItems : 'center',
  		justifyContent : 'center',
  	},md : {
		marginTop : 10,
		width : '100%',
		justifyContent : 'center',
		alignItems : 'center',
		flex : 1,

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
	item: {
		padding: 10,
		fontSize: 20,
	}
});
