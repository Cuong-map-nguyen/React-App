/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, StyleSheet, FlatList, Text, SectionList } from 'react-native';

// import styles from './styles';
type Props = {};


export default class ListView extends Component<Props> {
  constructor(props) {
      super(props);
      this.state = {
        numberlucky : 999
      };
    }
  render() {
    return (
      <View style={styles.div}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        <View style={styles.col}>
            <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
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
        backgroundColor : 'red',
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
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
  }
});<SectionList
                sections={[
                  {title: 'Todo:', data : this.state.todo , isActive : this.state.active},
                ]}
                keyExtractor={(item, index) => index}
                renderItem={({section, item, index}) => <Text style={styles.item} key={index} onPress={() => this.active(section, item, index)}> 
                {item}
                {index}
                {section.isActive}
                </Text> }
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader} >
                {section.title}
                </Text>}
                
              />