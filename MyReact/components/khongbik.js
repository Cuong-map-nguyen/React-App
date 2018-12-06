/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput, Button, SectionList } from 'react-native';

// import styles from './styles';
type Props = {};

export default class Khuong extends Component<Props> {

    constructor(props) {
      super(props);
      this.state = {
        text : '',
        isSubmit: true,
        todo : [],
        mang: [],
        active : true,
        sectionData: {
        	title: 'Todo:', 
        	data : [] , 
        	id: Math.random()
        }
        };
        this.count = 0;


    }

	click = () => {
        
        if (this.state.text == null || this.state.text == "") {
        	Alert.alert("You clicked Button Save & continue");
        } else {
        	// this.setState({
        	// text : this.state.text,
        	// todo: this.state.todo.concat(this.state.text),
        	// }) 
        	const sdfsdf = { id: Math.rondom}
        	this.setState({
        		sectionData : {
        			...this.state.sectionData,
        			data : [...this.state.sectionData.data, { id: Math.random(), text: this.state.text }]
        		},
        		isSubmit: false
        	},()=> this.setState({
        		text: '',
        	}))
        }

    }

    active = (section, item, index, seactionData) => {
    	//  const result = seactionData[0].data.map((e, i) => {
    	// 	if(i === index) {
    	// 		return e = "vvvv";
    	// 	}
    	// 	return e
    	// })
    	//  console.log(result)
    	console.log(this.state.sectionData);
    }

    linkinpark = () => {
        	if (this.state.active == true) {
        		Alert.alert("active");
        	} else {
        		Alert.alert("not active");
        	}
    	}

	showall = () => {
		Alert.alert("showall");
	}

	edit = (item) => {
	
		this.setState({
			id: item.id,
			text: item.text,
		},()=>console.log('text'))
	}

    render() {
    	// var seactionData = [{title: 'Todo:', data : this.state.todo , isActive : this.state.active}];
        return (
          <View style={styles.div}> 
          		<View style={styles.col}>
	           		<View style={styles.divInput}>
		            	<TextInput
		                        style={[styles.textInput,!this.state.nameValidate? styles.error:null]}
		                        placeholder = 'Enter Todo'
		                        onChangeText={(text) => this.setState({text})}
		                        value={this.state.text} 
		                        keyboardType = 'default'/>
		  				{
		  					this.state.isSubmit ?
		  					<Button
		                    buttonStyle={styles.button}
		                    onPress={this.click}
		                    title="SAVE & CONTUNUE"
		                    color="#3dc05b"
		                    accessibilityLabel="tiếp bước"/>  
		                    :
		                    <Button
		                    buttonStyle={styles.button}
		                    onPress={this.edit}
		                    title="EDIT"
		                    color="#3dc05b"
		                    accessibilityLabel="tiếp bước"/>  
		  				}
	                </View> 
                </View>
                <View style={styles.md}>
                	{
                		this.state.sectionData.data.map((item, index) => 
                			<TouchableOpacity key={index} onPress={()=> this.edit(item)}>
                				<Text>{item.text}</Text>
                			</TouchableOpacity>
                		)
                	}
                </View>
                <View style={styles.footer}>
		            <Text style={styles.href}
		                onPress={this.showall}>
		                Show all
		                </Text>
		                <Text>   |   </Text>
		                <Text style={styles.href}
		                    onPress={this.linkinpark}>
		                  	Complete
		            </Text>
                </View>
          </View>
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
        width: '100%',
    },
    md : {
    	flex : 1,
    	width: '100%',
    	backgroundColor : 'red',
    },
    footer : {
    	alignItems : 'flex-end',
        flexDirection : 'row',
        flex : 1,
    },
    textInput : {
        width: '100%',
        backgroundColor : '#ffff', 
    },
    divInput : {
        width: '100%',
        backgroundColor : '#ffff',
    },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
    href : {
        color: 'blue',
        fontSize : 20 ,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#000",
    }
});
