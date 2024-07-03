import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Hom from "../pages/Hom";
import Service from "../pages/Service";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { Platform } from "react-native";

let drawer = createDrawerNavigator();
const linking = {
  // prefixes:['http://mychat.com','mychat://'],
  config: {
    screens: {
      Home: "",
      Services: "/Services",
      About: "/About",
      Contact: "/Contact",
      Er: "/*",
    },
  },
};

export default function RightDrawerRes() {
  return (
    <NavigationContainer
      onError={(error) => {
        console.log("Navigation error:", error.message);
      }}
      linking={Platform.OS == "web" ? linking : null}
      fallback={<Text>Loading...</Text>}
    >
      <drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerShown: false,
          drawerPosition: "right",
          drawerType: "back",
        }}
      >
        <drawer.Screen
          name="Home"
          component={Hom}
          options={{
            title: "Home",
          }}
        />
        <drawer.Screen
          name="Services"
          component={Service}
          options={{
            title: "Services",
          }}
        />
        <drawer.Screen
          name="About"
          component={About}
          options={{
            title: "About",
          }}
        />
        <drawer.Screen
          name="Contact"
          component={Contact}
          options={{
            title: "Contact",
          }}
        />

        {/* FOr error page */}
        {/* <drawer.Screen
          name="Er"
          component={Hom}
          options={{
            title: "Contact",
          }}
        /> */}
      </drawer.Navigator>
    </NavigationContainer>
  );
}
