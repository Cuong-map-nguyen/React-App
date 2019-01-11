import React, { Component } from 'react';
import { View } from 'react-native';
import ArrayAllTag from "../data/Array/ArrayAllTag";
import ItemData from "../data/Items/itemTab";

export default class TabViewExample extends Component {
    constructor(props) {
		super(props);
    	this.state = { names: '' };
    }
    
    componentWillMount(){
        let route = this.props.navigation.state.routeName;
        switch (route) {
            case 'Eat & Drink': this.setState({names: ArrayAllTag.Eat})
                break;
            case 'Event': this.setState({names: ArrayAllTag.Event})
                break;
            case 'See & Do': this.setState({names: ArrayAllTag.See})
                break;
            case 'Stay': this.setState({names: ArrayAllTag.Stay})
                break;
            case 'Healthy Care': this.setState({names: ArrayAllTag.Healthy})
                break;
            case 'Goverment': this.setState({names: ArrayAllTag.Goverment})
                break;
            case 'Help Me': this.setState({names: ArrayAllTag.Help})
                break;
            case 'About Us': this.setState({names: ArrayAllTag.About})
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <View style={{flex:1}}>
                { this.state.names.length>0 &&
                    this.state.names.map((data, index) => (
                        <ItemData key={index} navigate={this.props.navigation} data={data} />                
                    ))
                }
            </View>       
        );
    }
}