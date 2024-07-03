import React, { useEffect } from "react";
import {
  Dimensions,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Footer from "../component/Footer";
import styles from "../css/Home_style";
// import { Platform } from "react-native";
import {
  FontAwesome6,
  Ionicons,
  FontAwesome5,
  Entypo,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import NavbarRes from "../component/NavbarRes";
import { useNavigation } from "@react-navigation/native";
let { width } = Dimensions.get("window");

export default function Hom({ navigation }) {
  let navigatio = useNavigation();
  const portfolio = [
    {
      name: "Permeance Tech",
      Img_url:
        "https://ahcs.co.in/wp-content/uploads/2022/04/permeancetech-150x150.jpg",
      link: "http://permeancetech.com/",
    },
    {
      name: "MITS",
      Img_url: "https://ahcs.co.in/wp-content/uploads/2022/04/MITS-150x150.jpg",
      link: "https://www.mitsfmsolutions.com/",
    },
    {
      name: "Crown Security",
      Img_url:
        "https://ahcs.co.in/wp-content/uploads/2022/04/crown-security-square-150x150.jpg",
      link: "https://crownsecuritysolutions.com/",
    },
    {
      name: "Urban Builders",
      Img_url:
        "https://ahcs.co.in/wp-content/uploads/2022/04/urbanbuilders-150x150.png",
      link: "http://theurbanbuilders.in/",
    },
  ];

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

  const customer = [
    {
      link: "",
      Img_url: "https://ahcs.co.in/wp-content/uploads/2022/04/Mits-logo.png",
    },
    {
      link: "",
      Img_url: "https://ahcs.co.in/wp-content/uploads/2022/04/urbanspace.png",
    },
    {
      link: "",
      Img_url:
        "https://ahcs.co.in/wp-content/uploads/2022/04/permeancetech-logo.png",
    },
    {
      link: "",
      Img_url:
        "https://ahcs.co.in/wp-content/uploads/2022/04/crown-logo-new.jpg",
    },
  ];

  return (
    <ScrollView>
      <View style={styles.home}>
        <NavbarRes n={navigation} />
        <View style={styles.bgImg}>
          <Text style={styles.heading}>AHCS Provides</Text>
          <Text style={styles.subHeading}>Customized Web App Solutions</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Services")}
          >
            <Text style={styles.Tbtn}>Click Here</Text>
          </TouchableOpacity>
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
            <Text style={styles.c2_heading}>Portfolio</Text>
            <View style={styles.c2_cards}>
              {portfolio.map((i, index) => {
                return (
                  <View
                    style={[
                      styles.c2_card,
                      width < 768 ? styles.c2_card_768 : null,
                    ]}
                    key={index}
                  >
                    <TouchableOpacity onPress={() => Linking.openURL(i.link)}>
                      <Image
                        source={{ uri: i.Img_url }}
                        style={[
                          styles.c2Img,
                          width < 768 ? styles.c2Img_768 : null,
                        ]}
                      />
                    </TouchableOpacity>
                    <Text style={styles.c2_Card_heading}>{i.name}</Text>
                  </View>
                );
              })}
            </View>
          </View>

          <View style={styles.c3}>
            <Text style={styles.c3_heading}>Our Customers</Text>
            <View style={styles.c3_cards}>
              {customer.map((i, index) => {
                return (
                  <View style={styles.c3_card} key={index}>
                    {/* <Image source={{uri:i.Img_url}} style={[styles.c3Img,width<1360?styles.c3Img_1360:null,width<980?styles.c3Img_980:null,width<768?styles.c3Img_768:null]}/> */}
                    <Image source={{ uri: i.Img_url }} style={[styles.c3Img]} />
                  </View>
                );
              })}
            </View>
          </View>
        </View>
        <Footer />
      </View>
    </ScrollView>
  );
}
