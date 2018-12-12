/* Core */
import React, { Component } from "react";

/* Presentational */
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import actions from "../redux/actions/Action";

class TodoList extends Component {
    getData(){
        const {myFilter, myValue} = this.props;
        if (myFilter == 'Show_All') {
            return myValue;
        }if(myFilter == 'Show_Check'){
            return myValue.filter(e => e.memorized);
        }
        if(myFilter == 'Show_isCheck'){
            return myValue.filter(e => !e.memorized);
        }
    }
    render() {
        return (
            <View style={styles.div}>
                <FlatList
                    data={this.getData()}
                    keyExtractor={(index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <View key={index} style={styles.viewFL}>
                                <TouchableOpacity onPress={item.memorized == true ? () => {this.props.Checked(item.id)} : () => {this.props.Check(item.id)} }>
                                    <View style={styles.item}>
                                        <Text style={item.memorized == true ? styles.line : styles.text}>{item.en}</Text>
                                        <Text style={item.memorized == true ? styles.line : styles.text}>{item.vn}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                    
                />
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    Check: (id) => dispatch(actions.check(id)),
    Checked: (id) => dispatch(actions.checked(id))
});

function mapStateProps(state){
    return {
         myValue : state.arrayWords,
         myFilter : state.fillterStatus
    };
}

export default connect(mapStateProps,mapDispatchToProps)(TodoList);

const styles = StyleSheet.create({
    div: {
        flex: 1.6,
		width: "100%",
		padding:5,
		borderColor: "#adadad",
        borderWidth: 1
    },
    viewFL: {
        width: "100%",
        padding:1,
    },
    item: {
        padding: 10,
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#f8f8f8",
        borderColor: "#adadad",
        borderWidth: 1
    },
    text: {
        color: "black",
        fontSize: 17
    },
    line:{
        textDecorationLine: 'line-through',
        color: "black",
        fontSize: 17
    }
});
