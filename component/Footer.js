import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  FontAwesome5,
  Entypo,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
let { width } = Dimensions.get("window");
export default function Footer() {
  const [iconS, seticonS] = useState(20);
  useEffect(() => {
    width <= 1024 ? seticonS(15) : seticonS(20);
  });
  return (
    <View style={styles.footer}>
      <View style={styles.f1}>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://www.google.com")}
        >
          <Image
            source={require("../assets/img/AHCS-full-horizontal-icon (1).png")}
            style={styles.f1_img}
          />
        </TouchableOpacity>
        <View style={styles.address}>
          <Text style={styles.address_txt}>
            <Text style={styles.address_heading}>Office</Text>: 01, Excel
            apartment, Behind Chandiwala Apartments, 2nd Rabodi, Thane West,
            Thane 400601
          </Text>
          <Text style={styles.contact}>contact@ahcs.co.in</Text>
        </View>
      </View>
      <View style={styles.f2}>
        <Text style={styles.f2txt}>
          Copyright © 2024 AHCS | Powered by AHCS
        </Text>
        <View style={styles.f2Links}>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.facebook.com/")}
          >
            <FontAwesome5 name="facebook" size={iconS} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL("https://x.com/")}>
            <Entypo name="twitter" size={iconS} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.google.com/")}
          >
            <FontAwesome name="google" size={iconS} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.instagram.com/")}
          >
            <Entypo name="instagram" size={iconS} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://in.linkedin.com/")}
          >
            <Ionicons name="logo-linkedin" size={iconS} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {},
  f1: {
    backgroundColor: "#15120B",
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 40,
    paddingHorizontal: 120,
    paddingHorizontal: width <= 1024 ? 30 : 120,
    paddingVertical: width <= 540 ? 20 : 40,
  },
  f1_img: {
    height: 90,
    width: 300,
    width: width <= 1024 ? 200 : 300,
    height: width <= 1024 ? 60 : 90,
    display: width <= 540 ? "none" : "",
  },
  address: {
    width: "40%",
    width: width <= 540 ? "100%" : "40%",
  },
  address_txt: {
    color: "white",
    fontSize: 18,
    fontSize: width <= 1024 ? 14 : 18,
  },
  address_heading: {
    // fontSize:30
    fontWeight: "600",
  },
  contact: {
    color: "white",
    fontSize: 20,
    fontSize: width <= 1024 ? 15 : 20,
  },

  f2: {
    flexDirection: "row",
    // backgroundColor:'#F9C349',
    backgroundColor: "#F9C349",
    // height:80,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 15,
    paddingHorizontal: 120,
    paddingHorizontal: width <= 1024 ? 20 : 120,
    // justifyContent:'center'
    justifyContent: width <= 540 ? "center" : "space-between",
    paddingVertical: 20,
  },
  f2Links: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  f2txt: {
    color: "white",
    fontSize: 20,
    fontSize: width <= 1024 ? 15 : 20,
    textAlign: "center",
  },
});
