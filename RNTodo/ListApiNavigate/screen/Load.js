// library
import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { StatusBar, ActivityIndicator } from 'react-native';
import styled from 'styled-components';

export default class Load extends Component {
  render() {

    return (
			<Div>
  				<Col>
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
					<ActivityIndicator/>
				</Col>
  			</Div>
    );
    
  }
}

const Div = styled.View`
	width : 100%;
	flex : 1;
	justifyContent : center;
	alignItems : center;
`;
const Col = styled.View`
	width : 100%;
	flex : 1;
`;
