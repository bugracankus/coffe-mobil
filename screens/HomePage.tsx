import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, ImageBackground, Image, FlatList, TouchableOpacity } from "react-native";
import Layout from "../constants/Layout";
import Products from "../components/Products";
import Carousel from 'react-native-snap-carousel';
import ButtomBar from "../components/ButtomBar";

const HomePage = () => {
    const [title, setTitle]: any = useState(0);
//---FlatList Data---//
    const DATA = [
        {
            id: 0,
            title: "Tümü",
        },
        {
            id: 1,
            title: "Cappuccino",
        },
        {
            id: 2,
            title: "Latte",
        },
        {
            id: 3,
            title: "Espresso",
        },
        {
            id: 4,
            title: "Mocha",
        },
        {
            id: 5,
            title: "Cappuccino",
        },
    ];
//---Carousel Data---//
    const productData = [
        {
            id: 0,
            coffeImg: require("../assets/images/coffee1.png"),
            name: "Cappuccino",
            point: "10",
            ml: "110",
            price: "20.00",
        },
        {
            id: 1,
            coffeImg: require("../assets/images/coffee2.png"),
            name: "Latte",
            point: "15",
            ml: "120",
            price: "25.00",
        },
        {
            id: 2,
            coffeImg: require("../assets/images/coffee3.png"),
            name: "Latte",
            point: "1.2",
            ml: "110",
            price: "5.00",
        },
    ];

    return (
        <View style={styles.main}>
            <View style={styles.title}>
                <ImageBackground
                    source={require("../assets/images/beansBackground1.png")}
                    style={styles.backGround}>
                    <View style={styles.content}>
                        <Image
                            source={require("../assets/images/avatar.png")}
                            style={styles.icon}
                        />
                        <View style={styles.contentText}>
                            <Text style={styles.cityText}>Izmir</Text>
                        </View>
                        <Image
                            source={require("../assets/images/2985052.png")}
                            style={styles.icon}
                        />
                    </View>
                    <View style={styles.searchBar}>
                        <Text style={styles.searchText}>Search</Text>
                        <View style={styles.searchIcon}>
                            <Image
                                source={require("../assets/icons/searchicon.png")}
                                style={styles.sIcon}
                            />
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.list}>
                    <FlatList
                        horizontal={true}
                        data={DATA}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => setTitle(item.id)}
                                key={item.id}
                                style={{
                                    width: Layout.window.width * 0.3,
                                }}
                            >
                                <View style={[styles.lGround, { backgroundColor: title == item.id ? "#D4A776" : "#EBEBEB" }]}>
                                    <Text style={{ color: title == item.id ? "white" : "gray", fontSize: 16 }}>
                                        {item.title}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                
                <View style={{ justifyContent: "center", alignItems: "center",marginTop: 50}}>
                    <Carousel
                        data={productData}
                        renderItem={({ item }: any) => (
                            <Products
                                coffeImg={item.coffeImg}
                                name={item.name}
                                point={item.point}
                                ml={item.ml}
                                price={item.price}
                            />
                        )}
                        sliderWidth={Layout.window.width}
                        itemWidth={Layout.window.width * 0.6}
                        loop
                    />
                </View>
                {/* //-------ButtomBar----// */}
                <ButtomBar/>
            </View>
        </View>
    )
}

export default HomePage;

const styles = StyleSheet.create({
    main: {},
    title: {},
    backGround: {
        width: Layout.window.width * 1,
        height: 200,
    },
    content: {
        height: 50,
        width: Layout.window.width * 0.9,
        marginTop: 70,
        alignSelf: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    icon: {
        width: 45,
        height: 45,
        borderRadius: 50,
    },
    contentText: {
        width: Layout.window.width * 0.65,
        alignSelf: "center",
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    cityText: {
        fontSize: 28,
        color: "#303030"
    },
    searchBar: {
        height: 45,
        borderRadius: 20,
        width: Layout.window.width * 0.9,
        alignSelf: "center",
        marginTop: 20,
        backgroundColor: "#E6E6E6",
        flexDirection: "row",
        alignItems: "center"
    },
    searchText: {
        fontSize: 20,
        color: "#ACACAF",
        marginLeft: 10,
        width: Layout.window.width * 0.76
    },
    searchIcon: {
        height: 40,
        width: 40,
        borderRadius: 40,
        backgroundColor: "#D4A574",
        justifyContent: "center",
        alignItems: "center"
    },
    sIcon: {
        width: 20,
        height: 20
    },
    list: {
        height: 48,
        marginLeft: 20,
        flexDirection: "row",
        marginTop: 5,
    },
    lGround: {
        height: 40,
        width: 110,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
});
