/* Core */
import React, { Component } from "react";
/* Presentational */
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { RichTextToolbar } from "react-native-zss-rich-text-editor";
import { RichTextEditor } from "react-native-zss-rich-text-editor";
import Icon from "react-native-vector-icons/AntDesign";
import ImagePicker from "react-native-image-crop-picker";

export default class List extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            contentPlaceholder: "Nhập thông tin cần nhập",
            titlePlaceholder: "Nhập title"
        };
    }
    _onPressButton = async () => {
        let titleRich = await this.richtext.getTitleText();
        let contentRich = await this.richtext.getContentHtml();
        let idRich = await this.props.navigation.state.params.id;
        if (titleRich.length == 0) {
            alert("vui lòng nhập thông tin title");
        } else if (contentRich.length == 0) {
            alert("vui lòng nhập thông tin content");
        } else {
            await this.props.todoCreate(titleRich, contentRich, idRich);
        }
    };
    render() {
        let param = this.props.navigation.state.params;
        return (
            <View style={styles.col}>
                <View style={styles.header}>
                    <RichTextEditor
                        ref={r => (this.richtext = r)}
                        style={styles.richText}
                        contentInset={{ right: 0, left: 0 }}
                        bounces={false}
                        autoCorrect={false}
                        initialTitleHTML={param.title}
                        initialContentHTML={param.content}
                        enableOnChange={true}
                        contentPlaceholder={this.state.contentPlaceholder}
                        titlePlaceholder={this.state.titlePlaceholder}
                        editorInitializedCallback={() =>
                            this.onEditorInitialized()
                        }
                    />
                </View>
                <View style={styles.end}>
                    <View style={styles.tool}>
                        <RichTextToolbar
                            getEditor={() => this.richtext}
                            onPressAddImage={() => {
                                ImagePicker.openPicker({
                                    includeBase64: true,
                                    compressImageQuality: 0.5,
                                    width: 150,
                                    height: 150,
                                    cropping: true
                                })
                                    .then(image => {
                                        let imageSrc = `data:${image.mime};base64,${image.data}`;
                                        this.richtext.insertImage({
                                            src: imageSrc,
                                            width: 150,
                                            height: 150
                                        });
                                    })
                                    .catch(error => {
                                        alert(error);
                                    });
                            }}
                            selectedButtonStyle={{ backgroundColor: "yellow" }}
                            iconTint="black"
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this._onPressButton}
                    >
                        <View style={styles.divButton}>
                            <Text style={styles.text}>
                                <Icon name="save" size={17} color="black" />
                                Save
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    col: {
        width: "100%",
        flex: 1,
        borderColor: "#adadad",
        borderWidth: 1
    },
    header: {
        width: "100%",
        flex: 0.9,
        borderColor: "#adadad",
        borderWidth: 1
    },
    richText: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        marginTop: "5%"
    },
    end: {
        marginTop: "2%",
        width: "100%",
        flex: 0.1,
        backgroundColor: "#D3D3D3",
        flexDirection: "row",
        alignItems: "stretch",
        borderColor: "#adadad",
        borderWidth: 1
    },
    tool: {
        width: "80%"
    },
    divButton: {
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        width: "20%",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "red",
        borderWidth: 1
    },
    text: {
        color: "black",
        fontSize: 17
    }
});
