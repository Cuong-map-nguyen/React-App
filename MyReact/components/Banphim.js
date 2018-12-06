/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// bước 1 import thư viện
import React, {Component} from 'react';
// import danh sách những thư viện cần dùng
import {
    Platform, StyleSheet, Text, View, StatusBar
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'bấm 2 lần phím R để reload lại js, \n ' + '' ,
});

const welcome = Platform.select({
  ios: 'Ios',
  android:
    'Android' ,
});

const hidden = Platform.select({
  ios: 'hidden="true"',
  android:
    'hidden' ,
});

type Props = {};
export default class App extends Component<Props> {

    // bước 2 viết code cho class hay component: làm quen Render
  render() {
    return ( 
        <View style={styles.contai}>

            <View style={styles.dong}>
                    <View style={styles.cot}>
                        <Text>1</Text>
                    </View>
                    <View style={styles.cot}>
                        <Text>2</Text>
                        <Text>ABC</Text>
                    </View>
                    <View style={styles.cot}>
                        <Text>3</Text>
                        <Text>DEF</Text>
                    </View>  
            </View>

            <View style={styles.dong}>
                <View style={styles.cot}>
                    <Text>4</Text>
                    <Text>GHI</Text>
                </View>
                <View style={styles.cot}>
                    <Text>5</Text>
                    <Text>JKL</Text>
                </View>
                <View style={styles.cot}>
                    <Text>6</Text>
                    <Text>MNO</Text>
                </View>
            </View>

            <View style={styles.dong}>
                <View style={styles.cot}>
                    <Text>7</Text>
                    <Text>PQRS</Text>
                </View>
                <View style={styles.cot}>
                    <Text>8</Text>
                    <Text>TUV</Text>
                </View>
                <View style={styles.cot}>
                    <Text>9</Text>
                    <Text>WXYZ</Text>
                </View>
            </View>

            <View style={styles.dong}>
                <View style={styles.cot}>
                    
                </View>
                <View style={styles.cot}>
                    <Text>0</Text>
                </View>
                <View style={styles.cot}>
                   <Text>x</Text>
                </View>
            </View>

        </View>
    );
  } 
}

const styles = StyleSheet.create({

   contai : {
    flex: 1,
    flexDirection : 'column',
  },
  dong : {
    flex : 1,
    borderBottomColor : 'gray' ,
    borderBottomWidth : 1 ,
    backgroundColor : 'red',
    flexDirection : 'row',
  },
  cot : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    borderRightColor : 'gray' ,
    borderRightWidth : 1 ,
    backgroundColor : '#ffff',
  },

});
