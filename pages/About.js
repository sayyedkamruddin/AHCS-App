import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Footer from "../component/Footer";
import styles from "../css/About_style";
import { Platform } from "react-native";
import {
  FontAwesome6,
  Ionicons,
  FontAwesome5,
  Entypo,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";

import NavbarRes from "../component/NavbarRes";

let { width, height } = Dimensions.get("window");

export default function About({ navigation }) {
  let about = [
    {
      headline: "Who Are We",
      desc: "AHCS, your trusted partner in navigating the complexities of the digital landscape. At AHCS, we are passionate about leveraging technology to empower businesses and organizations of all sizes to thrive in the digital age.",
    },
    {
      headline: "Our Mission",
      desc: "Our mission at AHCS is to provide innovative IT solutions and expert consultancy services tailored to meet the unique needs and challenges of each client. We strive to deliver measurable results, driving efficiency, productivity, and growth for our clients.",
    },
    {
      headline: "What We Do",
      desc: "AHCS, your trusted partner in navigating the complexities of the digital landscape. At AHCS, we are passionate about leveraging technology to empower businesses and organizations of all sizes to thrive in the digital age.",
    },
  ];

  let numbers = [
    {
      num: 6,
      title: "Satisfied Clients",
    },
    {
      num: 10,
      title: "Projects Completed",
    },
    {
      num: 28,
      title: "Accolades Earned",
    },
    {
      num: 56,
      more: "K+",
      title: "Lines of Codes",
    },
  ];

  const [num, setNum] = useState([
    {
      num: 6,
      title: "Satisfied Clients",
    },
    {
      num: 10,
      title: "Projects Completed",
    },
    {
      num: 28,
      title: "Accolades Earned",
    },
    {
      num: 566,
      more: "K+",
      title: "Lines of Codes",
    },
  ]);

  return (
    <ScrollView>
      <View style={styles.home}>
        <NavbarRes n={navigation} />
        <View style={styles.bgImg}>
          <Text style={styles.heading}>About Us</Text>
          <Text style={styles.subHeading}>
            AHCS Is IT & Digital Solutions Provider
          </Text>
        </View>

        <View style={styles.main}>
          <View style={styles.c1}>
            <View style={styles.cards}>
              {about.map((i, index) => {
                return (
                  <View style={[styles.card]} key={index}>
                    <Text style={styles.bar}></Text>
                    <Text style={[styles.Card_heading]}>{i.headline}</Text>
                    <Text style={[styles.Card_para]}>{i.desc}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={styles.c2}>
            <Text style={styles.c2_heading}>Some Numbers</Text>
            <View style={styles.numbers}>
              {numbers.map((i, index) => (
                <View
                  style={[
                    styles.reviews,
                    width <= 500 ? styles.reviews_500 : null,
                  ]}
                  key={index}
                >
                  <Text style={styles.review_num}>
                    {i.num}
                    {i.more}
                  </Text>
                  <Text style={styles.review_title}>{i.title}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.c3}>
            <View style={styles.c3_div}>
              <Text style={styles.C3_HEADING}>
                Would you like to start a project with us?
              </Text>
              <View>
                <TouchableOpacity style={styles.c3_btn}>
                  <Text style={styles.c3_btn_txt}>CONTACT</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <Footer />
      </View>
    </ScrollView>
  );
}
