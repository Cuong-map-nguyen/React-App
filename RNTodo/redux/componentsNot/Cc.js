/* Core */
import React, { Component } from 'react';
import { StyleSheet } from "react-native";
/* Presentational */
import { View, Text } from 'react-native';

// import styles from './styles';

export default class Cb extends Component {

  constructor(props) {
    super(props);
    this.state = { mau:'black' };
  }
  clickc(){
    this.setState({
      mau:'yellow'
    });
  }
  render() {
    return (
      <View style={{width:100,height:100,backgroundColor:this.state.mau,justifyContent:'center',alignItems:'center'}}>
            <Text>Cb</Text>
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