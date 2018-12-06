// bước 1 import thư viện
import React, {Component} from 'react';
// import danh sách những thư viện cần dùng
import {
    StyleSheet, Text, View, ScrollView, TextInput
} from 'react-native';
import { ButtonGroup, Header, Slider, Rating  } from 'react-native-elements';
type Props = {};

export default class Screen3 extends Component<Props> {
    // bước 2 viết code cho class hay component: làm quen Render
    constructor(props){
        super(props);

        this.state = {
           value : 18,
           idgender: 0,
           idaddress: 0,
       };
        
    }

  gender = (idgender) => {
    this.setState({idgender})
  }
  address = (idaddress) => {
    this.setState({idaddress})
  }
  ratingCompleted(rating) {
    }      
  render() {
    return ( 
        
        <ScrollView style={styles.scroll}>
            <Header 
            backgroundColor="#4db84d"
              leftComponent={{ icon: 'menu', color: '#fff' }}
              centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
              rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <View style={styles.div}>
                <View style={styles.divtext}>
                    <Text>Opps, you need to give us 
                    to continue. You can modify it late by click on your name or by the menu</Text>
                </View>

                <View style={styles.divYA}>
                    <Text>YOUR ARE</Text>
                </View>

                <View style={{width:'98%', alignItems: 'stretch', justifyContent: 'center' ,backgroundColor: '#ffff',padding: 10}}>
                     <Slider
                        value={this.state.value}
                        maximumValue={65}
                        minimumValue={16}
                        maximumTrackTintColor="#f8f8f8"
                        minimumTrackTintColor="#4db84d"
                        thumbTintColor="#4db84d"
                        step={1}
                        onValueChange={(value) => this.setState({value})} />
                        <Text>Age: {this.state.value}</Text>               
                </View>

                <View style={styles.divYA}>
                    <Text>YOUR INTERESTED</Text>
                </View>

                <View style={{width:'98%', alignItems: 'stretch', justifyContent: 'center' ,backgroundColor: '#ffff',padding: 10}}>
                <ButtonGroup
                        onPress={this.gender}
                        underlayColor="#4db84d"
                        innerBorderStyle={{width: 4,color: '#4db84d'}}
                        containerStyle={{height: 30, backgroundColor: 'transparent', borderColor: '#4db84d'}}
                        selectedIndex={this.state.idgender}
                        selectedTextStyle={{color : 'green', fontSize : 18}}
                        buttons={['Male', 'Female' , 'Other']}
                        />
                </View>

                <View style={styles.divYA}>
                    <Text>YOUR ARE?</Text>
                </View>

                <View style={{width:'98%', alignItems: 'stretch', justifyContent: 'center' ,backgroundColor: '#ffff',padding: 10}}>
                <ButtonGroup
                        onPress={this.address}
                        underlayColor="#4db84d"
                        innerBorderStyle={{width: 4,color: '#4db84d'}}
                        containerStyle={{height: 30, backgroundColor: 'transparent', borderColor: '#4db84d'}}
                        selectedIndex={this.state.idaddress}
                        selectedTextStyle={{color : 'green', fontSize : 18}}
                        buttons={['All', 'Local' , 'On a Visit']}
                        />
                </View>

                <View style={styles.divYA}>
                    <Text>YOUR FAVOURITE</Text>
                </View>

                <View style={{width:'98%', alignItems: 'stretch', justifyContent: 'center' ,backgroundColor: '#ffff',padding: 10}}>
                <TextInput
                        style={styles.textInput}
                        editable = {true}
                        multiline = {true}
                        placeholder = 'Enter your name'
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text} />  
                </View>

                <View style={styles.divYA}>
                    <Text>EMAIL ADDRESS</Text>
                </View>

                <View style={{width:'98%', alignItems: 'stretch', justifyContent: 'center' ,backgroundColor: '#ffff',padding: 10}}>
                <TextInput
                        style={styles.textInput}
                        editable = {true}
                        multiline = {true}
                        placeholder = 'Enter your name'
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text} />  
                </View>

                <View style={{width:'98%', flexDirection:"row", alignItems: 'center', justifyContent: 'center' ,backgroundColor: '#f8f8f8',padding: 10}}>
                    <Text style={{color:'red'}}>YOUR RATE:</Text>
                    <View style={styles.divYA}>
                    </View>
                    <Rating
                      imageSize={20}
                      onFinishRating={this.ratingCompleted}
                      onStartRating={this.ratingStarted}
                    />
                </View>
            </View>
        </ScrollView>
        
    );
  } 

}

const styles = StyleSheet.create({

    scroll : {
        flex : 1,
    },
    div : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#f8f8f8',
    },
    col : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    divtext : {
        flex : 1,
        padding : 10,
        width : '100%',
        backgroundColor : '#ffff',
        justifyContent : 'center',
        alignItems : 'stretch',
        flexDirection : 'row',
    },
    divYA : {
        flex : 1,
        width : '100%',
        padding : 10,
        flexDirection : 'row',
    },
    
});
