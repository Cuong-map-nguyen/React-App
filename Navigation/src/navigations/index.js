//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import Screen1 from "../screen/Screen1";
import Screen2 from "../screen/Screen2";
import Header from "../stackNavigation/Header";
import Drawer from "../stackNavigation/Drawer";

// create a component
class index extends Component {
    render() {
        return (
            <View style={styles.container}>
              <View style={styles.container}>
                  <Screen1 navigation={this.props}/>
              </View>
      		</View>
        );
    }
}
const DrawerNavigator = createDrawerNavigator(
    {
      	'Eat & Drink': {
        	screen: index,
      	},
      	'Event': {
        	screen: Screen2
      	},
      	'See & Do': {
        	screen: index
      	},
      	'Stay': {
        	screen: index
      	},
      	'Healthy Care': {
        	screen: index
      	},
      	'Goverment': {
        	screen: index
      	},
      	'Help Me': {
        	screen: index
      	},
      	'About Us': {
        	screen: index
      	},
      	'Language': {
        	screen: index
      	}
    },
    {
      	contentComponent: props => <Drawer {...props} />
    }
);
//make this component available to the app
export default createStackNavigator(
    {
        Home: {
            screen: DrawerNavigator
        },
        Screen2: {
          	screen: Screen2
      	}
    },
    {
        navigationOptions: ({ navigation }) => {
            return {
              header: <Header {...navigation} />
            };
        }
    }
);   

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center"
    },
});

