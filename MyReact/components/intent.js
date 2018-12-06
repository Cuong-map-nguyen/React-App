import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Screen1 from './Screen1.js'
class HomeScreen extends React.Component {
  render() {
    console.log(this.props)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={()=> this.props.navigation.navigate('getScreen1')}>Home Screen</Text>
      </View>
    );
  }
}

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  getScreen1: {
    screen: Screen1
  }
});