//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, BackHandler } from 'react-native';
import Content from '../components/Content';
import ImageSwipe from '../components/ImageSwipe';

// create a component
class ViewHome extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return ( 
            <View style={styles.container}>
                <View style={styles.divSwipe}>
                    <ImageSwipe/>
                </View>
                <View style={styles.divInfo}>
                    <Content navigation={this.props}/>
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
