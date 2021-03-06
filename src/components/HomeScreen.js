import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";

const Icon = createIconSetFromIcoMoon(
    require("../selection.json"),
    "IcoMoon",
    "icomoon.ttf"
);

import png from "../dust.jpg";

export const HomeScreen = () => {
    const [fontsLoaded] = useFonts({
        IcoMoon: require("../icomoon.ttf"),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.container}>
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

                <TouchableOpacity style={styles.iconDiv} onPress={() => console.log('Меню')} activeOpacity={0.7}>
                    <Icon
                        name='Menu-Icon'
                        size={21}
                        color='white'
                        style={styles.icon}
                    />
                </TouchableOpacity>

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
    iconDiv: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: 12,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 55,
        height: 55
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