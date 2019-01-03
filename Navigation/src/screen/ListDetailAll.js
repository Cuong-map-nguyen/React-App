import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native';
import { SearchBar } from "react-native-elements";
// 
import ArrayAll from "../data/Array/ArrayAll";
import ItemData from "../data/Items/itemListDetail"

export default class ListDetail extends Component {

	constructor(props) {
		super(props);
    	this.state = {
      		names: '',
    	};
	  }
	
	componentWillMount(){
		const {routeName} = this.props.navigation.state;
		switch (routeName) {
			case 'Restaurant' : this.setState({names:ArrayAll.Restaurant})
				break;
			case 'StreetFood' : this.setState({names:ArrayAll.StreetFood})
				break;
			case 'About' : this.setState({names:ArrayAll.About})
				break;
			case 'Abandon' : this.setState({names:ArrayAll.Abandon})
				break;
			case 'Attraction' : this.setState({names:ArrayAll.Attraction})
				break;
			case 'BarPub' : this.setState({names:ArrayAll.BarPub})
				break;
			case 'Churches' : this.setState({names:ArrayAll.Churches})
				break;
			case 'Clinic' : this.setState({names:ArrayAll.Clinic})
				break;
			case 'CoffeeShop' : this.setState({names:ArrayAll.CoffeeShop})
				break;
			case 'DragonFire' : this.setState({names:ArrayAll.DragonFire})
				break;
			case 'Firefighter' : this.setState({names:ArrayAll.Firefighter})
				break;
			case 'FireWork' : this.setState({names:ArrayAll.FireWork})
				break;
			case 'Golf' : this.setState({names:ArrayAll.Golf})
				break;
			case 'Handicraft' : this.setState({names:ArrayAll.Handicraft})
				break;
			case 'Homestay' : this.setState({names:ArrayAll.Homestay})
				break;
			case 'Hospital' : this.setState({names:ArrayAll.Hospital})
				break;
			case 'Hotel' : this.setState({names:ArrayAll.Hotel})
				break;
			case 'Phamacies' : this.setState({names:ArrayAll.Phamacies})
				break;
			case 'Resort' : this.setState({names:ArrayAll.Resort})
				break;
			case 'Spa' : this.setState({names:ArrayAll.Spa})
				break;
			case 'Taxi' : this.setState({names:ArrayAll.Taxi})
				break;
			default:
				break;
		}	
	}
	
  	render() {
		return (
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.container}>
					<View style={styles.divLeft}>
						<SearchBar
							showLoading
							searchIcon={true} 
							platform="android"
							onClear={()=>{}}
							inputContainerStyle={{width:'100%'}}
							containerStyle={{width:'100%' ,borderRadius:5}}
							cancelIcon={{ type: 'MaterialIcons', name: 'keyboard-hide' }}
							onCancel={this._pressSearch}
							clearIcon={{ type: 'MaterialIcons', name: 'clear' }}
							onChangeText={text => this.setState({ text })}
							value={this.state.text}
							placeholder='Tìm kiếm...'
						/>
					</View>
					<View style={styles.right}>
						{ this.state.names.length>0 &&
							this.state.names.map((data, index) => (
								<ItemData key={index} navigate={this.props.navigation} data={data} />))
						}
					</View>
				</View>
			</ScrollView>
		);
  	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignContent: "center",
		justifyContent: "center"
  	},
  	divLeft: {
		flex: 1,
		padding: 10,
		backgroundColor: '#3c7db2',
		alignContent: "center",
	  },
  	right: {
		flex: 1,
		alignContent: "center",
  	}
});