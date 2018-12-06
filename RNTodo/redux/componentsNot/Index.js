/* Core */
import React, { Component } from "react";
import { StyleSheet } from "react-native";
/* Presentational */
import { View, Text, TouchableOpacity } from "react-native";
//
import Ca from "./Ca";

export default class Index extends Component {
    render() {
        return (
            <View style={styles.div}>
                <Text>Chua su dung Redux (Trang chu)</Text>
                <TouchableOpacity style={{width:50,height:20,backgroundColor:'#a8a8a8'}} onPress={() => this.refs.Ca.clicka()}>
                    <View>
                        <Text>click me</Text>
                    </View>
                </TouchableOpacity>
                <Ca ref="Ca"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    div: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
