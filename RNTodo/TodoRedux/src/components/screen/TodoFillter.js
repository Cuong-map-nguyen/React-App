/* Core */
import React, { Component } from "react";

/* Presentational */
import { View, StyleSheet, Text } from "react-native";
import { ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';
import actions from "../redux/actions/Action";

class TodoFillter extends Component {
    constructor(props) {
        super(props);
        this.state = { index:0 };
    }
    _onFill = (index) => {
        this.setState({index});
        if (index == 0) {
    		this.props.ShowAll();
        }
        if (index == 1) {
    		this.props.ShowCheck();
        }
        if (index == 2) {
    		this.props.ShowChecked();
    	}
    }
    render() {
        return (
            <View style={styles.div}>
                <View style={styles.divInput}>
                    <ButtonGroup
                        onPress={this._onFill}
                        selectedIndex={this.state.index}
                        buttons={["Show all", "Complete", "NotComplete"]}
                        containerStyle={{ height: '70%' }}
                    />
                </View>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    ShowAll: () => dispatch(actions.showAll()),
    ShowCheck: () => dispatch(actions.showCheck()),
    ShowChecked: () => dispatch(actions.showChecked())
});

export default connect(null,mapDispatchToProps)(TodoFillter);

const styles = StyleSheet.create({
    div: {
        flex: 0.2,
        width: "100%",
        alignItems : 'flex-end',
		    flexDirection : 'row',
    },
    divInput : {
      width: '98%',
      justifyContent : 'center',
      alignItems : 'center',
      backgroundColor : '#ffff',
    },
});
