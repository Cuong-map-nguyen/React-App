// library
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity,Alert } from 'react-native';

export default class Drawer extends Component {

    render() {

        return (
            <View style={styles.div}>
                <Text style={styles.menu}>Menu</Text>
               <View style={styles.col}>
                    <Image style={styles.image} source={require('../image/ic_todo.jpg')} />
                </View>
                <View style={styles.col}>
                    <FlatList
                        data={this.props.items}
                        keyExtractor={(index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.md}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate(item.routeName)}>
                                    <View style={styles.col}>
                                        <View style={styles.row}>
                                            <Text style={styles.text}>{item.key}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.closeDrawer()}>
	                <View>
	                	<Text style={styles.text}>Close</Text>
	                </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    div: {
        width: '100%',
        flex: 1,
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menu: {
        justifyContent: 'center',
        alignItems: 'center',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        color: 'red',
        fontSize: 20,
    },
    md: {
        width: '100%',
    },
    col: {
        padding: 10,
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        borderColor: '#adadad',
        borderBottomWidth: 1,
    },
    row: {
        flex: 1,
        alignItems: 'stretch',
        flexDirection : 'row',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    text: {
        color: 'black',
        fontSize: 17,
    }
});
