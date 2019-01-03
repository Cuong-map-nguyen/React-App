//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


// create a component
class Detail extends Component {
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
                    <View style={styles.divTag}>
                        <View style={styles.divIcon}>
                            <IconMaterialIcons name="location-on" size={35} color="#1c88ed" />
                        </View>
                        <View style={styles.divTextTag}>
                            <Text style={styles.textTag}>
                                {param.location}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.divTag}>
                        <View style={styles.divIcon}>
                            <IconMaterialIcons name="phone-in-talk" size={35} color="#1c88ed" />
                        </View>
                        <View style={styles.divTextTag}>
                            <Text style={styles.textTag}>
                                {param.phone}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.divTag}>
                        <View style={styles.divIcon}>
                            <IconMaterialCommunityIcons name="fax" size={35} color="#1c88ed" />
                        </View>
                        <View style={styles.divTextTag}>
                            <Text style={styles.textTag}>
                                {param.fax}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.divTag}>
                        <View style={styles.divIcon}>
                            <IconMaterialCommunityIcons name="web" size={35} color="#1c88ed" />
                        </View>
                        <View style={styles.divTextTag}>
                            <Text style={styles.textTag}>
                                {param.web}
                            </Text>
                        </View>
                    </View>
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
        width:'90%'
    }
});

//make this component available to the app
export default Detail;
