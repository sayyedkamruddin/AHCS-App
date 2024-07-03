import { Dimensions, StyleSheet } from "react-native";
let { width, height } = Dimensions.get("window");
export default styles = StyleSheet.create({
  home: {
    // borderWidth: 1,
    borderColor: "red",
    // top: 0,
    width: "100%",
    flex: 1,
    // position:"relative",
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
    // fontSize: 20,
    fontSize: width <= 768 ? 15 : 18,
    // fontSize:width<=580?width*0.025:width*0.015
  },
  Tbtn: {
    color: "white",
    // fontSize: 20,
    fontSize: height * 0.025,
  },
  main: {
    // borderWidth: 2,
    borderColor: "red",
    // position:"relative",
    height: 700,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    flexDirection: width <= 1024 ? "column" : "row",
    // paddingHorizontal:width<=1024?40:""
  },
  left: {
    // borderWidth: 2,
    // width:"65%",
    flex: 1,
    padding: "3%",
    // alignItems:'center',
    // justifyContent:'center',
    // gap: 50,
  },
  leftHeading: {
    fontSize: height * 0.035,
    fontWeight: "800",
  },
  right: {
    padding: "3%",
    // borderWidth: 2,
    gap: 50,
    // width:'35%',
    flex: 1,
    // justifyContent:'center'
    gap: width <= 1024 ? 10 : 50,
  },
  rightHeading: {
    fontSize: height * 0.04,
    fontWeight: "800",
  },
  rightContainer: {
    gap: 15,
  },
  r1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 1,
    width: "100%",
    justifyContent: "space-between",
    // gap:30
  },
  r1Txt: {
    fontSize: height * 0.025,
    width: "80%",
  },
  rightContainerHeading: {
    fontSize: height * 0.03,
    fontWeight: "500",
  },
  map: {
    width: "100%",
    height: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 2,
  },
});
