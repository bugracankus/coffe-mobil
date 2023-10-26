import React from "react";
import { StyleSheet, View, Text, Image, Platform, TouchableOpacity } from "react-native";

interface ProductsProps {
  coffeImg: any;
  name: string;
  point: string;
  ml: string;
  price: string;
}
export default function Products(props: ProductsProps) {
  return (
    <View>
      <View style={styles.main}>
        {/* //! Resim altındaki gölgeleri düzenle, andoride çıktı vermiyor. !!! */}
        <View style={styles.iGround}>
          <Image
            source={props.coffeImg}
            style={styles.coffeImg}
          />
        </View>
        <View style={styles.tGround}>
          <Text style={styles.name}>{props.name}</Text>
          <View style={styles.point}>
            <Image
              source={require("../assets/images/Star.png")}
              style={styles.starIcon}
            />
            <Text style={styles.pText}>{props.point}</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={[styles.pText, { fontSize: 14, color: "#E2D2C2" }]}>Volume</Text>
            <Text style={[styles.pText, { fontSize: 14, marginLeft: 5 }]}>{props.ml}ML</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 30, justifyContent: "center", alignItems: "center" }}>
            <Text style={[styles.pText, { fontSize: 19, color: "#E2D2C2" }]}>$ {props.price}</Text>
            <TouchableOpacity>
              <View style={styles.plusBttn}>
                <Image
                  source={require("../assets/images/plus.png")}
                  style={styles.plus}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.shadow}>

      </View>
    </View>
  


  );
}

const styles = StyleSheet.create({
  main: {
    height: 340,
    width: 230,
    borderRadius: 30,
    backgroundColor: "#885119",
  },
  iGround: {
    width: 150,
    height: 120,
    alignSelf: "center",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -30,
    backgroundColor: "white",
    borderRadius: 100,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.9,
    shadowRadius: 0.1,
    elevation: 50, // Android için elevation ekleyin
  },
  coffeImg: {
    width: 150,
    height: 150,
    backgroundColor: "white",
    borderRadius: 100,
    position: "absolute",
    marginTop: -50,
    alignSelf: "center",
  },
  tGround: {
    height: 220,
    width: 200,
    marginTop: 120,
    flexDirection: "column",
    alignSelf: "center",
  },
  name: {
    fontSize: 20,
    color: "white",
    fontWeight: 'bold',
    letterSpacing: 2,
    marginTop: 30,
  },
  point: {
    height: 30,
    width: 60,
    backgroundColor: "#A07446",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  starIcon: {
    width: 15,
    height: 15
  },
  pText: {
    fontSize: 17,
    color: "white",
    marginLeft: 5,
  },
  plusBttn: {
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginLeft: 80,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 5, // Android için elevation ekleyin
  },
  plus: {
    width: 25,
    height: 25,
  },
  shadow:{
    height:5,
    width:150, 
    borderRadius:10, 
    marginTop:10, 
    backgroundColor:"#885119",
    opacity:0.2,
    alignSelf:"center"
  }
});