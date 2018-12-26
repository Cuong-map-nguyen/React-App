import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView} from 'react-native';

export default class Screen2 extends Component {
  	render() {
		return (
			<ScrollView showsVerticalScrollIndicator={false}>        
				<Text style={styles.welcome}>Welcome to React Native</Text>
				<Text style={styles.welcome}>Welcome to React Native</Text>
				<Text style={styles.welcome}>Welcome to React Native</Text>
				<Text style={styles.welcome}>Welcome to React Native</Text>
				<Text style={styles.welcome}>Welcome to React Native</Text>
				<Text style={styles.welcome}>Welcome to React Native</Text>
				<Text style={styles.welcome}>Welcome to React Native</Text>
				<Text style={styles.welcome}>Welcome to React Native</Text>
				<Text style={styles.welcome}>Welcome to React Native</Text>
		</ScrollView>
		);
  	}
}

const styles = StyleSheet.create({
  	welcome: {
		flex: 1,
		margin: 20,
		backgroundColor: 'orange',
		margin: 10,
		textAlign: 'center',
		fontSize: 20,
		paddingTop: 70,
  	}
});