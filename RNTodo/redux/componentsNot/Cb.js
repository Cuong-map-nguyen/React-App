/* Core */
import React, { Component } from 'react';
import { StyleSheet } from "react-native";
/* Presentational */
import { View, Text } from 'react-native';
import Cc from './Cc';
// import styles from './styles';

export default class Cb extends Component {
  clickb(){
    this.refs.Cc.clickc();
  }
  render() {
    return (
      <View style={{width:150,height:150,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
            <Text>Cb</Text>
            <Cc ref="Cc"></Cc>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    div: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});