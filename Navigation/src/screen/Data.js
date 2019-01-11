//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Content from '../components/Data';
import ImageSwipe from '../components/ImageSwipe';

// create a component
class ViewHome extends Component {
    render() {
        return ( 
            <View style={styles.container}>
                <View style={styles.divSwipe}>
                    <ImageSwipe navigation={this.props.navigation}/>
                </View>
                <View style={styles.divInfo}>
                    <Content navigation={this.props.navigation}/>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center"
    },
    divSwipe: {
        flex: 0.7,
        alignContent: "center",
        justifyContent: "center"
    },
    divInfo: {
        flex: 1.3,
        alignContent: "center",
        justifyContent: "center"
    }
});
//make this component available to the app
export default ViewHome;
