import React from "react";
import {
    StyleSheet,
    View,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import { HomeScreen } from './src/components/HomeScreen'

export default function App() {

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <HomeScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
