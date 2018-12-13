import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Picker
} from "react-native";
import Swiper from "react-native-swiper";
import { SearchBar } from "react-native-elements";
import I18n from '../I18n';

export default class componentName extends Component {
  constructor(props) {
    super(props);
	this.state = {};
  }

  _onPressButton() {
	  const {language} = this.state;
	  if(language){
		I18n.locale = language;
		this.setState({
			languages : language
		})
	  }
  }
  
  render() {
    return (
      <View style={styles.div}>
        <SearchBar
          showLoading
          clearIcon={{ color: "red" }}
          searchIcon={true} // You could have passed `null` too
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <View style={styles.col}>
          <Swiper autoplayTimeout={3} autoplay={true} showsButtons={true}>
            <View style={styles.slide1}>
              <ImageBackground
                source={require("./o1v3leW.jpg")}
                style={{ width: "100%", height: "100%" }}
              >
                <Text style={{ color: "#fff" }}>Phong nha kẻ tơ</Text>
              </ImageBackground>
            </View>
            <View style={styles.slide2}>
              <ImageBackground
                source={require("./xxxx.png")}
                style={{ width: "100%", height: "100%" }}
              >
                <Text style={{ color: "#fff" }}>Chân răng kẻ tóc</Text>
              </ImageBackground>
            </View>
            <View style={styles.slide3}>
              <ImageBackground
                source={require("./LOL_CMS_129_Article_01.jpg")}
                style={{ width: "100%", height: "100%" }}
              >
                <Text style={{ color: "#fff" }}>Tề thiên đại thánh</Text>
              </ImageBackground>
            </View>
          </Swiper>
        </View>
        <View style={styles.md}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this._onPressButton();
            }}
          >
            <View style={styles.buttonInput}>
              <Text style={{ color: "#fff" }}> Change laguage </Text>
            </View>
          </TouchableOpacity>
		  <Picker
			selectedValue={this.state.language}
			style={{ height: 50, width: 100 }}
			onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
			<Picker.Item label="-- Chon ngon ngu --" value="" />
			<Picker.Item label="Tiếng anh" value="en-US" />
			<Picker.Item label="Tiếng Việt" value="vi-VN" />
		</Picker>
        </View>
        <View style={styles.lg}>
          <Text>{I18n.t("hello world")}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  div: {
    flex: 1,
    width: "100%"
  },
  col: {
    flex: 1,
    width: "100%"
  },
  md: {
    padding: 5,
    flex: 0.2,
    width: "100%",
    alignItems: "center"
  },
  button: {
    borderRadius: 10,
    backgroundColor: "red",
    height: "90%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonInput: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  lg: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
});
