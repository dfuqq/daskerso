import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

export const Menu = ({ openMenu }) => {
    return (
        <View style={styles.menu}>
            <TouchableOpacity style={styles.close} onPress={openMenu} />
            <TouchableOpacity style={styles.block} />
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        width: '100%',
        height: '100%',
        backgroundColor: 'cyan',
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0.8,
        flex: 1,
        flexDirection: 'column'
    },
    close: {
        width: '25%',
        height: '15%',
        backgroundColor: 'coral'
    },
    block: {
        width: '75%',
        height: '100%',
    }
})