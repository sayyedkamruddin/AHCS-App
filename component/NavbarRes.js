import React, { useEffect } from "react";
import { Dimensions, Platform, StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const links = ["Home", "Services", "About", "Contact"];

let { width } = Dimensions.get("window");
export default function NavbarRes(props) {
  let nav = useNavigation();
  useEffect(() => {
    Platform.OS === "web" ? getCurrentUrl() : null;
  });
  const getCurrentUrl = async () => {
    try {
      const url = await Linking.getInitialURL();
      if (url) {
        url.substring("service");
        console.log("Current URL:", url.split("/").pop());
        nav.navigate(url.split("/").pop());
      }
    } catch (error) {
      console.log("Error getting current URL:", error);
    }
  };

  return (
    <View style={style.nav}>
      <StatusBar />
      <Image
        source={require("../assets/img/AHCS-full-horizontal-icon (1).png")}
        style={style.img}
      />

      {width <= 768 ? (
        <View style={style.menuBtn}>
          <Feather
            name="menu"
            size={25}
            color="white"
            onPress={() => props.n.toggleDrawer()}
          />
        </View>
      ) : (
        <View style={style.rightNAv}>
          {links.map((i, index) => (
            <Text
              style={style.linktxt}
              onPress={() => props.n.navigate(i)}
              key={index}
            >
              {i}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  nav: {
    // borderWidth:2,
    backgroundColor: "transparent",
    zIndex: 1,
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // height:70,
    // margin:20,
    position: "absolute",
    width: "100%",
    padding: 20,
  },
  img: {
    // borderWidth:2,
    height: 80,
    width: "30%",
    resizeMode: "contain",
    width: width <= 768 ? "50%" : "30%",
  },
  rightNAv: {
    // borderWidth:2,
    width: "40%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  menuBtn: {
    // borderWidth:2,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#F9C349",
  },
  linktxt: {
    fontSize: width * 0.015,
    color: "#fff",
  },
});
