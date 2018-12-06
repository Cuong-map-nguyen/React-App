/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput, Button, FlatList } from 'react-native';

// import styles from './styles';
type Props = {};

export default class Khuong extends Component<Props> {

    constructor(props) {
      super(props);

      this.state = {
        text : '',
        todo : [],
        number : 1,
        };

    }

	click = () => {
        Alert.alert("You clicked Button Save & continue");
        this.setState({
        	number : this.state.number + 1,
        	todo : this.state.text.concat([this.state.number]),

        }) 

    }


    linkinpark = () => {
        Alert.alert("Complete in active");
    	}

	showall = () => {
		Alert.alert("showall in active");
	}

    render() {
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

		               	<Text style={{color : 'red'}}>{this.state.validate}</Text>
		               	<Text>{this.state.todo}</Text>
		                <Button
	                    buttonStyle={styles.button}
	                    onPress={this.click}
	                    title="SAVE & CONTUNUE"
	                    color="#3dc05b"
	                    accessibilityLabel="tiếp bước"/>  
	                </View> 
                </View>
                <View style={styles.md}>
                	<SectionList
                      sections={[
                        {title: 'Todo:', data : this.state.todo , id : this.state.id , isActive : this.state.active},
                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                      ]}
                      renderItem={({item}) => <Text style={styles.item}>
                      {item}
                      {item.id}
                      </Text>}
                      renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>
                      {section.title}
                      </Text>}
                      keyExtractor={(item, index) => index}
                    />
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
