import React, { Component } from 'react';
import { View, Image, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import lodash from 'lodash';
import Route from '../data/Array/ArrayDrawer';
import Item from '../data/Items/itemDrawer';
import Modal from "react-native-modal";
import I18n from "../lang/I18n";
import RouteLang from '../data/Array/ArrayLang';
import ItemLang from '../data/Items/itemLang';

export default class Drawer extends Component {
  	constructor(props) {
    	super(props);
    	this.state = {
      		routes: Route,
	  		visibleModal: false,
	  		routelangs:RouteLang,
    	}	
  	}
  	//active Link And Navigation
  	activeLink = (routerActive) => {
		const routes = this.state.routes;
		var newActive = lodash.findIndex(routes, function (routeAct) { return routeAct.route == routerActive; });
		var oldActive = lodash.findIndex(routes, function (routeAct) { return routeAct.active == true; });
		routes[oldActive].active = false;
		routes[newActive].active = true;
		if(routerActive == 'Lang' || routerActive == 'Ngôn ngữ'){
			this.setState({ visibleModal: true });
		}
		this.setState({
			routes
		}, function () { 
			this.props.navigation.navigate(routerActive)
		})
	}
	  
  	_toggleModal = () => this.setState({ visibleModal: !this.state.visibleModal }); 
		  
	//active Link Lang
	activeLinkLang = (routerActive) => {
		const routelangs = this.state.routelangs;
		var newActive = lodash.findIndex(routelangs, function (routeAct) { return routeAct.route == routerActive; });
		var oldActive = lodash.findIndex(routelangs, function (routeAct) { return routeAct.active == true; });
		routelangs[oldActive].active = false;
		routelangs[newActive].active = true;
		this.setState({
		  routelangs
		}, function () { 
			newActive == 0 ? I18n.locale='vi-VN' : newActive == 1 ? I18n.locale='en' : I18n.locale='vi-VN'
      		alert(newActive == 0 ? 'Đã thay đổi sang tiếng việt' : newActive == 1 ? 'You changed language to English' : 'Đã thay đổi ngôn ngữ')
      		return this._toggleModal();
		})
	}

  	render() {
		return (
			<View style={{flex:1}}>
				<View style={styles.divImageDrawer}>
					<Image source={require("../images/ic_Drawer.jpg")} style={styles.imageDrawer}/>
				</View>
				<ScrollView showsVerticalScrollIndicator={false}>
					{
						this.state.routes.map((data, index) => ( 
							<Item key={index} ActiveLink={this.activeLink} data={data} />
						))
					}
				</ScrollView>
				<View>
					<Modal
						style={styles.container}
						isVisible={this.state.visibleModal}
						backdropColor="none"
						onBackdropPress={this._toggleModal}
						onSwipe={() => this.setState({ visibleModal: false })}
						swipeDirection="left">
						<View style={styles.modalContent}>
							<View style={styles.divLang}>
								<Text>{I18n.t("YourLang")}</Text>
							</View>
								{
									this.state.routelangs.map((data, index) => (
										<ItemLang key={index} ActiveLink={this.activeLinkLang} data={data} />
									))
								}
							<TouchableOpacity style={styles.button} onPress={this._toggleModal}>
								<View>
									<Text>{I18n.t("Close")}</Text>
								</View>
							</TouchableOpacity>
						</View>
					</Modal>
				</View>
			</View>
		)
  	}
}
// define your styles
const styles = StyleSheet.create({
	divImageDrawer:{
		width:'100%', 
		height:'24%'
	},
	imageDrawer:{
		width:'100%', 
		height:'100%'
	},
  	divLang: {
		flex: 1,
		alignItems: "center",
		flexDirection:'row',
		justifyContent: "center",
		borderColor: "#abab",
		borderBottomWidth: 2
  	},
  	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
  	},
  	button: {
		backgroundColor: "lightblue",
		padding: 12,
		margin: 16,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
		borderColor: "rgba(0, 0, 0, 0.1)"
  	},
  	modalContent: {
		width: "55%",
		height: "55%",
		backgroundColor: "white",
		borderRadius: 6,
		borderColor: "rgba(0, 0, 0, 0.1)"
  	}
});