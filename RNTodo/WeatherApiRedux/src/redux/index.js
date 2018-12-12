import React, { Component } from "react";
import Weather from "../components/App";
//
import store from '../redux/store/store';
import { Provider } from "react-redux";

class index extends Component {
    render() {
        return (
            <Provider store={store}>
                <Weather/>
            </Provider>
        );
    }
}

export default index;
