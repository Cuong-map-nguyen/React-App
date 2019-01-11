//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity, Linking, Alert } from 'react-native';
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import call from 'react-native-phone-call';
import { shareOnFacebook,shareOnTwitter } from 'react-native-social-share';
// create a component
class Detail extends Component {
    
    _call(number) {
        const args = {
            number: number,
            prompt: false
          }
        Alert.alert(
            'Thông báo?',
            'Xác nhận chuyển tới trang?',
            [
                { text: 'No', onPress: () => console.log('Cancel press') },
                {
                    text: 'Yes', onPress: () => {
                        call(args).catch(console.error)
                    }
                },
        ], { cancelable: true });
    }

    _face(param){
        Alert.alert(
            'Thông báo?',
            'Xác nhận chuyển tới trang?',
            [
                { text: 'No', onPress: () => console.log('Cancel press') },
                {
                    text: 'Yes', onPress: () => {
                        shareOnFacebook({
                            'text':param.title,
                            'link':param.web,
                            'imagelink':param.image,
                            //or use image
                            'image': param.image,
                            'phone' : param.phone,
                          },
                          (results) => {
                            console.log(results);
                          }
                        );
                    }
                },
        ], { cancelable: true });
    }

    _twitter(param){
        Alert.alert(
            'Thông báo?',
            'Xác nhận chuyển tới trang?',
            [
                { text: 'No', onPress: () => console.log('Cancel press') },
                {
                    text: 'Yes', onPress: () => {
                        shareOnTwitter({
                            'text':param.title,
                            'link':param.web,
                            'imagelink':param.image,
                            //or use image
                            'image': param.image,
                            'phone' : param.phone,
                          },
                          (results) => {
                            console.log(results);
                          }
                        );
                    }
                },
        ], { cancelable: true });
    }
   
    _linkWeb (web) {
        Alert.alert(
            'Thông báo?',
            'Xác nhận chuyển tới trang?',
            [
                { text: 'No', onPress: () => console.log('Cancel press') },
                {
                    text: 'Yes', onPress: () => {
                        Linking.openURL('http://'+web)
                    }
                },
        ], { cancelable: true });
    }

    _mapDetail () {
        Alert.alert(
            'Thông báo?',
            'Xác nhận chuyển tới trang?',
            [
                { text: 'No', onPress: () => console.log('Cancel press') },
                {
                    text: 'Yes', onPress: () => {
                        this.props.navigation.navigate('MapDetail')
                    }
                },
        ], { cancelable: true });
    }

    render() {
        let param = this.props.navigation.state.params;
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.div}>
                        <Image style={styles.image} source={param.image}/>
                    </View>
                    <View style={styles.div}>
                        <Text style={styles.textTitle}>
                            {param.title}
                        </Text>
                    </View>
                    <View style={styles.div}>
                        <Text style={styles.textContent}>
                            {param.content}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.divTag} onPress={()=>{this._mapDetail()}}>
                        <View style={styles.divIcon}>
                            <IconMaterialIcons name="location-on" size={35} color="#1c88ed" />
                        </View>
                        <View style={styles.divTextTag}>
                            <Text style={styles.textTag}>
                                {param.location}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.divTag} onPress={()=>{this._call(param.phone)}}>
                        <View style={styles.divIcon}>
                            <IconMaterialIcons name="phone-in-talk" size={35} color="#1c88ed" />
                        </View>
                        <View style={styles.divTextTag}>
                            <Text style={styles.textTag}>
                                {param.phone}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.divTag} onPress={()=>{this.emailHandle()}}>
                        <View style={styles.divIcon}>
                            <IconMaterialCommunityIcons name="fax" size={35} color="#1c88ed" />
                        </View>
                        <View style={styles.divTextTag}>
                            <Text style={styles.textTag}>
                                {param.email}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.divTag} onPress={() => {this._linkWeb(param.web)}}>
                        <View style={styles.divIcon}>
                            <IconMaterialCommunityIcons name="web" size={35} color="#1c88ed" />
                        </View>
                        <View style={styles.divTextTag}>
                            <Text style={styles.textTag}>
                                {param.web}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.divTag}>
                        <View style={styles.divIcon}>
                            <IconMaterialCommunityIcons name="chart-areaspline" size={35} color="#1c88ed" />
                        </View>
                        <View style={styles.divTextTag}>
                            <Text style={styles.textTag}>
                                {param.area}
                            </Text>
                        </View>
                    </View> 
                    <View style={styles.divTag}>
                        <View style={styles.divIcon}>
                            <IconMaterialCommunityIcons name="share-variant" size={35} color="#1c88ed" />
                        </View>
                        <View style={styles.divTextTag}>
                            <TouchableOpacity onPress={()=>{this._twitter(param)}}>
                                <View style={{flexDirection:'row' ,alignItems: 'center',justifyContent:'center',  width: '75%', height: 50,backgroundColor:'#00aced', borderRadius:5}}>
                                    <Text style={{color:'#ffffff',fontWeight:'800',}}>Share on Twitter</Text>
                                    <IconAntDesign name="twitter" size={30} color="#fff"  />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{this._face(param)}}>
                                <View style={{flexDirection:'row' ,alignItems: 'center',justifyContent:'center', width: '75%', height: 50,backgroundColor:'#3b5998', borderRadius:5}}>
                                    <Text style={{color:'#ffffff'}}>Share on Facebook</Text>
                                    <IconAntDesign name="facebook-square" size={30} color="#fff"  />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin:10
    },
    div:{
        flex:1,
        width:'100%'
    },
    image:{
        width:'100%',
        height:Dimensions.get("window").height / 2.3
    },
    textTitle:{
        alignSelf: 'center',
        fontSize:25,
        color:'#000',
        fontFamily:'E'
    },
    textContent:{
        fontSize:20,
        color:'#4F5356',
        fontFamily:'F', 
        padding:10, 
        borderColor:'#000', 
        borderBottomWidth:2,
        justifyContent:'center',
        alignItems:'center'
    },
    divTag:{
        flex:1,
        width:'100%',
        flexDirection:'row', 
        padding:10, 
        borderColor:'#000', 
        borderBottomWidth:2, 
        justifyContent:'center',
        alignItems:'center'
    },
    textTag:{
        fontSize:17,
        color:'#4F5356',
        fontFamily:'B'
    },
    divIcon:{
        width:'10%'
    },
    divTextTag:{
        width:'90%',
        flexDirection:'row',
    }
});

//make this component available to the app
export default Detail;
