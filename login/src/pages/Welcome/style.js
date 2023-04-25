import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    // backgroundColor: '#38A69D',  
    backgroundColor: "#a6a6e8",
  },

  containerLogo: {
    flex: 2,
    backgroundColor: "#a6a6e8",
    justifyContent: "center",
    alignItems: "center",
  },

  containerForm: {  
    flex: 1.7,
    backgroundColor: "black",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },


  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12,
  },

  text: {
    color: "#c2c2ea",
    fontSize: 18,
  },

  button: {
    position: "absolute",
    backgroundColor: "#a6a6e8",
    borderRadius: 50,
    paddingVertical: 15,
    width: "60%",
    alignSelf: "center",
    bottom: "30%",
    alignItems: "center",
  },

  buttonText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },



});

export default styles