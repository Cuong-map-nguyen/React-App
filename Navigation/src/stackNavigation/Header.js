import React, { Component } from "react";
import { View, StyleSheet, Picker, Text, StatusBar, Dimensions, Image } from "react-native";
import { Header, SearchBar } from "react-native-elements";
import Icons from "react-native-vector-icons/AntDesign";

export default class NaviHeader extends Component {
  	constructor(props) {
    	super(props);
    	this.state = {
			statusSearch: 1,
      		statusDraw: 1
    	};
  	}

  	_press = () => {
    	const { statusDraw } = this.state;
    	if (statusDraw == 1) {
      		this.props.openDrawer();
      		this.setState({ statusDraw: 2 });
    	} else {
      		this.props.closeDrawer();
      		this.setState({ statusDraw: 1 });
    	}
  	};

	_pressBack = () => {
    	this.props.goBack();
  	};

	_pressSearch = () => {
    	const { statusSearch } = this.state;
    	if (statusSearch == 1) {
      		this.setState({	statusSearch: 2 });
    	} else {
      		this.setState({ statusSearch: 1 });
    	}
  	};  

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
			<View style={styles.header}>
				<StatusBar backgroundColor="#01579B" />
				<Header backgroundColor="#01579B"
					leftComponent={ 
						<View style={styles.div2}>
							{this.props.state.routeName == 'Home' ? 
								<Icons name="menuunfold" size={32} color="#ffff" onPress={this._press} />
								: 
								<Icons name="arrowleft" size={32} color="#ffff" onPress={this._pressBack} />
							}
							{this.state.statusSearch == 1 ? 
								<Text style={styles.text}>{this.props.state.routeName}</Text> 
								:
								<Text></Text>
							}
						</View>
					}
					rightComponent={
						<View>
							{this.props.state.routeName == 'Home' ? 
								this.state.statusSearch == 1 ? this.renderGo() : this.renderSearch()
								: 
								<View style={styles.div}>
									<Image style={{width:40,height:40}} source={require('../images/imageSwipe/ic_launcher.png')}/>
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
  	header: {
    	width: "100%"
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
