import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

export default class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <View style={styles.viewInput}>
                <TextInput 
                    style={styles.formInput}
                    onChangeText={(text) => this.setState({value: text})}
                    value = {this.state.value}
                    placeholder='Comment...'
                >
                </TextInput>
                <Button
                    title='Add' 
                    onPress= {() => {
                        if(this.state.value.length > 0){
                            this.props.addTodo(this.state.value);
                        } else
                            alert('Vui lòng nhập dữ liệu ?');
                    }}
                    buttonStyle={{
                        backgroundColor: "rgba(92, 99,216, 1)",
                        height: 35,
                        borderColor: "transparent",
                        borderWidth: 0,
                        width: 60,
                        borderRadius: 5
                    }}
                />
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewInput: {
        height: 60,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    formInput: {
        flex: 20,
        height: 35,
        borderColor: 'gray',
        borderWidth: 1, 
        padding: 1,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        fontSize: 16,
        marginRight: 15
    },
})
