import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CotrollerEx1 from "./CotrollerEx1";
import { connect } from "react-redux";

class Ex1 extends Component {
    render() {
        return (
            <View style={styleApp.container}>
                <View style={styleApp.header}>
                    <Text style={styleApp.appName}>
                        EXAM 1: {"\n"}APP COMPONENT
                    </Text>
                    <Text style={styleApp.value}>{this.props.myValue}</Text>
                </View>
                <CotrollerEx1 />
            </View>
        );
    }
}

function mapStateProps(state){
    return { myValue : state.value };
}

export default connect(mapStateProps)(Ex1);

const styleApp = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        paddingTop: 30
    },
    header: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
    },
    appName: {
        color: "white",
        fontSize: 30,
        textAlign: "center"
    },
    value: {
        color: "yellow",
        fontSize: 40
    }
});
