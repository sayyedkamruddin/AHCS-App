import React from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Footer from "../component/Footer";
import styles from "../css/Service_css";
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

export default function Service({ navigation }) {
  let card = [
    {
      icon: <FontAwesome6 name="pen-to-square" size={40} color="#F9C349" />,
      heading: "Designing",
      desc: "Custom Designs As Per Your Brand & Personal Identity To Stand Unique.",
    },
    {
      icon: <Ionicons name="code-slash-sharp" size={40} color="#F9C349" />,
      heading: "Development",
      desc: "Efficient, Logical, Automated, SDLC compliant, Ready Deploy, & Loss proof Custom Web & Mobile Apps Development Strategy.",
    },
    {
      icon: <FontAwesome5 name="paper-plane" size={40} color="#F9C349" />,
      heading: "SEO Marketing",
      desc: "Get A Organic Traffic & Best Audience As Your User Set!",
    },
    {
      icon: <Entypo name="cloud" size={40} color="#F9C349" />,
      heading: "Infrastructure",
      desc: "Custom Hardware & Cloud Infrastructure For Your Business!",
    },
    {
      icon: <FontAwesome name="credit-card" size={40} color="#F9C349" />,
      heading: "eCommerce",
      desc: "Custom & Premade E-Commerce Platforms For Your Own Brand, Shop, Business To Grow & Better Reach.",
    },
    {
      icon: <FontAwesome5 name="user-circle" size={40} color="#F9C349" />,
      heading: "Help & Support",
      desc: "We Love To Support Our Customers & Give a Quick and Best Solutions To Their Problems.",
    },
    {
      icon: <FontAwesome name="graduation-cap" size={40} color="#F9C349" />,
      heading: "Training",
      desc: "IT Trainings To Be With The Market Pace",
    },
    {
      icon: <FontAwesome5 name="users" size={40} color="#F9C349" />,
      heading: "Outsourcing",
      desc: "Project & Consultant Outsourcing As Per The Requirements",
    },
    {
      icon: <MaterialIcons name="settings-suggest" size={40} color="#F9C349" />,
      heading: "Product Enhancements",
      desc: "We Love To Enhance Your Products In Better Shape.",
    },
  ];

  return (
    <ScrollView>
      <View style={styles.home}>
        <NavbarRes n={navigation} />
        <View style={styles.bgImg}>
          <Text style={styles.heading}>Services</Text>
          <Text style={styles.subHeading}>
            We Provide a wide range of Services
          </Text>
        </View>
        <View style={styles.main}>
          <View style={styles.c1}>
            <Text style={styles.c1_heading}>How can we help you?</Text>
            <View style={styles.cards}>
              {card.map((i, index) => {
                return (
                  <View style={[styles.card]} key={index}>
                    <Text>{i.icon}</Text>
                    <Text style={[styles.Card_heading]}>{i.heading}</Text>
                    <Text
                      style={[
                        styles.Card_para,
                        width < 1024 ? styles.Card_para_1024 : null,
                      ]}
                    >
                      {i.desc}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>

          <View style={styles.c2}>
            <View style={styles.c2_div}>
              <Text style={styles.C2_HEADING}>
                Would you like to start a project with us?
              </Text>
              <View>
                <TouchableOpacity style={styles.c2_btn}>
                  <Text style={styles.c2_btn_txt}>CONTACT</Text>
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
