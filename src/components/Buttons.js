import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export const DefaultButton = ({ title }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.main} activeOpacity={0.7}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

export const DangerButton = ({ title }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.danger} activeOpacity={0.7}>
                <Text style={styles.buttonTextDanger}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "80%",
    },
    main: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 20,
        alignItems: "center",
        marginBottom: 10
    },
    danger: {
        backgroundColor: "#f00",
        padding: 20,
        borderRadius: 20,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 20,
        color: "#000",
        fontWeight: '600'
    },
    buttonTextDanger: {
        fontSize: 20,
        color: "#fff",
        fontWeight: '600'
    }
});
