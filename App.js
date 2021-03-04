import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";

const Icon = createIconSetFromIcoMoon(
    require("./src/selection.json"),
    "IcoMoon",
    "icomoon.ttf"
);

import png from "./assets/dust.jpg";

export default function App() {
    const [flag, setFlag] = useState(true);

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

                <View style={styles.main}>
                    <TouchableOpacity
                        style={styles.leftTap}
                        onPress={() => console.log("Предыдущий текст")}
                    />
                    <TouchableOpacity
                        style={styles.rightTap}
                        onPress={() => console.log("Следующий текст")}
                    />
                </View>

                <Icon
                    name='Menu-Icon'
                    size={21}
                    color='white'
                    style={styles.icon}
                    onPress={() => console.log("Открытие меню")}
                />
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
    main: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1,
        flexDirection: "row",
    },
    leftTap: {
        height: "100%",
        width: "35%",
    },
    rightTap: {
        height: "100%",
        width: "65%",
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
        fontSize: 16,
    },
    icon: {
        position: "absolute",
        top: 15,
        left: 15,
        paddingTop: 0,
        paddingLeft: 0,
        paddingBottom: 15,
        paddingRight: 15,
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
