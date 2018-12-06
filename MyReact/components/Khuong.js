/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

// import styles from './styles';
type Props = {};

export default class Khuong extends Component<Props> {

    constructor(props) {
      super(props);

      this.state = {
        numberlucky : 999
      };
    }

    render() {
        return (
          <View style={styles.div}> 
            
          </View>
        );
    }
}

const styles = StyleSheet.create({
    div : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    }
});
/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, Text, StyleSheet, TouchableOpacity, Alert, ListView } from 'react-native';

// import styles from './styles';
type Props = {};

export default class ListView extends Component<Props> {

    constructor(props) {
      super(props);
      this.ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
      this.state = {
        numberlucky : 999
      };
    }

    render() {
        return (
          <View style={styles.div}> 
            <ListView
              dataSource = {
                this.ds.cloneWithRows([
                  {ten : 'Nguyễn Mạnh a', tuoi : '16' , nganh : 'Công nghệ'},
                  {ten : 'Nguyễn Mạnh b', tuoi : '17' , nganh : 'Điện'},
                  {ten : 'Nguyễn Mạnh c', tuoi : '18' , nganh : 'Toán'}
                ])
              }
              renderRow = {(rowdata) => {
                return(
                    <Text>{rowdata.ten}</Text>
                  )
              }}
            />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    div : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    }
});