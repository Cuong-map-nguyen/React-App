// library
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
// import AppIcon from '../assets/icon/app-icons';

export default class Drawer extends Component {
  render() {
    console.log(this.props);

    return (
      <View style={styles.div}>
        <Text style={styles.menu}>Menu</Text>
        <View style={styles.col}>
          <Image
            style={styles.image}
            source={require("../images/ic_tab.jpg")}
          />
        </View>
        <View style={styles.col}>
          <FlatList
            data={this.props.items}
            keyExtractor={index => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.md}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate(item.routeName)}
                >
                  <View style={styles.col}>
                    <View style={styles.row}>
                      <Text style={styles.text}>{item.key}</Text>
                      <Icon name="chevron-left" size={26} color="black" />
                      <Icon name="home" size={26} color="black" />
                      <Icon name="chevron-right" size={26} color="black" />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  div: {
    width: "100%",
    flex: 1,
    backgroundColor: "#4db84d",
    justifyContent: "center",
    alignItems: "center"
  },
  menu: {
    justifyContent: "center",
    alignItems: "center",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    color: "red",
    fontSize: 20
  },
  md: {
    width: "100%"
  },
  col: {
    padding: 10,
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    borderColor: "#adadad",
    borderBottomWidth: 1
  },
  row: {
    flex: 1,
    alignItems: "stretch",
    flexDirection: "row"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  text: {
    color: "#f5f5dc",
    fontSize: 20
  }
});
