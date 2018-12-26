import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet, ImageBackground , View, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class Item extends Component {
  	constructor(props) {
    	super(props);
    	this.state = {};
	}
	  
  	render() {
    	const { data } = this.props;
    	return (
      		<View>
        		<TouchableOpacity style={styles.btnName} onPress={() => { this.props.navigate.navigation.navigation.navigate(data.route) }} >
					<View style={{ flexDirection: "row"}}>
						<Icon name={data.icon} size={30}/>
						<Text style={styles.txtName}>{data.route}</Text>
					</View>
        		</TouchableOpacity>
        		<View style={styles.divItem}>
          			{data.item.length > 0 && data.item.map((data, i) => (
              			<TouchableOpacity key={i} style={{ margin: 10 }} onPress={() => {alert(data.route)}} >
                			<View>
                  				<ImageBackground resizeMode={'cover'} style={styles.imageBackground} source={data.image}>
                  					<Text style={styles.textItem}>
                    					{data.route}
                  					</Text>
				  				</ImageBackground>
                			</View>
              			</TouchableOpacity>
            		))}
        		</View>
      		</View>
    	);
  	}
}

const styles = StyleSheet.create({
	divItem:{
		flexDirection: "row", 
		flexWrap: "wrap", 
		marginTop: 5 
	},
	textItem:{
		fontSize: 20, 
		marginLeft: 10, 
		color: "#fff", 
		fontFamily:'G' ,
		borderColor:'#fff',
		borderBottomWidth:2,
		marginBottom:2
	},
	imageBackground:{
		width: Dimensions.get("window").width / 2.3,
		height: Dimensions.get("window").width / 2.3,
		alignItems:'center',
		justifyContent:'flex-end',
	},
	//Name Active
	txtName: {
		fontSize: 25,
		fontFamily: "B",
		color: "#5FB4EC"
	},
	txtnameActive: {
		color: "#fff"
	},
	btnName: {
		marginTop: 15,
		alignItems: "center",
		borderColor: "#abab",
		borderBottomWidth: 2,
		height: 40
	},
	Active: {
		marginLeft: 15
	}
});
