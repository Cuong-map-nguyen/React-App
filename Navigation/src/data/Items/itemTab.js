import React, { Component } from "react";
import { StyleSheet , View, Dimensions, Text, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import { Tab, Tabs, ScrollableTab } from 'native-base';
import I18n from "../../lang/I18n";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export default class Item extends Component {
  	constructor(props) {
    	super(props);
    	this.state = {};
	}
	  
  	render() {
    	const { data } = this.props;
    	return (
			<View style={{flex:1}}>
				<Tabs tabStyle={{backgroundColor:'red'}} renderTabBar={()=> <ScrollableTab />}>
					{data.item.length > 0 && data.item.map((data, i) => (
						<Tab key={i} heading={I18n.currentLocale() == 'vi-VN' ? data.captionVietnamese : data.captionEnglish}>
							<ScrollView showsVerticalScrollIndicator={false}>
								<View style={{flex:1}}>
									<TouchableOpacity style={styles.btnName} onPress={() => {}} >
										<View style={{ flexDirection: "row"}}>
											<Icon name={data.icon} size={30}/>
											<Text style={styles.txtName}>{data.route}</Text>
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
							</ScrollView>
						</Tab>
					))}
				</Tabs>
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
		width:Dimensions.get("window").width / 2.22
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
		width: Dimensions.get("window").width / 2.22,
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