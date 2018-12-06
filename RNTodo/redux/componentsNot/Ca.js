/* Core */
import React, { Component } from "react";
import { StyleSheet } from "react-native";
/* Presentational */
import { View, Text } from "react-native";
import Cb from "./Cb";
// import styles from './styles';

export default class Ca extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    clicka() {
        this.refs.Cb.clickb();
    }
    render() {
        return (
            <View
                style={{
                    width: 200,
                    height: 200,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "blue"
                }}
            >
                <Text>Ca</Text>
                <Cb ref="Cb"/>
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
