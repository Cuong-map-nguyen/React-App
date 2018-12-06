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
    // hàm constructor
    constructor(props){
        super(props);
        console.log('Hello im in console');
    }
    // Hàm chạy trước khi render
    componentWillMount(){
        // 
    } 

    // bước 2 viết code cho class hay component: làm quen Render
  render() {
    return ( 
        <View style={styles.div}>

            <View style={styles.container}>
                <StatusBar hidden/>

                <Text style={styles.welcome}>
                    {hidden}
                </Text>

                <Text style={{fontSize : 30}}> Cường mập </Text>
                <Text style={styles.welcome}>

                    Hello world!!
                    <Text style={styles.welcome}>
                        {welcome}
                    </Text>

                </Text> 
            
                <Text style={styles.instructions}>Để bắt đầu hãy chỉnh sữa App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <Text style={clothe.end}> Fotter </Text>
            </View>

            <View style={styles.horizon}>
            </View>

        </View>
    );
  } 
  componentDidMount(){
    // hàm chạy khi chay xong render 
  }
}

var clothe = StyleSheet.create({
    end : {
        backgroundColor : "#FFC0CB",
        color : "blue",
    },
});// custom

const styles = StyleSheet.create({
   div : {
    flex: 1,
    backgroundColor : 'blue',
    flexDirection: 'column',
  },
  container: {
    // flex 1 là giản kín màn hình 
    // justifyContent thành phần bên trong chiều dài nằm đâu
    // alignItems // chiều rộng
    // flexDirection: 'column' // sắp đặt các backroung nằm dọc , row nằm ngang
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#FFC0CB',
  },
  horizon : {
    flex : 1,
    // justifyContent : 'center',
    // alignItems : 'center',
    backgroundColor : 'red',
  },
  welcome : {
    fontSize : 30,
    textAlign : 'center',
    margin : 10,
  },
  instructions : {
    textAlign : 'center',
    color : '#333333',
    marginBottom : 5,
  },
});
