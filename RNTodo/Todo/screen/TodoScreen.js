import React, { Component } from 'react'
import { 
    Text, 
    StyleSheet, 
    View,
} from 'react-native'

import comments from '../data/TodoData'
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import ToFilter from '../components/ToFilter';
// navigation
import {createStackNavigator, createBottomTabNavigator, createDrawerNavigator} from 'react-navigation';

var randomString = require('random-string');

var complete = [        
];
export default class TodoScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            comments: comments,
            filter: 'all' // all || complete
        };
    }
    addTodo = (value) => {
        const comments = this.state.comments.slice();
        comments.unshift({ 
            key: randomString({length: 64}),
            reply: value,
            checked: 1
        });
        this.setState({comments: comments});
    }
    updateComment = (request) =>{
        this.setState({
            comments : request
        });

    }

    render() {  
        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}> React Native To do</Text>

                <AddTodo addTodo={(value) => {
                    this.addTodo(value);
                }}>
                </AddTodo>

                <TodoList 
                    listComment={this.state.comments}
                    filter={this.state.filter}

                    updateComment={(request) => {
                        this.updateComment(request)
                    }}
                >
                </TodoList>

                <ToFilter
                    filter={this.state.filter}// all || complete
                    onFilterChanged={(filter) => {
                        this.setState({filter});
                    }}
                >
                </ToFilter>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textTitle: {
        height: 50,
        textAlign: 'center',
        fontSize: 30,
        color: '#000',
        marginTop: 20,
    },
})
