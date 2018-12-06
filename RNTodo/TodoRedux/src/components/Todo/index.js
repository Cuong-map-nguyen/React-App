import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
//
import TodoAdd from "../screen/TodoAdd";
import TodoList from "../screen/TodoList";
import TodoFillter from "../screen/TodoFillter";
//
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={styles.div}>
                <TodoAdd />
                <TodoList />
                <TodoFillter />
            </View>
        );
    }
}

export default index;

const styles = StyleSheet.create({
    div: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
