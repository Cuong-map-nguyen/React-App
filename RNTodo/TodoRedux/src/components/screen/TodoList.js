/* Core */
import React, { Component } from "react";

/* Presentational */
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
// import styles from './styles';

class TodoAdd extends Component {

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

    Checked = (item) => {
        if (item.memorized == true) {
            this.props.dispatch({
                type: 'Checked',
                id : item.id
            });
        } else {
            this.props.dispatch({
                type: 'Check',
                id : item.id
            });
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
                                <TouchableOpacity onPress={() => {this.Checked(item)}}>
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
function mapStateProps(state){
    return {
         myValue : state.arrayWords,
         myFilter : state.fillterStatus
    };
}

export default connect(mapStateProps)(TodoAdd);

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
