import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import SplashScreen from 'react-native-smart-splash-screen';
//  Screen
import HomeData from "../screen/Data";
import ListDetailAll from "../screen/ListDetailAll";
import Detail from "../screen/Detail";
import MapDetail from "../screen/MapDetail";
import AllTag from "../screen/Tag";
// stackNavigation
import Header from "../stackNavigation/Header";
import Drawer from "../stackNavigation/Drawer";

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
				<ScrollView showsVerticalScrollIndicator={false}>
					<HomeData navigation={this.props.navigation}/>
				</ScrollView>
            </View>
        );
    }
}

const DrawerNavigator = createDrawerNavigator(
    {	
		Home:{ screen: index }
    },
    {
      	contentComponent: props => <Drawer {...props} />
    }
);
//make this component available to the app
export default createStackNavigator(
    {
        Home: { screen: DrawerNavigator },
		Detail: { screen: Detail },
		MapDetail: { screen: MapDetail },
		//  Tag , category
		'Eat & Drink': { screen: AllTag	},
		'Event': { screen: AllTag },
      	'See & Do': { screen: AllTag },
      	'Stay': { screen: AllTag },
      	'Healthy Care': { screen: AllTag },
      	'Goverment': { screen: AllTag },
      	'Help Me': { screen: AllTag },
      	'About Us': { screen: AllTag },
		// item
		Restaurant: { screen: ListDetailAll },
		StreetFood: { screen: ListDetailAll },
		BarPub: { screen: ListDetailAll },
		CoffeeShop: { screen: ListDetailAll },
		FireWork: { screen: ListDetailAll },
		DragonFire: { screen: ListDetailAll },
		Golf: { screen: ListDetailAll },
		Attraction: { screen: ListDetailAll }, 
		Handicraft: { screen: ListDetailAll }, 
		Churches: { screen: ListDetailAll }, 
		Resort: { screen: ListDetailAll }, 
		Hotel: { screen: ListDetailAll }, 
		Homestay: { screen: ListDetailAll }, 
		Spa: { screen: ListDetailAll}, 
		Hospital: { screen: ListDetailAll }, 
		Clinic: { screen: ListDetailAll }, 
		Phamacies: { screen: ListDetailAll }, 
		Abandon: { screen: ListDetailAll }, 
		Firefighter: { screen: ListDetailAll },
		Taxi: { screen: ListDetailAll },
		About: { screen: ListDetailAll },
    },
    {
        navigationOptions: ({ navigation }) => {
            return { header: <Header {...navigation} />};
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

