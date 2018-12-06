import React, { Component } from "react";
import { Provider } from "react-redux";
import App from "./Ex1";
import store from './store';

class index extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}
export default index;
