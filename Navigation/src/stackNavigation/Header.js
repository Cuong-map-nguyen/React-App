import React, { Component } from "react";
import { View, StyleSheet, Image, Picker, Text, StatusBar } from "react-native";
import { Header } from "react-native-elements";
import Icons from "react-native-vector-icons/AntDesign";

export default class NaviHeader extends Component {
  	constructor(props) {
    	super(props);
    	this.state = {
      		statusDraw: 1
    	};
  	}

  	_press = () => {
    	const { statusDraw } = this.state;
    	if (statusDraw == 1) {
      		this.props.openDrawer();
      		this.setState({
        		statusDraw: 2
      		});
    	} else {
      		this.props.closeDrawer();
      		this.setState({
        		statusDraw: 1
      		});
    	}
  	};

  	render() {
    	return (
			<View style={styles.header}>
				<StatusBar backgroundColor="#01579B" />
				<Header backgroundColor="#01579B"
					leftComponent={ 
						<View style={styles.div}>
							<Icons name="menuunfold" size={32} color="#ffff" onPress={this._press} />
						</View>
					}
					rightComponent={
						<View style={styles.div}>
							<Text style={styles.text}>Go To: </Text>
							<Picker
								selectedValue={this.state.location}
								onValueChange={(itemValue, itemIndex) =>
									this.setState({ location: itemValue })}
								style={styles.picker}>
								<Picker.Item label="-- Chọn địa điểm --" value="" />
								<Picker.Item label="Đà Nẵng" value="en-US" />
								<Picker.Item label="Quảng Nam" value="vi-VN" />
							</Picker>
							<Image style={styles.image} source={require("../images/ic_launcher.png")} />
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
		backgroundColor: "#01579B",
		justifyContent: "center",
		alignItems: "center"
  	},
  	text: {
		color: "#fff",
		fontSize: 16
  	},
  	header: {
    	width: "100%"
  	},
  	picker: {
		height: "100%",
		width: 170,
		color: "#fff"
  	},
  	image: {
		width: 40,
		height: 40
  	}
});
