/* Core */
import React, { Component } from "react";
/* Presentational */
import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text
} from "react-native";
//
import { connect } from "react-redux";
import actions from "../actions/Add";

class TodoAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };
    }
    render() {
        return (
            <View style={styles.div}>
                <View style={styles.viewInput}>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={text => this.setState({ value: text })}
                        value={this.state.value}
                        placeholder="Comment..."
                    />
                    <TouchableOpacity
                        style={styles.viewButton}
                        onPress={() => {
                            this.props.Add(this.state.value);
                        }}
                    >
                        <View>
                            <Text style={styles.font}>Add</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    Add: (value) => dispatch(actions.add(value))
});

export default connect(
    null,
    mapDispatchToProps
)(TodoAdd);

const styles = StyleSheet.create({
    div: {
        flex: 0.2,
        width: "100%"
    },
    viewInput: {
        height: "70%",
        padding: "2%",
        flexDirection: "row"
    },
    formInput: {
        flex: 1.7,
        height: "100%",
        borderColor: "gray",
        borderWidth: 1,
        padding: 1,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        fontSize: 16,
        marginRight: "2%"
    },
    viewButton: {
        backgroundColor: "rgba(92, 99,216, 1)",
        alignItems: "center",
        justifyContent: "center",
        flex: 0.3,
        height: "100%",
        width: "100%",
        borderRadius: 10
    },
    font: {
        fontSize: 17,
        color: "#fff"
    }
});
