import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  growContainer: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  mainTitle: {
    marginBottom: 40,
    fontSize: 64,
    fontWeight: "bold",
    textAlign: "center"
  },
  title: {
    marginBottom: 40,
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center"
  },
  btnLrg: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 75,
    borderRadius: 50,
    backgroundColor: "#000"
  },
  btnLrgText: {
    fontSize: 30,
    color: "#fff"
  },
  playerInput: {
    width: "90%",
    height: 50,
    marginTop: 10,
    marginBottom: 30,
    borderColor: "black",
    borderWidth: "2px",
    borderRadius: 25,
    paddingLeft: 25,
    fontSize: 20,
    placeholderTextColor: "grey"
  },
  plusBtn: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 50,
  },
  plusBtnText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  inputBtnView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});