import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, ImageBackground, Image, FlatList, TouchableOpacity } from "react-native";
import Layout from "../constants/Layout";


const ButtomBar = () => {
    return (
        <View style={styles.main}>
            <TouchableOpacity>
                <View style={[styles.iGround, { backgroundColor: "white" }]}>
                    <Image
                        source={require("../assets/images/homeicon.png")}
                        style={styles.icon}
                        resizeMode="contain"
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.iGround}>
                    <Image
                        source={require("../assets/images/hearthicon.png")}
                        style={styles.icon}
                        resizeMode="contain"

                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.iGround}>
                    <Image
                        source={require("../assets/images/basketicon.png")}
                        style={styles.icon}
                        resizeMode="contain"
                    />
                </View>
            </TouchableOpacity>


        </View>
    )
}

export default ButtomBar;

const styles = StyleSheet.create({
    main: {
        height: 80,
        width: Layout.window.width * 0.9,
        alignSelf: "center",
        marginTop: 80,
        borderRadius: 40,
        backgroundColor: "#D4A574",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    iGround: {
        borderRadius: 50,
        width: 50,
        height: 50,
        marginLeft: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: 30,
        height: 30,
        alignSelf: "center"
    }


});
