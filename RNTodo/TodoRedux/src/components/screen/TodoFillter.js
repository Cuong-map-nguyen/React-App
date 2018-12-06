/* Core */
import React, { Component } from "react";

/* Presentational */
import { View, StyleSheet, Text } from "react-native";
import { ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';

class TodoFillter extends Component {
    constructor(props) {
        super(props);
        this.state = { index:0 };
    }
    _onFill = (index) => {
        this.setState({index});
        if (index == 0) {
    		this.props.dispatch({ type : "Show_All" });
        }
        if (index == 1) {
    		this.props.dispatch({ type : "Show_Check" });
        }
        if (index == 2) {
    		this.props.dispatch({ type : "Show_isCheck" });
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
function mapStateToProps(state){
    return { myFilter : state.fillterStatus };
}

export default connect(mapStateToProps)(TodoFillter);

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
