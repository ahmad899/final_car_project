import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {},
  inputContainer: {
    marginBottom: 20,
  },
  logo: {
    height: 130,
    width: "100%",
    alignSelf: "center",
    borderRadius: 999,
    margin: 30,
    marginTop: 20,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",

    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },

  radioButton: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 50,

    alignItems: "center",
  },
  radioText: {
    fontSize: 15,
    fontWeight: "bold",
    marginRight: 40,
  },
  button: {
    backgroundColor: "#ad462f",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: "#2e2e2d",
  },
  footerLink: {
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 16,
  },
});
