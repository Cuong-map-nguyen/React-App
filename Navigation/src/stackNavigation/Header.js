import React, { Component } from "react";
import { View, StyleSheet, Picker, Text, StatusBar, Dimensions, Image, TouchableOpacity } from "react-native";
import { Header, SearchBar } from "react-native-elements";
import Icons from "react-native-vector-icons/AntDesign";

export default class NaviHeader extends Component {
  	constructor(props) {
    	super(props);
    	this.state = {
			statusSearch: false,
      		statusDraw: false
    	};
  	}

  	_press = () => {
		this.setState({ statusDraw: !this.state.statusDraw }) 
    	if (this.state.statusDraw == false) { this.props.openDrawer() } 
		else { this.props.closeDrawer() }
	  };
	  
	_pressBack = () => { this.props.goBack() };

	_pressSearch = () => { this.setState({ statusSearch: !this.state.statusSearch }) };  

	renderGo = () => (
		<View style={styles.div}>
			<Text style={styles.text}>Go To: </Text>
			<Picker selectedValue={this.state.location} onValueChange={(itemValue) => this.setState({ location: itemValue })} style={styles.picker}>
				<Picker.Item label="-- Chọn địa điểm --" value="" />
				<Picker.Item label="Đà Nẵng" value="en-US" />
				<Picker.Item label="Quảng Nam" value="vi-VN" />
			</Picker>
			<Icons name="search1" size={32} color="#ffff" onPress={this._pressSearch} />
		</View>
	);
	
	renderSearch = () => (
		<View style={styles.div}>
			<SearchBar
				showLoading
				searchIcon={true} 
				platform="android"
				onClear={()=>{}}
				inputContainerStyle={{width:Dimensions.get('window').width/1.3,}}
				containerStyle={{width:Dimensions.get('window').width/1.3 ,borderRadius:5}}
				cancelIcon={{ type: 'MaterialIcons', name: 'keyboard-hide' }}
				onCancel={this._pressSearch}
				clearIcon={{ type: 'MaterialIcons', name: 'clear' }}
				onChangeText={text => this.setState({ text })}
				value={this.state.text}
				placeholder='Tìm kiếm...'
			/>
			<Icons name="search1" size={32} color="#ffff" onPress={this._pressSearch} />
		</View>
	);

  	render() {
    	return (
			<View style={styles.divHeader}>
				<StatusBar backgroundColor="#01579B" />
				<Header containerStyle={styles.header} 
					leftComponent={ 
						<View style={styles.div2}>
							{this.props.state.routeName == 'Home' ? 
								<Icons name="menuunfold" size={32} color="#ffff" onPress={this._press} />
								: 
								<Icons name="arrowleft" size={32} color="#ffff" onPress={this._pressBack} />
							}
							{this.state.statusSearch == false ? 
								<Text style={styles.text}>{this.props.state.routeName}</Text> : null
							}
						</View>
					}
					rightComponent={
						<View>
							{this.props.state.routeName == 'Home' ? 
								this.state.statusSearch == false ? this.renderGo() : this.renderSearch()
								: 
								<View style={styles.div}>
									<TouchableOpacity onPress={() => {this.props.navigate('Home')}}>
										<Image style={{width:40,height:40}} source={require('../images/ic_launcher.png')}/>
									</TouchableOpacity>
								</View>
							}
						</View>
					}
				/>
			</View>
    	);
  	}
}

const styles = StyleSheet.create({
  	div: {
		flexDirection: "row",
		justifyContent: 'flex-end',
		width: Dimensions.get('window').width/1.2,
		alignItems: "center"
	},
	div2: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: 'flex-start',
		width: Dimensions.get('window').width/2.5,
  	},
  	text: {
		color: "#fff",
		marginLeft: 5,
		fontSize: 16
  	},
  	divHeader: {
		width: "100%",
		backgroundColor:'red',
		alignItems:"center",
		justifyContent:'center',
	},
	header:{
		backgroundColor: '#01579B',
		justifyContent: 'space-around',
	},
  	picker: {
		height: "100%",
		width: Dimensions.get('window').width/2.5,
		color: "#fff"
  	},
  	image: {
		width: 40,
		height: 40
  	}
});
