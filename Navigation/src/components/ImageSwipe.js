//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';
import I18n from "../lang/I18n";

// create a component
class ImageSwipe extends Component {

        constructor(props) {
            super(props);
            this.state = { 
                activeSlide : 0,
                data:[{image:(require('../images/Dong.jpeg'))},
                {image:(require('../images/He.jpg'))},
                {image:(require('../images/between.jpg'))},
                {image:(require('../images/Thu.jpg'))},
                {image:(require('../images/Xuan.jpg'))},]
             };
        }

    _renderItem ({item, index}, parallaxProps) {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={item.image}
                    containerStyle={{width:'90%',height:'100%'}}
                    style={{width:'90%',height:'50%'}}
                    {...parallaxProps}
                />
            </View>
            
        );
    }

    get pagination () {
        const { data, activeSlide } = this.state;
        return (
            <Pagination
              dotsLength={data.length}
              activeDotIndex={activeSlide}
              containerStyle={{}}
              dotStyle={styles.doc}
              inactiveDotStyle={{}}
            />
        );
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{width:'100%',height:'100%'}}>
                    <Carousel
                    style={styles.container}
                    data={this.state.data}
                    renderItem={this._renderItem}
                    onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                    hasParallaxImages={true}
                    sliderWidth={Dimensions.get('window').width}
                    layout={'default'} 
                    itemWidth={Dimensions.get('window').width * 0.6}
                    />
                    <View style={styles.divPaging}>
                        { this.pagination }
                        <Text style={{fontFamily:'D',fontSize:20}}>{I18n.t('MustSee')}</Text>
                        { this.pagination }
                    </View>
                </View>
            </View>    
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    doc:{
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#1c88ed'
    },
    divPaging:{
        flexDirection:'row',
        alignItems:'center', 
        justifyContent:'center',
        borderColor: '#abab',
        borderBottomWidth: 2,
    }
});

//make this component available to the app
export default ImageSwipe;
