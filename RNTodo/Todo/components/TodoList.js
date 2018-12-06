import React, { Component } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { CheckBox} from 'react-native-elements'

export default class TodoList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let comments = this.props.listComment.slice();
        let filter = this.props.filter;
        
        if (filter == 'complete')
            comments = comments.filter(c => c.checked == 0);
        return (
            <View style={styles.flatList}>
                <FlatList
                    data={comments}
                    renderItem={({ item, index }) => {
                        return <View key={index} style={styles.viewFL}>
                                    <CheckBox
                                        checked={item.checked == 1 ? false : true}
                                        title={item.reply}
                                        onPress= {() => {
                                            let request = this.props.listComment.slice();
                                            let comment = request.filter(c => c.key == item.key)[0];
                                            console.log(comment);
                                            comment.checked = item.checked == 1 ? 0 : 1;
                                            this.props.updateComment(request);
                                        }}
                                        textStyle={{textDecorationLine: item.checked == 0 ? 'line-through' : 'none'}}
                                    />
                                </View>
                    }}

                >
                </FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flatList: {
        flex: 78,
    },
    viewFL: {
        paddingLeft: 20,
        paddingTop: 5,
        paddingBottom: 5
    }
})
