import React, { useEffect } from "react";
import {
  Dimensions,
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Footer from "../component/Footer";
import styles from "../css/Contact_style";
import { Platform } from "react-native";
import {
  Entypo,
} from "@expo/vector-icons";
import NavbarRes from "../component/NavbarRes";
import Maps from "../component/Maps";

export default function Contact({ navigation }) {

  return (
    <ScrollView>
      <View style={styles.home}>
        <NavbarRes n={navigation} />
        <View style={styles.bgImg}>
          <Text style={styles.heading}>Contact Us</Text>
        </View>

        <View style={styles.main}>
          <View style={styles.left}>
            <Text style={styles.leftHeading}>Request Free Consultation</Text>

            <View style={styles.map}>
              {
                Platform.OS!='web'&&
              <Maps/>
              }
              {Platform.OS == "web" && <Text>Map Loding......</Text>}
            </View>
          </View>
          <View style={styles.right}>
            <Text style={styles.rightHeading}>Get In Touch</Text>
            <View style={styles.rightContainer}>
              <Text style={styles.rightContainerHeading}>Reach Us</Text>
              <View style={styles.r1}>
                <Entypo name="location-pin" size={30} color="#F9C349" />
                <Text style={styles.r1Txt}>
                  01, Excel apartment, Behind Chandiwala Apartments, 2nd Rabodi,
                  Thane West, Thane 400601
                </Text>
              </View>

              <Pressable
                onPress={() => {
                  Linking.openURL("mailto:contact@ahcs.co.in");
                }}
              >
                <View style={styles.r1}>
                  <Entypo name="mail" size={30} color="#F9C349" />
                  <Text style={styles.r1Txt}>contact@ahcs.co.in</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
        <Footer />
      </View>
    </ScrollView>
  );
}
