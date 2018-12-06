/* Core */
import React, { Component } from "react";

/* Presentational */
import { View, StyleSheet } from "react-native";
//
import CreateRich from "../components/create/List.js";
import { Header } from "react-native-elements";
import { AsyncStorage } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default class Create extends Component {
    
    constructor(props) {
        super(props);
        this.state = {};
        let route = this.props.navigation.state.routeName;
        if (route == "Edit") {
            // lấy nội dung từ home tới trang chi tiết
            this.state = {
                titleHeader: "Show & Edit Todo",
            };
        } else {
            this.state = { titleHeader: "Create Todo" };
        }
    }

    todoCreate = async (titleRich, contentRich, idRich) => {
        let idRamdom = Math.random();
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        let dateTime = date + "-" + month + "-" + year;
        let arrayStorage = await AsyncStorage.getItem("value");
        //
        

        if (this.state.titleHeader == "Create Todo") {
            try {
                await AsyncStorage.setItem(
                    "value",
                    JSON.stringify([
                        {
                            id: idRamdom,
                            title: titleRich,
                            content: contentRich,
                            date: dateTime
                        },
                        ...JSON.parse(arrayStorage)
                    ])
                );
                await this.props.navigation.state.params.onNavigateBack();
            } catch (error) {
                if (arrayStorage == null) {
                    await AsyncStorage.setItem(
                        "value",
                        JSON.stringify([
                            {
                                id: idRamdom,
                                title: titleRich,
                                content: contentRich,
                                date: dateTime
                            }
                        ])
                    );
                    await this.props.navigation.state.params.onNavigateBack();
                } else alert('error');
            }
        } else {
            let cloneArrayStorage = (await JSON.parse(arrayStorage)).slice();
            let fillEdit = cloneArrayStorage.filter(t => t.id == idRich)[0];
           // let fillMerge = cloneArrayStorage.filter(t => t.id != idRich);
            
            if (fillEdit) {
                fillEdit.title = titleRich;
                fillEdit.content = contentRich;
                console.log(fillEdit);
            }
            // dung filler se~ tuong tac thang~ vao` mang
            //  con` dung assgin se~ lay gia chi do vao` mang moi khong tac tac toi mang chinh
            await AsyncStorage.setItem(
                "value",
                JSON.stringify(cloneArrayStorage)
            );
        }
        await this.props.navigation.goBack();
    };
    render() {
        
        return (
            <View style={styles.div}>
                <View style={styles.header}>
                    <Header
                        backgroundColor="#4db84d"
                        leftComponent={
                            <Icon
                                name="chevron-left"
                                size={26}
                                color="#ffff"
                                onPress={() => this.props.navigation.goBack()}
                            />
                        }
                        centerComponent={{
                            text: this.state.titleHeader,
                            style: { color: "#fff" }
                        }}
                        rightComponent={{
                            icon: "home",
                            color: "#fff",
                            onPress: () =>
                                this.props.navigation.navigate("Home")
                        }}
                    />
                </View>
                <View style={styles.content}>
                    <CreateRich
                        navigation={this.props.navigation}
                        todoCreate={(titleRich, contentRich, idRich) => {
                            this.todoCreate(titleRich, contentRich, idRich);
                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    div: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffff"
    },
    header: {
        width: "100%"
    },
    content: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#adadad",
        borderBottomWidth: 1,
        borderTopWidth: 1
    }
});
