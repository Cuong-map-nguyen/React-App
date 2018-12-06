/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View } from 'react-native';




async function getRoomFromServer(page) {
	const RoomApi = `https://apihotel.herokuapp.com/api/v1/admin/rooms?page=${page}`;
	try {
		let response = await fetch(RoomApi);
		let responseJson = await response.json();
		return responseJson.data; //list room
	} catch(error) {
		// statements
		console.error(`Error is : ${error}`);
	}
}
export {getRoomFromServer}