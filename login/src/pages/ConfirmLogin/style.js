import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "black",
    },

    containerForm: {
        flex: 2,
        backgroundColor: "#a6a6e8",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        borderTopWidth: "50%",
        borderColor: "black",
    },

    title: {
        fontSize: 35,
        bottom: "15%",
        fontWeight: "bold",
        marginTop: 28,
    },

    button: {
        position: "absolute",
        backgroundColor: "white",
        borderRadius: 50,
        paddingVertical: 15,
        width: "60%",
        alignSelf: "center",
        bottom: "40%",
        alignItems: "center",
        justifyContent: "center",
    },

    buttonText: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
    },

});

export default styles