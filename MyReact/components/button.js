// bước 1 import thư viện
import React, {Component} from 'react';
// import danh sách những thư viện cần dùng
import {
    Platform, StyleSheet, Text, View, ImageBackground, TextInput, Picker, Button, Alert, Linking, TouchableOpacity
} from 'react-native';

import Screen2 from "../components/Screen2.js";
type Props = {};

export default class Screen1 extends Component<Props> {
 // bước 2 viết code cho class hay component: làm quen Render
    constructor(props){
        super(props);
        this.state={
            text : "",
            name : '',
            isText: false
        };
    }

    isFunction = () => {
        this.setState({
            isText: !this.state.isText
        })
    }
    _onPressButton = () => {
        Alert.alert("You clicked Button Save & continue");
    }
    linkinpark = () => {
        Alert.alert("linking in active");
    }
  render() {
    return ( 

        <ImageBackground source={require('../images/everest1.jpg')} style={styles.div}> 

            <View style={styles.col}>
            </View>
            <View style={styles.col}>
                <ImageBackground source={require('../images/logo.png')} style={styles.logo}>
                </ImageBackground>
            </View>
            <View style={styles.col}>
                <Text>The less the world knows about you.</Text>
                <Text>The safe you get</Text>
                <View style={styles.divInput}>
                    <TextInput
                        style={styles.textInput}
                        placeholder = 'Enter your name'
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text} />

                </View>
            </View>
            
            <View style={styles.lg}>
                <Text style={styles.textmini}>(This can not be changed late)</Text>

                <Picker
                    selectedValue={this.state.language}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="English" value="English" />
                    <Picker.Item label="Tiếng Việt" value="TiengViet" />
                </Picker>

                <Button
                    buttonStyle={styles.button}
                    onPress={this._onPressButton}
                    title="SAVE & CONTUNUE"
                    color="#3dc05b"
                    accessibilityLabel="tiếp bước"/> 
                    // {
                    //     this.state.isText ?
                    //     <TouchableOpacity onPress={this.isFunction} style={{width: 200, height: 50, backgroundColor: 'blue', borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                    //     <Text>A</Text>
                    // </TouchableOpacity>
                    // :
                    // <TouchableOpacity onPress={this.isFunction} style={{width: 200, height: 50, backgroundColor: 'red', borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                    //     <Text>asdasd</Text>
                    // </TouchableOpacity>
                    // }              
                
            </View>

            <View style={styles.footer}>
                <Text style={styles.href}
                onPress={() => Linking.openURL('http://google.com')}>
                Policy
                </Text>
                <Text>   |   </Text>
                <Text style={styles.href}
                    onPress={this.linkinpark}>
                    Contact
                </Text>
            </View>
            
        </ImageBackground>
    );
  } 

}

const styles = StyleSheet.create({

    div : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    col : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        width: '98%',
    },
    lg : {
        flex : 1,
        width: '98%',
    },
    logo : {
        height : 100,
        width : 100,
    },
    textInput : {
        height: '88%', 
        width: '100%',
        backgroundColor : '#ffff', 
        borderBottomWidth: 1,
        borderBottomColor: '#083d08',
    },
    divInput : {
        height: '40%',
        width: '100%',
        backgroundColor : '#ffff',
        marginTop : 20,
    },
    picker : {
         height: '32%',
         width: '100%',
         backgroundColor : '#ffff',
         marginBottom : 10,
    },
    footer : {
        alignItems : 'flex-end',
        flexDirection : 'row',
        flex : 1,
    },
    href : {
        color: 'blue',
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#000",
    },
    textmini : {
        color : 'gray',
    },

});
