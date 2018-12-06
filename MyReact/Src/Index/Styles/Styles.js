const styles = StyleSheet.create({
	div : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
	},
	col : {
		justifyContent : 'center',
		alignItems : 'center',
		flexDirection: "row",
	},
	md : {
		marginTop : 10,
		width : '100%',
		justifyContent : 'center',
		alignItems : 'center',
		flex : 1,

	},
	footer : {
		alignItems : 'flex-end',
		flexDirection : 'row',
		flex : 0.2,
	},
	textInput : {
		justifyContent : 'center',
		alignItems : 'center',
		backgroundColor : '#ffff', 
	},
	divInput : {
		width: '98%',
		justifyContent : 'center',
		alignItems : 'center',
		backgroundColor : '#ffff',
	},
	item: {
		padding: 10,
		fontSize: 20,
	},
	itemStrike: {
		padding: 10,
		fontSize: 20,
		textDecorationLine: 'line-through', 
		textDecorationStyle: 'solid'
	},
	section: {
		width : '100%',
		backgroundColor:'#ffff',
		flexDirection: 'row',
		justifyContent : 'center',
		alignItems : 'center',
		flex : 1,
		borderBottomColor : 'gray' ,
		borderBottomWidth : 1 ,
	},
	href : {
		color: 'blue',
		fontSize : 20 ,
		textDecorationLine: "underline",
		textDecorationStyle: "solid",
		textDecorationColor: "#000",
	},
	clickbt : {
		width: '100%',
		height: 50, 
		backgroundColor: 'blue', 
		borderRadius: 10, 
		justifyContent: 'center', 
		alignItems: 'center'
	},
	title : {
		fontSize: 20,
		color : 'red',
	}
});