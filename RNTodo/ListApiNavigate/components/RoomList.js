// library
import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, Image, RefreshControl, TouchableOpacity } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import styled from 'styled-components';

export default class RoomList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			value: 0,
			idStatus: 0,
			page: 1,
		};
	}

	componentDidMount() {
		if (this.props.listRoom) {
			this.setState({
				value: 1,
			})
		}
	}

	handleLoad = () => {
		this.setState({
			page: this.state.page + 1,

		});
		this.props.onEndReach(this.state.page),
			alert(this.state.page);
	}

	status = (idStatus) => {
		this.setState({ idStatus })
	}

	render() {
		return (
			<Div>
				<FlatList
					data={this.props.listRoom}
					keyExtractor={(item, index) => index.toString()}

					refreshControl={
						<RefreshControl
							refreshing={this.props.refreshing}
							onRefresh={() => {

								this.props.onRefresh(this.state.value);
							}}
						/>
					}
					onEndReached={this.props.handleLoad.bind(this)}
					onEndReachedThreshold={0.2}
					renderItem={({ item, index }) => (
						<View style={styles.divList}>
							<TouchableOpacity onPress={() => this.props.navigation.navigate('Screen1', item)}>
								<Md>
									<Col1>
										<Image style={styles.image} source={{ uri: item.link_img }}></Image>
									</Col1>
									<Col>
										<Row>
											<Direction>Title :</Direction>
											<Text > {item.name} </Text>
										</Row>
										<Row1>
											<Direction>Description : </Direction>
											<Text>{item.short_description}</Text>
										</Row1>
										<Row>
											<Direction>Price :</Direction>
											<Text> {item.price} $ </Text>
										</Row>
									</Col>
								</Md>
							</TouchableOpacity>
							<ButtonGroup
								onPress={this.status}
								underlayColor="#4db84d"
								innerBorderStyle={{ width: 2, color: '#4db84d' }}
								containerStyle={{ height: 30, backgroundColor: 'transparent', borderColor: '#4db84d' }}
								selectedIndex={this.state.idStatus}
								selectedTextStyle={{ color: 'black', fontSize: 16 }}
								buttons={['Like', 'Comment', 'Share']}
							/>
						</View>
					)}
				/>
			</Div>
		)
	}
}

const styles = StyleSheet.create({
	divList: {
		padding: 5,
		width: '100%',
		flex: 1,
		backgroundColor: '#f8f8f8',
	},
	image: {
		width: '98%',
		height: '98%',
		borderRadius: 5,
	}
});
const Div = styled.View`
	width : 100%;
	flex : 1;
	backgroundColor : #f8f8f8;
`;
const Md = styled.View`
	padding: 5px;
	width : 100%;
	backgroundColor:#ffff;
	justifyContent : center;
	alignItems : center;
	borderColor : #adadad;
	border : 1px;
	flexDirection : row;
	flex : 1;
	borderRadius: 5;
`;
const Row = styled.View`
	flexDirection : row;
    alignItems : stretch;
`;
const Row1 = styled.View`
	alignItems : stretch;
`;
const Col = styled.View`
	width : 100%;
	justifyContent : center;
    alignItems : stretch;
	flex : 1;
`;
const Col1 = styled.View`
	justifyContent : center;
    alignItems : stretch;
	flex : 0.5;
`;
const Item = styled.Text`
	fontSize: 15;
	color : black;
`;
const Direction = styled.Text`
	textDecorationLine: underline; 
	textDecorationStyle: solid;
	color : red;
`;