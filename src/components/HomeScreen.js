import React, { useState } from "react";
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

import { DefaultButton } from "./Buttons";
import { DangerButton } from "./Buttons";

import { Menu } from "./Menu";

const Icon = createIconSetFromIcoMoon(
    require("../fonts/selection.json"),
    "IcoMoon",
    "icomoon.ttf"
);

import png from "../img/dust.jpg";
import Texts from "../text/Test.json";

export const HomeScreen = () => {
    const [count, setCount] = useState(1);
    const [flag, setFlag] = useState(false);

    const [fontsLoaded] = useFonts({
        IcoMoon: require("../fonts/icomoon.ttf"),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }

    function clickNext() {
        count === 5 ? null : setCount(count + 1);
    }

    function clickPrev() {
        if (count === 1) {
            null;
        } else {
            setCount(count - 1);
        }
    }

    function openMenu() {
        setFlag(!flag);
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={png} style={styles.image}>
                <View style={styles.overlay} />

                <Text style={styles.text}>{Texts[count]}</Text>
                {!flag && <Text style={styles.date}>Пт, 27 февраля</Text>}

                <View style={styles.main}>
                    <TouchableOpacity
                        style={styles.leftTap}
                        onPress={clickPrev}
                    />
                    <TouchableOpacity
                        style={styles.rightTap}
                        onPress={clickNext}
                    />
                </View>

                <TouchableOpacity
                    style={styles.iconDiv}
                    onPress={openMenu}
                    activeOpacity={0.7}
                >
                    {!flag && <Icon name='menuIcon' size={21} color='white' />}
                </TouchableOpacity>

                {count === 5 && <DefaultButton title='Да' />}

                {count === 5 && <DangerButton title='Нет' />}

                {flag && <Menu openMenu={openMenu} />}
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    iconDiv: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: 12,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: 55,
        height: 55,
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
        marginBottom: 40,
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
