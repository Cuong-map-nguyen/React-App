import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet, ImageBackground , View, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import I18n from "../../lang/I18n";

export default class Item extends Component {
  	constructor(props) {
    	super(props);
    	this.state = {};
	}
	  
  	render() {
    	const { data } = this.props;
    	return (
      		<View>
        		<TouchableOpacity style={styles.btnName} onPress={() => {}} >
					<View style={{ flexDirection: "row"}}>
						<Icon name={data.icon} size={30}/>
						<Text style={styles.txtName}>{I18n.currentLocale() == 'vi-VN' ? data.captionVietnamese : data.captionEnglish}</Text>
					</View>
        		</TouchableOpacity>
				<View style={styles.divItem}>
          			{data.item.length > 0 && data.item.map((data, i) => (
              			<TouchableOpacity key={i} style={{ margin: 10 }} onPress={() => {this.props.navigate.navigate('Detail',data)}} >
                			<View>
                  				<ImageBackground resizeMode={'cover'} style={styles.imageBackground} source={data.image}/>
								<Text style={styles.textItem}>
                    				{data.title}
                  				</Text>
								<View style={styles.divContent}>
									<Text style={styles.textContent}>
										{data.shortContent}
									</Text>
								</View>
									<Text style={styles.textContent}>
										{data.create}
									</Text>
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
		flex: 1,
		alignItems:'center',
		flexDirection: "row", 
		flexWrap: 'wrap',
		justifyContent:'space-between',
		marginTop: 5 
	},
	divContent:{
		width:'100%'
	},
	textItem:{
		alignSelf: 'center',
		fontSize: 20, 
		marginLeft: 10, 
		color: "black", 
		fontFamily:'A' ,
		borderColor:'#fff',
		borderBottomWidth:2,
		marginBottom:2
	},
	textContent:{
		fontSize: 17, 
		marginLeft: 10, 
		color: "black", 
		fontFamily:'F' ,
		marginBottom:2
	},
	imageBackground:{
		width:  '100%',
		height: Dimensions.get("window").height / 2.6,
		alignItems:'center',
		justifyContent:'flex-end',
	},
	//Name Active
	txtName: {
		fontSize: 25,
		fontFamily: "B",
		color: "#5FB4EC"
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
