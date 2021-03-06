//import liraries
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Name from "../data/Array/ArrayData";
import ItemData from "../data/Items/itemData";
// create a component
class Content extends Component {
  	constructor(props) {
    	super(props);
    	this.state = { names: Name };
  	}

  	render() {
    	return (
        	<View style={styles.container}>
          		<View style={styles.divLeft}>
            		{
              			this.state.names.map((data, index) => (
              				<ItemData key={index} navigate={this.props.navigation} data={data} />))
            		}
          		</View>
        	</View>
    	);
  	}
}

// define your styles
const styles = StyleSheet.create({
  	container: {
		flex: 1,
		flexDirection: "row",
		flexWrap:'wrap',
		alignContent: "center",
		justifyContent: "center"
  	},
  	divLeft: {
		margin: 5,
		flex: 1,
		flexWrap: "wrap",
		alignContent: "center",
		justifyContent: "space-between"
  	}
});

export default Content;
