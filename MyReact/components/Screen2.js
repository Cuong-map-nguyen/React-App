// bước 1 import thư viện
import React, {Component} from 'react';
// import danh sách những thư viện cần dùng
import {
    Platform, StyleSheet, Text, View, ImageBackground, TextInput, Picker, Button, Alert, Linking
} from 'react-native';

type Props = {};

export default class Screen2 extends Component<Props> {
    // bước 2 viết code cho class hay component: làm quen Render
    constructor(props){
        super(props);
        this.state={
            Text : "",
            vidu : 'value',
        };
    }
    _onPressButton = () => {
        Alert.alert("You clicked Button Save & continue");
    }
    linkinpark = () => {
        Alert.alert("linking in active");
    }
  render() {
   let param = this.props.navigation.state.params;
    return ( 

        <ImageBackground source={require('../images/everest1.jpg')} style={styles.div}> 

            <View style={styles.col}>
            </View>
            <View style={styles.col}>
                <ImageBackground source={require('../images/logo.png')} style={styles.logo}>
                </ImageBackground>
            </View>

            <View style={{flexDirection : 'row'}}>
                <Text>Wellcome back </Text> 
                <Text>  |  </Text> 
                <Text style={styles.href}>{param.tennhap}</Text> 
            </View>

            <View style={styles.col}>
                <View style={styles.divInput}>
                    <Text style={styles.textmini}>Please enter your password</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder = 'Enter your password'
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text} 
                        keyboardType = 'default'
                        secureTextEntry={true}/>

                </View>
            </View>
            
            <View style={styles.row}>

                <Text style={styles.href}>Forgot your password ?</Text>
                <View style={styles.col}>
                </View>
                <View style={styles.divbutton}>
                    <Button
                        buttonStyle={styles.button}
                        onPress={this._onPressButton}
                        title="Login"
                        color="#3dc05b"
                        accessibilityLabel="tiếp bước"/>
                </View>              
                
            </View>

                <Text>The less the world knows about you.</Text>
                <Text>The safe you get</Text>

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
    row : {
        flex : 0.5,
        width: '98%',
        marginTop : '4%',
        flexDirection : 'row',
    },
    logo : {
        height : 100,
        width : 100,
    },
    textInput : {
        height: '100%', 
        width: '100%',
        backgroundColor : '#ffff', 
    },
    divInput : {
        height: '40%',
        width: '98%',
        marginTop : 20,
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
    divbutton : {
        flex : 1,
    },

});
