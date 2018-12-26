//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import I18n from "../lang/I18n";

// create a component
class MyClass extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
		  visibleModal: true,
		};
	  }

	  check(index){
		if(index == 8){
			return this._toggleModal();
		}
	};
    aa(){
        alert(';asd')
    }
	//   _onPressButton(ad) {
//     if (ad == "EN") {
//       I18n.locale = "en-US";
//       alert("Changed language success");
//     } else {
//       I18n.locale = "vi-VN";
//       alert("Thay đổi ngôn ngử thành công");
//     }
//   }

	_toggleModal = () =>
	  this.setState({ visibleModal: !this.state.visibleModal });

    render() {
        return (
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
					<TouchableOpacity
						style={styles.langauge}
						onPress={() => {this._onPressButton("EN");}}>
						<View>
							<Text>ENGLISH</Text>
						</View>
					</TouchableOpacity>
					<View style={styles.langauge}>
						<Text>JAPANESE</Text>
					</View>
					<View style={styles.langauge}>
						<Text>THAI LAND</Text>
					</View>
					<TouchableOpacity
						style={styles.langauge}
						onPress={() => {this._onPressButton("VN")}}>
						<View>
							<Text>VIETNAMESE</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={this._toggleModal}>
						<View style={styles.button}>
							<Text>{I18n.t("Close")}</Text>
						</View>
        			</TouchableOpacity>
        		</View>
        	</Modal>
		  </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
  langauge: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    borderColor: "#abab",
    borderBottomWidth: 2,
    paddingLeft: "5%"
  },
  divLang: {
    flex: 1,
    alignItems: "center",
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
    //   width: Dimensions.get('window').width * 0.9,
    width: "50%",
    height: "50%",
    backgroundColor: "white",
    borderRadius: 6,
    borderColor: "rgba(0, 0, 0, 0.1)"
  }
});

//make this component available to the app
export default MyClass;
