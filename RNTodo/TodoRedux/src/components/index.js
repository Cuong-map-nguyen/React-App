import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
//
import Todo from "./Todo/index";
//
import { Provider } from "react-redux";
import store from "./store/index";

class index extends Component {
    render() {
        return (
            <Provider store={store}>
                <Todo />
            </Provider>
        );
    }
}

export default index;
