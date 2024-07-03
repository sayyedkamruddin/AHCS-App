import { Dimensions, StyleSheet } from "react-native";

let { width, height } = Dimensions.get("window");
export default styles = StyleSheet.create({
  home: {
    // borderWidth: 1,
    borderColor: "red",
    // top: 0,
    width: "100%",
    flex: 1,
    // position: "absolute",
    // zIndex: 0,
  },
  bgImg: {
    // borderWidth: 1,
    borderColor: "red",
    height: 600,
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#15120B",
    // backgroundColor:'red',
    // zIndex: 0,
    gap: 20,
  },
  heading: {
    color: "white",
    fontSize: 35,
    fontWeight: "700",
    fontSize: width <= 768 ? 24 : 35,
  },
  subHeading: {
    color: "white",
    // fontSize: 18,
    fontSize: width <= 768 ? 15 : 18,

    // fontSize:width<=580?width*0.025:width*0.015
  },
  Tbtn: {
    color: "white",
    fontSize: height * 0.025,
  },
  btn: {
    borderWidth: 2,
    borderColor: "white",
    paddingVertical: height * 0.015,
    paddingHorizontal: height * 0.023,
    borderRadius: 5,
  },
  main: {
    // borderWidth: 2,
  },
  cards: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 18,
    flexWrap: "wrap",
    // flexShrink:3
    // flexGrow:'3'
  },
  card: {
    // borderWidth:1,
    backgroundColor: "white",
    display: "flex",
    gap: 20,
    height: 300,
    height: width <= 1024 ? null : null,
    width: "30%",
    width: width <= 768 ? "100%" : "30%",
    alignItems: "flex-start",
    // justifyContent:'center',
    padding: 30,
    padding: width <= 1024 ? 22 : 30,
    paddingVertical: width <= 768 ? 30 : "",
  },

  c1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    padding: width <= 768 ? 20 : 40,
    backgroundColor: "#F8F7F3",
  },
  c1_heading: {
    fontSize: height * 0.05,
    fontSize: width <= 375 ? height * 0.03 : height * 0.05,
    fontWeight: "700",
    padding: 50,
    padding: width <= 425 ? 30 : 50,
  },
  Card_heading: {
    // fontSize: 25,
    fontSize: height * 0.03,
    // fontSize: width < 1024 ? 20 : 25,
    fontWeight: "800",
  },
  Card_para: {
    fontSize: height * 0.0276,
    lineHeight: 35,
    // fontSize: 18,
    color: "#62615C",
  },

  Card_para_1024: {
    // fontSize: 15,
  },
  c2: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    // alignItems:'center',
    padding: 50,
    padding: width <= 425 ? 30 : 50,
  },
  c2_heading: {
    fontSize: height * 0.05,
    fontSize: width <= 375 ? height * 0.03 : height * 0.05,
    fontWeight: "800",
    padding: 50,
    padding: width <= 425 ? 20 : 50,
    textAlign: "center",
  },
  c2_cards: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    flexWrap: "wrap",
  },
  c2_card: {
    display: "flex",
    alignContent: "flex-start",
    justifyContent: "flex-start",
    // height:320,
    width: "22%",
    height: width < 1024 ? 200 : 320,
    width: width < 768 ? "47%" : "22%",
    gap: 20,
    // borderWidth:1
  },
  c2_card_768: {
    height: 220,
    width: width < 426 ? "100%" : "47%",
  },
  c2Img: {
    height: 300,
    height: width < 1024 ? 180 : 300,
    // width:"30%",
    resizeMode: "cover",
    resizeMode: width < 426 ? "contain" : "cover",
  },
  c2Img_768: {
    height: 180,
  },
  c2_Card_heading: {
    textAlign: "center",
    fontSize: 20,
    fontSize: width < 1024 ? 15 : 20,
  },
  c3_heading: {
    fontSize: height * 0.05,
    fontSize: width <= 375 ? height * 0.03 : height * 0.05,
    fontWeight: "800",
    padding: 50,
    padding: width <= 425 ? 30 : 50,
    textAlign: "center",
  },
  c3: {
    backgroundColor: "white",
    display: "flex",
    // justifyContent:'center',
    // alignItems:'center',
    padding: 50,
  },
  c3_cards: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    flexWrap: "wrap",
    // resizeMode:'contain',
    flex: 1,
  },
  c3_card: {
    // borderWidth:1,
    width: "22%",
    width: width <= 425 ? "80%" : "22%",
  },
  c3Img: {
    height: 100,
    // width:"50%",
    resizeMode: "contain",
  },
});
