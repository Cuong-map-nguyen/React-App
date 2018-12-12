import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import getTemp from '../Api/getTemp';
import { connect } from 'react-redux';
import actions from "../redux/actions/actions"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        cityName : '',
    };
  }

  GetTempButton = () => {
      const {cityName} = this.state;
        this.props.dataThunk(cityName);
        // getTemp(cityName)
        // .then(temp => this.props.Success(cityName, temp))
        // .catch(error => this.props.error(cityName));
  }

  GetWetherMessage(){
        const{ error, isLoading, cityName, temp} = this.props;
        if(isLoading) return '...isLoading';
        if(error == true) return 'Vui lòng nhập lại';
        if(!cityName) return 'Nhập tên thành phố của bạn';
        return `${cityName} hiện tại là ${temp} độ c`;
  }

  render() {    
    return (
        <View style={styles.container}>
        <Text style={styles.message}>{this.GetWetherMessage()}</Text>
        <TextInput 
            style={styles.textInput}
            value={this.state.cityName}
            onChangeText={text => this.setState({ cityName: text })}
        />
        <Text>{this.state.cityName}</Text>
        <TouchableOpacity style={styles.button} onPress={this.GetTempButton}>
            <Text style={styles.buttonText}>Lấy nhiệt độ</Text>
        </TouchableOpacity>
    </View>
    );
  }
}

function mapStateToProps(state){
    return {cityName : state.cityName, 
        temp : state.temp, 
        error : state.error, 
        isLoading : state.isLoading
    };
}

const mapDispatchToProps = dispatch => ({
    Loading: () => dispatch(actions.loading()),
    Success: (cityName, temp) => dispatch(actions.success(cityName, temp)),
    error: (cityName) => dispatch(actions.error(cityName)),   
    dataThunk: (cityName) => dispatch(actions.dataThunk(cityName)),    
});

export default connect(mapStateToProps,mapDispatchToProps)(App);

const styles = StyleSheet.create({
    container: { 
        backgroundColor: 'lightblue', 
        flex: 1, 
        alignSelf: 'stretch', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    message: {
        color: 'white',
        fontSize: 25
    },
    button: {
        backgroundColor: 'gray',
        padding: 10,
        margin: 50
    },
    buttonText: {
        color: 'white'
    },
    textInput: {
        margin: 10,
        backgroundColor: 'black',
        height: 40,
        paddingHorizontal: 10,
        color: 'white'
    }
});
