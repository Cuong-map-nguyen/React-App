//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
// 
import ViewHome from "../screen/ViewHome";
import ListDetailAll from "../screen/ListDetailAll";
import Detail from "../screen/Detail";
// 
import EatDrink from "../screen/EatDrink";
// 
import Header from "../stackNavigation/Header";
import Drawer from "../stackNavigation/Drawer";
import SplashScreen from 'react-native-smart-splash-screen';

// create a component
class index extends Component {

	componentDidMount () {
		SplashScreen.close({
		   animationType: SplashScreen.animationType.scale,
		   duration: 850,
		   delay: 500,
		})		
	   }
	  
    render() {
        return (
            <View style={styles.container}>
              	<View style={styles.container}>
					<ScrollView showsVerticalScrollIndicator={false}>
						<ViewHome navigation={this.props}/>
					</ScrollView>
              	</View>
      		</View>
        );
    }
}

const DrawerNavigator = createDrawerNavigator(
    {	
		Home:{
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
		Detail: {
			screen: Detail
		},
		//  Tag , category
		'Eat & Drink': {
        	screen: EatDrink
      	},
		'Event': {
        	screen: EatDrink
      	},
      	'See & Do': {
        	screen: EatDrink
      	},
      	'Stay': {
        	screen: EatDrink
      	},
      	'Healthy Care': {
        	screen: EatDrink
      	},
      	'Goverment': {
        	screen: EatDrink
      	},
      	'Help Me': {
        	screen: EatDrink
      	},
      	'About Us': {
        	screen: EatDrink
		},
		// item
		Restaurant: {
			screen: ListDetailAll
		},
		StreetFood: {
			screen: ListDetailAll
		},
		BarPub: {
			screen: ListDetailAll
		},
		CoffeeShop: {
			screen: ListDetailAll
		},
		FireWork: {
			screen: ListDetailAll
		},
		DragonFire: {
			screen: ListDetailAll
		},
		Golf: {
			screen: ListDetailAll
		},
		Attraction: {
			screen: ListDetailAll
		}, 
		Handicraft: {
			screen: ListDetailAll
		}, 
		Churches: {
			screen: ListDetailAll
		}, 
		Resort: {
			screen: ListDetailAll
		}, 
		Hotel: {
			screen: ListDetailAll
		}, 
		Homestay: {
			screen: ListDetailAll
		}, 
		Spa: {
			screen: ListDetailAll
		}, 
		Hospital: {
			screen: ListDetailAll
		}, 
		Clinic: {
			screen: ListDetailAll
		}, 
		Phamacies: {
			screen: ListDetailAll
		}, 
		Abandon: {
			screen: ListDetailAll
		}, 
		Firefighter: {
			screen: ListDetailAll
		},
		Taxi: {
			screen: ListDetailAll
		},
		About: {
			screen: ListDetailAll
		},
    },
    {
        navigationOptions: ({ navigation }) => {
            return {
              header: <Header {...navigation} />
            };
		},
		params: {
			transition: 'right'
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

