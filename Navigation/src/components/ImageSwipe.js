//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import I18n from "../lang/I18n";
import ArrayTag from "../data/Array/ArrayData";
// create a component
class ImageSwipe extends Component {
  	constructor(props) {
    	super(props);
    	this.state = {
      		data: ArrayTag,
      		activeSlide: 0
    	};
  	}

  	_renderItem({ item, index }) {
    	return (
            <View style={{ padding: 5, flex: 1 }}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate(item.route)}}>
                    <ImageBackground
                    	source={item.image}
                    	style={{ width: "100%", height: "100%" }} >
                    	<View style={{backgroundColor:'#abab',justifyContent:"center",alignItems:'center'}}>
                            <Text style={{color:'#fff',fontSize:17}}>
                                {I18n.currentLocale() == 'vi-VN' ? item.captionTagVietnamese : item.captionTagEnglish}
                            </Text>
                        </View> 
                    </ImageBackground>
                </TouchableOpacity>
            </View>
   	 	);
	  }
	  
  	get pagination() {
    	const { data, activeSlide } = this.state;
    	return (
      		<Pagination
				dotsLength={data.length}
				activeDotIndex={activeSlide}
				containerStyle={{ paddingVertical: 0 }}
				dotStyle={styles.doc}
				inactiveDotStyle={{}}
			/>
    	);
  	}

  render() {
    	return (
      		<View style={{ width: "100%", height: Dimensions.get("window").height / 2.2 }} >
        		<Carousel
					style={styles.container}
					data={this.state.data}
					renderItem={this._renderItem.bind(this)}
					navigation={this.props}
					onSnapToItem={index => this.setState({ activeSlide: index })}
					hasParallaxImages={true}
					sliderWidth={Dimensions.get("window").width}
					layout={"default"}
					itemWidth={Dimensions.get("window").width * 0.6}
        		/>
        		<View style={styles.divPaging}>
          			{this.pagination}
          			<Text style={{ fontFamily: "D", fontSize: 20 }}>
            			{I18n.t("MustSee")}
         	 		</Text>
        		</View>
      		</View>
    	);
  	}
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  doc: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#1c88ed"
  },
  divPaging: {
	alignItems: "center",
    justifyContent: "center",
    borderColor: "#abab",
    borderBottomWidth: 2
  }
});

//make this component available to the app
export default ImageSwipe;
