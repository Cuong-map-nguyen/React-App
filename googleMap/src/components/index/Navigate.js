import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Com1 from "../screen/Com1.js";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import Header from "../../../../Navigation/src/stackNavigation/Header";
import Drawer from "../../../../Navigation/src/stackNavigation/Drawer";

class Navigate extends Component {

  	constructor(props) {
    	super(props);
    	this.state = {};
  	}

  	render() {
    	return (
      		<View style={styles.div}>
        		<View style={styles.div}>
          			<Com1 />
        		</View>
      		</View>
   	 	);
  	}
}

const DrawerNavigator = createDrawerNavigator(
  {
    'Eat & Drink': {
      screen: Navigate,
    },
    'Event': {
      screen: Navigate
    },
    'See & Do': {
      screen: Navigate
    },
    'Stay': {
      screen: Navigate
    },
    'Healthy Care': {
      screen: Navigate
    },
    'Goverment': {
      screen: Navigate
    },
    'Help Me': {
      screen: Navigate
    },
    'About Us': {
      screen: Navigate
    },
    'Language': {
      screen: Navigate
    }
  },
  {
    contentComponent: props => <Drawer {...props} />
  }
);

export default createStackNavigator(
  {
    Home: {
      screen: DrawerNavigator
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

const styles = StyleSheet.create({
  div: {
    flex: 1,
    backgroundColor: "red",
    alignContent: "center",
    justifyContent: "center"
  }
});
