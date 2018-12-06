import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class ToFilter extends Component {
    render() {
        
        return (
            <View style={styles.search}>
                <Text
                    style={{...styles.textSize, textDecorationLine: this.props.filter === 'all' ?'underline' : 'none'}}
                    onPress={() => {
                        this.props.onFilterChanged('all');
                    }}
                > Show all </Text>
                <Text 
                    style={{...styles.textSize, textDecorationLine: this.props.filter === 'complete' ?'underline' : 'none'}}
                    onPress={() => {
                        this.props.onFilterChanged('complete');
                    }}
                > Complete </Text>
        </View> 
        )
    }
}

const styles = StyleSheet.create({
    search: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textSize: {
        fontSize: 18,
        padding: 0,
        marginLeft: 20
    },
})
