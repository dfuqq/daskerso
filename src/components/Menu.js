import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";

const Icon = createIconSetFromIcoMoon(
    require("../fonts/selection.json"),
    "IcoMoon",
    "icomoon.ttf"
);

export const Menu = ({ openMenu }) => {
    return (
        <View style={styles.menu}>
            <View style={styles.overlay}>
                <TouchableOpacity style={styles.block} />
            </View>
            <TouchableOpacity style={styles.container}>
                <TouchableOpacity
                    style={styles.close}
                    onPress={openMenu}
                    activeOpacity={0.7}
                >
                    <Icon name='menuClose' size={40} color='white' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.erase} activeOpacity={0.7}>
                    <Icon name='menuEraseData' size={37} color='white' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.volume} activeOpacity={0.7}>
                    <Icon name='menuVolume' size={25} color='white' />
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    menu: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        flex: 1,
        flexDirection: "column",
    },
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#000",
        opacity: 0.7,
    },
    container: {
        width: "25%",
        height: "100%",
        backgroundColor: "#1a1a1a",
        position: "absolute",
    },
    close: {
        width: "100%",
        height: "15%",
        justifyContent: "center",
        alignItems: "center",
    },
    erase: {
        width: "100%",
        height: "15%",
        alignItems: "center",
        paddingTop: 10,
    },
    volume: {
        width: "100%",
        height: "70%",
        alignItems: "center",
    },
    block: {
        width: "75%",
        height: "100%",
    },
});
