// library
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";
import Modal from "react-native-modal";
import I18n from "../Lang/I18n";

import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";

export default class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
	  visibleModal: false,
	  nameIcon:'',
    };
  }

  _toggleModal = () =>
    this.setState({ visibleModal: !this.state.visibleModal });

  _onPressButton(ad) {
    if (ad == "EN") {
      I18n.locale = "en-US";
      alert("Changed language success");
    } else {
      I18n.locale = "vi-VN";
      alert("Thay đổi ngôn ngử thành công");
    }
  }
  check(index){
	if(index == 8){
		return this._toggleModal();
	}
  };
  renderButtonModal = onPress => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{I18n.t("Close")}</Text>
      </View>
    </TouchableOpacity>
  );

  renderModalContent = () => (
    <View style={styles.modalContent}>
      <View style={styles.divLang}>
        <Text>{I18n.t("YourLang")}</Text>
        <Text>
          [
          {I18n.currentLocale() == "vi-VN" || I18n.currentLocale() == "vi"
            ? "Việt Nam"
            : "English"}
          ]
        </Text>
      </View>
      <TouchableOpacity
        style={styles.langauge}
        onPress={() => {
          this._onPressButton("EN");
        }}
      >
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
        onPress={() => {
          this._onPressButton("VN");
        }}
      >
        <View>
          <Text>VIETNAMESE</Text>
        </View>
      </TouchableOpacity>
      {this.renderButtonModal(() => this.setState({ visibleModal: false }))}
    </View>
  );

  renderModal = () => (
    <Modal
      style={styles.container}
      isVisible={this.state.visibleModal}
      backdropColor="none"
      onBackdropPress={this._toggleModal}
      onSwipe={() => this.setState({ visibleModal: false })}
      swipeDirection="left"
    >
      {this.renderModalContent()}
    </Modal>
  );

  render() {
    return (
      <View style={styles.divDraw}>
        <View style={styles.flexContent}>
          <View style={styles.tagDraw}>
            <IconEntypo name="location" size={30} color="#fff" />
            <Text style={styles.textDraw}>{I18n.t("Goto")}</Text>
          </View>
          <Image
            source={require("../images/ic_Drawer.jpg")}
            style={{ width: "100%", height: "20%" }}
          />
          <FlatList
            data={this.props.items}
            keyExtractor={index => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={styles.itemDraw}
                onPress={()=>{this.check(index)}}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.padding}>
                    <IconMaterial name={
						index == 0 ? 'food-fork-drink' 
						: index == 1 ? 'eventbrite'
						: index == 2 ? 'human-handsup'
						: index == 3 ? 'bed-empty'
						: index == 4 ? 'heart-pulse'
						: index == 5 ? 'office-building'
						: index == 6 ? 'exclamation'
						: index == 7 ? 'alpha-i-box' : 'language-python'
					} size={40} color="#fff" />
                  </View>
                  <View style={styles.padding}>
                    <Text style={styles.textDraw}>{item.key}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.flexEnd}>
          <TouchableOpacity
            style={styles.footerDraw}
            onPress={() => {
              this.props.navigation.closeDrawer();
            }}
          >
            <View>
              <Text style={styles.textDraw}>{I18n.t("Close")}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>{this.renderModal()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  divDraw: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#049AE6"
  },
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
  textDraw: {
    color: "#fff",
    fontFamily: "B",
    fontSize: 30
  },
  tagDraw: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#6BB1F6"
  },
  itemDraw: {
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "stretch",
    width: "100%",
    backgroundColor: "#6BB1F6",
    borderWidth: 2
  },
  footerDraw: {
    borderColor: "#fff",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#6BB1F6",
    borderWidth: 2
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
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
  padding: {
    padding: 10
  },
  flexEnd: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end"
  },
  flexContent: {
    width: "100%",
    height: "95%"
  }
});
