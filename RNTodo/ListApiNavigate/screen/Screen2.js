/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Image, StyleSheet } from 'react-native';

// import styles from './styles';

export default class Screen2 extends Component {
  static navigationOptions = {
    tabBarIcon : ({ tintColor }) => (
      <Image
        source = {require('../images/ic_home.png')}
        style = {[styles.icon, {tintColor:tintColor}]}
      /> 
    ),
  };
  render() {
    return (
      <View />
    );
  }
}

const styles = StyleSheet.create({
  icon : {
    width : 20 ,
    height : 20,
  }
});