import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  map: {},
  subMainContainer: {
    backgroundColor: "#ad462f",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  rideInfoContainer: {
    flexDirection: "row",

    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: "space-around",
  },
  topContainer: {
    marginVertical: 10,
    marginLeft: 10,
  },
  bottomContainer: { marginVertical: 10 },

  text: {
    marginLeft: 7,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    width: 180,
  },
  bottomtext: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 4.7,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "#8D1900",
  },
  button: { margin: 10 },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});

export default styles;
