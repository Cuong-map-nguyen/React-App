// library
import styled from 'styled-components';
import { Header } from 'react-native-elements';
import React, { Component } from 'react'
import {View, StatusBar, Image, StyleSheet} from 'react-native'
// component
import Screen1 from '../screen/Screen1.js';
import Screen2 from '../screen/Screen2.js';
import RoomList from '../components/RoomList.js';
import roomdata from '../data/RoomData.js';
import Drawer from '../screen/Drawer.js';
import Load from '../screen/Load.js';
import {getRoomFromServer} from '../service/RoomApi.js';
// navigation
import {createStackNavigator, createBottomTabNavigator, createDrawerNavigator} from 'react-navigation';

class Room extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			rooms : roomdata,
            isLoading : true,
            refreshing : false,
            page : 1,
		};
	};

	componentDidMount () {
		return this.refreshDataSever();
	};

	onRefresh = (value) => {
		if (value == 1) {
			alert('changed value success');
			return this.refreshDataSever();
		}else{
			alert('value is empty');
		}
	};

	refreshDataSever = () => {
		this.setState({refreshing: true});
		getRoomFromServer(this.state.page).then((roomServer) => {
			this.setState({
				rooms : [...this.state.rooms,...roomServer],
				isLoading: false,
				refreshing: false,
			});
		}).catch((error) => {
			this.setState({
				rooms : [],
				isLoading: false,
				refreshing: false,
			});
		});
	};

	_handleLoad = () => {
		this.setState(state => ({page : this.state.page + 1}),() => this.refreshDataSever());
	};

	render() {
		if (this.state.isLoading) {

  			return (
  					<Load/>
  				)

  		} else {

  			return (
  				<View style={styles.div}>
  					<StatusBar backgroundColor="#4db84d"/>
  					<Header
		            backgroundColor="#4db84d"
					leftComponent={{
						icon: 'menu',
						color: '#fff',
						onPress: () => this.props.navigation.openDrawer(),
						// onPress={() => this.props.navigation.navigate('Notifications')}
					}}
		            centerComponent={{
		            	text: 'Rooms', style: { color: '#fff' },

		        	}}
		            rightComponent={{
		            	icon: 'info', color: '#fff',
		            	onPress:  () => this.props.navigation.navigate('Screen2')
		            }}/>
					<RoomList
						navigation={this.props.navigation}
						listRoom={this.state.rooms}
						refreshing={this.state.refreshing}
						onRefresh = { (value) => {
							this.onRefresh(value);
						}}
						handleLoad = {() => this._handleLoad()}>
					</RoomList>
  				</View>
			);

  		}
	}
}

const TabNavigator = createBottomTabNavigator({
	    RoomList : {
	    screen : Room
	  },
	  	Settings : {
	    screen : Screen2
	  },
	  	More : {
	    screen : Screen2
	  },
	  	Info : {
	    screen : Screen2
	  },
  },{
    navigationOptions: {
    	swipeEnabled: true,
      	activeTintColor: '#4db84d',
      	inactiveTintColor: 'black',
		tabBarIcon : ({ tintColor }) => (
			<Image
				source = {require('../images/ic_home.png')}
				style = {[styles.icon, {tintColor : tintColor}]}
			/>
		),
    },
  }
);

const DrawerNavigator = createDrawerNavigator({
  Home : {
    screen : TabNavigator
  },
  Chat : {
    screen : Screen2
  },
  Login : {
    screen : Screen2
  },
  Register : {
    screen : Screen2
  }
},{
	contentComponent: props => <Drawer {...props} />
});

const CreateNavigator = createStackNavigator({
  Home : {
    screen : DrawerNavigator
  },
  Screen1 : {
    screen : Screen1
  },
  Screen2 : {
    screen : Screen2
  },
  Chat : {
    screen : Screen2
  },
 },{
    navigationOptions: {
      	header : null,
    },
  }
);

export default CreateNavigator;

const styles = StyleSheet.create({
	icon : {
		width : 20 ,
		height : 20,
	},
	div : {
		width : '100%',
		flex : 1,
		backgroundColor:'#f8f8f8',
	},
});

const Div = styled.View`
	width : 100%;
	flex : 1;
	justifyContent : center;
	alignItems : center;
`;
