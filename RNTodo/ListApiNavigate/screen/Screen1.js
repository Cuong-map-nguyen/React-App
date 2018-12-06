// library
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Image } from 'react-native';
import { ButtonGroup, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

export default class Screen1 extends Component {
  render() {
  	let param = this.props.navigation.state.params;
    return (
        <View style={styles.div}>
	        <Header 
			    backgroundColor="#4db84d"
				leftComponent={ <Icon name="chevron-left" size={26} color="#ffff" onPress={ () => this.props.navigation.goBack()}/>}
			    centerComponent={{ text: 'Rooms', style: { color: '#fff' } }}
			    rightComponent={{ icon: 'home', color: '#fff' }}/>

			<View style={styles.col}>
		        <Image style={{width : '100%' , height : 140}} source={{ uri : param.link_img }}></Image>
		      	<Text style={styles.title}>
		      		{param.name}
		      	</Text>
		      	<Text style={styles.description}>
		      		{param.description}
		      	</Text>
	      	</View>

		</View>
    );

  }
}

const styles = StyleSheet.create({
  div : {
		width : '100%',
		flex : 1,
		backgroundColor:'#f8f8f8',

	},
	col : {
		padding : 5,
		width : '100%',
		alignItems : 'center',
		flex : 1,
		backgroundColor:'#f8f8f8',

	},
	title : {
		fontSize: 20,
		alignItems : 'center',
		color : 'red',
		textDecorationLine: 'underline', 
		textDecorationStyle: 'solid',
	},
	description : {
		padding : 10,
		fontSize: 16,
		alignItems : 'center',
		color : 'black',
	}
});

