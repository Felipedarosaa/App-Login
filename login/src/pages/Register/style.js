import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#a6a6e8",
  },

  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },

  containerForm: {
    backgroundColor: "#a6a6e8",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },

  pressable: {
    width: "100%",
    height: "100%",
  },

  message: {
    top: "15%",
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },

  title: {
    color: "black",
    fontSize: 20,
    marginTop: 60,
    marginBottom: 15,
    left: 5,
  },

  inputName: {
    backgroundColor: "black",
    color: "white",
    borderWidth: 2,
    paddingLeft: "20%",
    borderRadius: 25,
    height: 60,
    top: 60,
    marginBottom: 25,
    fontSize: 16,
  },

  inputEmail: {
    backgroundColor: "black",
    color: "white",
    borderWidth: 2,
    paddingLeft: "20%",
    borderRadius: 25,
    height: 60,
    top:80,
    marginBottom: 5,
    fontSize: 16,
  },

  inputPassword: {
    backgroundColor: "black",
    color: "white",
    borderWidth: 2,
    paddingLeft: "20%",
    borderRadius: 25,
    height: 60,
    top: 110,
    marginBottom: 5,
    fontSize: 16,
  },

  errorName: {
    position: "absolute",
    top: 125,
    left: 15,
    color: 'red',
    fontSize: 17,
  },

  errorEmail: {
    position: "absolute",
    top: 230,
    left: 15,
    color: 'red',
    fontSize: 17,
  },

  errorPassword: {
    position: "absolute",
    top: 330,
    left: 15,
    color: 'red',
    fontSize: 17,
  },

  button: {
    backgroundColor: "white",
    width: "60%",
    borderRadius: 25,
    paddingVertical: 15,
    marginTop: 210,
    left: "20.5%",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },

  iconName: {
    position: "absolute",
    top: "9.3%",
    alignSelf: "flex-start",
    left: 16,
  },

  iconMail: {
    position: "absolute",
    top: "23%",
    alignSelf: "flex-start",
    left: 16,
  },

  iconPassword: {
    position: "absolute",
    top: "35.2%",
    alignSelf: "flex-start",
    left: 16,
  },

});

export default styles