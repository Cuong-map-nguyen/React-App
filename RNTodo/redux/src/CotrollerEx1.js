import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {connect} from 'react-redux';
import actions from './actions/Ex1';

class ControllerEx1 extends Component {
    
    render() {
        return (
            <View style={styleController.controller}>
                <Text style={styleController.controllName}>
                    CONTROLLER COMPONENT
                </Text>
                <View style={styleController.buttonContainer}>
                    <TouchableOpacity style={styleController.button} onPress= {this.props.goUp}>
                        <Text style={styleController.buttonText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styleController.button} onPress= {this.props.goDown}>
                        <Text style={styleController.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

  const mapDispatchToProps = dispatch => ({
    goUp: () => dispatch(actions.goUp()),
    goDown: () => dispatch(actions.goDown()),
  });
  export default connect(
    null,
    mapDispatchToProps
  )(ControllerEx1);

const styleController = StyleSheet.create({
    controller: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'yellow',
        alignSelf: 'stretch',
        margin: 20
    },
    controllName: {
        fontSize: 20,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 50,
        paddingVertical: 25,
        margin: 10,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 40
    }
});