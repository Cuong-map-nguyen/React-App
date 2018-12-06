import React, { Component } from "react";
/* Presentational */
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ButtonGroup } from "react-native-elements";

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1
        };
    }

    _buttonGroup = index => {
        this.setState({ index });
        this.props.onButtonClear(index);
        if (index == 2) {
            // props navigate
            this.props.navigation.navigate("Create", {
                onNavigateBack: this.props.handleOnNavigateBack
            });
        }
    };
    
    render() {
        return (
            <View>
                <ButtonGroup
                    onPress={this._buttonGroup}
                    underlayColor="#4db84d"
                    innerBorderStyle={{width: 3,color: '#4db84d'}}
                    selectedTextStyle={{color : 'green', fontSize : 18}}
                    selectedIndex={this.state.index}
                    buttons={["Clear", "Show all", "Create"]}
                    containerStyle={{ height: "80%" }}
                />
            </View>
        );
    }
}
