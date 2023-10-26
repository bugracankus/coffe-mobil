import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, ImageBackground, Image, FlatList, TouchableOpacity } from "react-native";
import Layout from "../constants/Layout";



const ProducPage = () => {
    const [textColor, setTextColor] = useState('white');
    const [buttonColor, setButtonColor] = useState('#EAEAEA'); // Başlangıç rengi kırmızı
    const handlePress = () => {
        if (textColor === 'white') {
          setTextColor('#D4A574');
          setButtonColor('#');
        } else {
          setTextColor('white');
          setButtonColor('red');
        }
      };
    return (
        <View style={styles.main}>
            <View style={styles.iGround}>
                <Image
                    source={require("../assets/images/beansBackground2.png")}
                    style={styles.background}
                />
                <View style={styles.iconG}>
                    <TouchableOpacity>
                        <View style={styles.icon}>
                            <Image
                                source={require("../assets/images/backicon.png")}
                                style={{ width: 50, height: 50 }}
                                resizeMode="contain"

                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={[styles.icon, { width: 55, height: 55, borderRadius: 50, borderColor: "white", borderWidth: 2.5, alignSelf: "center" }]}>
                            <Image
                                source={require("../assets/images/hearthicon2.png")}
                                style={{ width: 30, height: 30 }}
                                resizeMode="contain"
                            />
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={styles.product}>
                    <Image
                        source={require("../assets/images/coffee2.png")}
                        style={styles.img}
                    />
                </View>
            </View>
            {/* //---CONTENT--// */}
            <View style={styles.content}>
                <View style={styles.stars}>
                    <Image
                        source={require("../assets/images/Star.png")}
                        style={styles.sIcon}
                        resizeMode="contain"
                    />
                    <Text style={styles.sText}>4.3</Text>
                </View>
                <View style={styles.name}>
                    <Text style={styles.ntext}>Cappuccino</Text>
                    <Text style={[styles.ntext, { marginLeft: Layout.window.width * 0.44 }]}> $ 15.50</Text>
                </View>
                <View style={styles.size}>
                    <Text style={styles.ntext}>Coffe Size</Text>
                    <View style={styles.ground}>
                        <TouchableOpacity>
                            <View style={styles.sBttn}>
                                <Text>Small</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[styles.sBttn, { marginLeft: 33 }]}>
                                <Text>Medium</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[styles.sBttn, { marginLeft: 33 }]}>
                                <Text>Large</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.about}>
                    <Text style={styles.ntext}>About</Text>
                    <Text style={{ width: 300 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</Text>
                </View>
                <View style={styles.volume}>
                    <Text style={styles.ntext}>Volume</Text>
                    <Text style={[styles.ntext, { marginLeft: 10 }]}>110 ML</Text>
                </View>
            </View>
            <View style={styles.buttomBar}>
                <TouchableOpacity>
                    <View style={styles.basketBttn}>
                        <Image
                            source={require("../assets/images/basketicon.png")}
                            resizeMode="contain"
                            style={{ width: 35, height: 35 }}
                        />
                    </View>
                </TouchableOpacity>
                <View style={styles.buyButton}>
                    <Text style={[styles.ntext, { color: "white" }]}>Buy Now</Text>
                </View>
            </View>
        </View>
    )
}

export default ProducPage;

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    background: {
        width: Layout.window.width * 1,
        height: 300,
        alignSelf: "center",
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
    },
    iGround: {
        width: Layout.window.width * 1,
        height: 300,
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
        backgroundColor: "black",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 100,
        shadowRadius: 3,
        elevation: 1,
    },
    iconG: {
        position: "absolute",
        height: 60,
        width: Layout.window.width * 0.9,
        marginTop: 60,
        alignSelf: "center",
        flexDirection: "row"
    },
    icon: {
        height: 60,
        width: 60,
        marginRight: Layout.window.width * 0.605,
        justifyContent: "center",
        alignItems: "center"
    },
    product: {
        height: 200,
        width: Layout.window.width * 0.5,
        position: "absolute",
        alignSelf: "center",
        marginTop: 200,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        shadowColor: "#AE865D",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 3.5,
        shadowRadius: 5,
        elevation: 10,
    },
    img: {
        height: 200,
        width: Layout.window.width * 0.5,
        alignSelf: "center"
    },
    content: {
        marginTop: 100,
        height: 350,
        width: Layout.window.width * 0.9,
        alignSelf: "center",
    },
    stars: {
        height: 30,
        width: 70,
        borderRadius: 15,
        backgroundColor: "#D8AD81",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    sIcon: {
        width: 20,
        height: 20,
    },
    sText: {
        color: "white",
        fontWeight: "bold",
        marginLeft: 5,
        fontSize: 17,
    },
    name: {
        height: 45,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    ntext: {
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 0.5,
        color: "#303030",
    },
    size: {
        height: 95,
    },
    ground: {
        height: 60,
        flexDirection: "row",
        alignItems: "center"
    },
    sBttn: {
        borderWidth: 1,
        width: Layout.window.width * 0.25,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    about: {
        height: 120,
    },
    volume: {
        flexDirection: "row",
        height: 40,
        alignItems: "center"
    },
    buttomBar: {
        height: 70,
        flexDirection: "row"
    },
    basketBttn: {
        height: 70,
        width: 70,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(149, 156, 169, 0.31)",
        marginLeft: 20
    },
    buyButton: {
        marginLeft: 15,
        width: Layout.window.width * 0.7,
        borderRadius: 30,
        backgroundColor: "#D4A574",
        justifyContent: "center",
        alignItems: "center"
    }
});
