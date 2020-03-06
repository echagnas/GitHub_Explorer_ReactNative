import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return <View style={styles.headerStyle}>
        <Text style={styles.text}>GITHUB EXPLORER</Text>
    </View>
}

const styles = StyleSheet.create({
    text: {
        color: "#FFFFFFBB",
        fontFamily: 'Oxanium-Regular',
        fontSize: 20
    },
    headerStyle: {
        backgroundColor: '#00000099',
        padding: 20
    }
});