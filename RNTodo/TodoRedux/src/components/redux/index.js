import React, { Component } from "react";
import Todo from "../Todo/index";
//
import { Provider } from "react-redux";
import store from "../redux/store/index";

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
