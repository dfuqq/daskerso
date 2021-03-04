import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";

import HelloButton from "./src/HelloButton";

const Icon = createIconSetFromIcoMoon(
    require("./src/selection.json"),
    "IcoMoon",
    "icomoon.ttf"
);

import png from "./assets/dust.jpg";

export default function App() {
    const [flag, setFlag] = useState(false);

    const check = () => setFlag(!flag);

    const [fontsLoaded] = useFonts({
        IcoMoon: require("./assets/fonts/icomoon.ttf"),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <ImageBackground source={png} style={styles.image}>
                <View style={styles.overlay} />
                <Text style={styles.text}>
                    {`Меня зовут \n Даскерсо Алфодида`}
                </Text>
                <Text style={styles.date}>Пт, 27 февраля</Text>
                <Icon
                    name='Menu-Icon'
                    size={20}
                    color='white'
                    style={styles.icon}
                    onPress={check}
                />
                {flag && <HelloButton title='check' />}
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 26,
        textAlign: "center",
        color: "#fff",
        marginBottom: 20,
        paddingHorizontal: 5,
    },
    date: {
        position: "absolute",
        color: "#fff",
        top: 20,
    },
    icon: {
        position: "absolute",
        top: 15,
        left: 15,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
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
});
