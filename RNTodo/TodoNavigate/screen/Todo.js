/* Core */
import React, { Component } from "react";
/* Presentational */
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/Feather";
import array from '../data/TodoData';
import { AsyncStorage } from "react-native";
import { StatusBar, ActivityIndicator } from "react-native";
import ShowList from "../components/show/List.js";
import ShowButton from "../components/show/Button.js";
import Create from "../screen/Create.js";
import Drawer from "../screen/Drawer.js";
// navigation
import { createStackNavigator, createDrawerNavigator } from "react-navigation";

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            array: array,
            isLoading: true
        };
    }

    refreshData = async () => {
        this.setState({isLoading: true});
        let arrayStorage = await AsyncStorage.getItem('value');
        if (arrayStorage) {
            this.setState({
                array: JSON.parse(arrayStorage),
                isLoading: false
            });
        } else {
            this.setState({
                array: array,
                isLoading: false
            });
        }
    };

    onButtonClear = async (index) => {
        if (index == 0) {
            Alert.alert(
                "Clear dữ liệu?",
                "Bạn có chắc chắn Clear tất cả?",
                [
                    { text: "No", onPress: () => console.log("Cancel press") },
                    {
                        text: "Yes",
                        onPress: () => {
                            alert("Đã xóa tất cả các giá trị");
                            AsyncStorage.clear();
                            return this.refreshData();
                        }
                    }
                ],
                { cancelable: true }
            );
        }
    };

    componentDidMount() {
        return this.refreshData();
        // AsyncStorage.clear();
    }

    _clickDelete() {
        return this.refreshData();
    }

    handleOnNavigateBack = () => {
        return this.refreshData();
    };

    handleOnNavigateBk = () => {
        alert('asdasd');
    };

    render() {

        if (this.state.isLoading) {
            return (
                <View style={styles.div}>
                    <View style={styles.header}>
                    <ActivityIndicator/>
                    </View>
                </View>
            );
        } else {
            return (
                <View style={styles.div}>
                    <View style={styles.header}>
                        <StatusBar backgroundColor="#4db84d" />
                        <Header
                            backgroundColor="#4db84d"
                            leftComponent={{
                                icon: "menu",
                                color: "#fff",
                                onPress: () =>
                                    this.props.navigation.openDrawer()
                            }}
                            centerComponent={{
                                text: "Todos",
                                style: { color: "#fff" }
                            }}
                            rightComponent={{
                                icon: "home",
                                color: "#fff",
                                onPress: () =>
                                    this.props.navigation.openDrawer()
                            }}
                        />
                    </View>
                    <View style={styles.content}>
                        <ShowList
                            list={this.state.array}
                            clickDelete={() => {
                                this._clickDelete();
                            }}
                            navigation={this.props.navigation}
                            handleOnNavigateBk={this.handleOnNavigateBk}
                        />
                    </View>
                    <View style={styles.end}>
                        <ShowButton
                            navigation={this.props.navigation}
                            onButtonClear={index => {
                                this.onButtonClear(index);
                            }}
                            // funciton props thong qua navigate
                            handleOnNavigateBack={this.handleOnNavigateBack}
                        />
                    </View>
                </View>
            );
        }
    }
}

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: Todo
        },
        Chat: {
            screen: Create
        },
        Login: {
            screen: Create
        },
        Register: {
            screen: Create
        }
    },
    {
        contentComponent: props => {
            return <Drawer {...props} />;
        }
    }
);

const CreateNavigator = createStackNavigator(
    {
        Home: {
            screen: DrawerNavigator
        },
        Create: {
            screen: Create
        },
        Edit: {
            screen: Create
        }
    },
    {
        navigationOptions: {
            header: null
        }
    }
);
export default CreateNavigator;

const styles = StyleSheet.create({
    div: {
        flex: 1,
        backgroundColor: "#ffff"
    },
    head: {
        flex: 0.2,
        backgroundColor: "blue",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    content: {
        flex: 1.6,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#adadad",
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
    end: {
        flex: 0.2,
        width: "100%",
        alignItems: "stretch",
        justifyContent: "center"
    },
    headText: {
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        color: "#fff",
        fontSize: 25,
        fontFamily: "Helvetica"
    },
    header: {
        width: "100%"
    },
    touch: {
        width: "20%",
        height: "70%",
        backgroundColor: "orange",
        borderRadius: 200,
        justifyContent: "center",
        alignItems: "center"
    },
    textButton: {
        color: "#fff",
        fontSize: 18
    }
});
