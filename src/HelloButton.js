import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export const HelloButton = ({ title, check }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.main} onPress={check}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "90%",
    },
    main: {
        backgroundColor: "#000",
        padding: 20,
        borderRadius: 20,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 20,
        color: "#fff",
    },
});
